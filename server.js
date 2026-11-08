import express from 'express';
import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const PORT = process.env.PORT || 3000;
const TOKEN = process.env.ADMIN_TOKEN || '';
const DB_PATH = process.env.DB_PATH || 'data/portfolio.db';
mkdirSync(dirname(DB_PATH), { recursive: true });
const db = new DatabaseSync(DB_PATH);
db.exec(`
  CREATE TABLE IF NOT EXISTS kv (k TEXT PRIMARY KEY, v TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS skills (name TEXT PRIMARY KEY, cat TEXT NOT NULL, level INTEGER NOT NULL);
  CREATE TABLE IF NOT EXISTS visitors (id TEXT PRIMARY KEY, handle TEXT, xp INTEGER DEFAULT 0, state TEXT NOT NULL, updated INTEGER);
  CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, body TEXT, ts INTEGER);
`);

// ---- seed (only when empty). Skill levels are SELF-RATED PLACEHOLDERS: edit them. ----
const DEFAULT_PROFILE = {
  firstName: 'Hemant', lastName: 'Bhadke', callsign: 'HB-01 // EFSF-OPS',
  role: 'DevOps / DevSecOps Engineer · CI/CD · IaC · SRE', location: 'Maharashtra, India',
  bio: 'DevOps and DevSecOps engineer with 4+ years at Infosys across CI/CD, GitOps, Terraform and SRE-grade observability. Cut MTTR 60% and pipeline failures 40%, with 100% zero-downtime deployments for Ricoh and Siemens Energy. Off the clock: tactical games, Gundam builds, Linux wargames and ESP32 soldering.',
  linkedin: 'https://www.linkedin.com/in/hemantrbhadke', github: 'https://github.com/hemantbhadke', email: 'hemantrbhadke@gmail.com'
};
const SEED = [['AWS','cloud',4],['Azure','cloud',4],['GCP','cloud',3],['Oracle Cloud','cloud',3],['Terraform','iac',4],['Ansible','iac',3],
  ['Kubernetes','containers',3],['Docker','containers',4],['Istio','containers',2],['Jenkins','cicd',3],['GitHub Actions','cicd',3],['ArgoCD','cicd',3],
  ['IAM · KMS · RBAC','security',3],['Linux','scripting',4],['Bash','scripting',4],['Python','scripting',3],['Prometheus','observability',4],
  ['Grafana','observability',4],['Nagios','observability',4],['Datadog','observability',3],['Splunk','observability',3],['ELK','observability',3]];
const CONTENT = {
  experience: [
    { role: 'Cloud DevOps Engineer', org: 'Infosys · client Ricoh', period: '2023-07 → present', bullets: [
      'Rebuilt release pipelines around Jenkins, GitHub Actions and ArgoCD (GitOps): zero-downtime deploys on EKS/AKS',
      'Replaced manual provisioning with Terraform and Ansible across AWS/Azure, cutting pipeline failures 40%',
      'Closed monitoring gaps with Prometheus, Grafana and Datadog: observability coverage up 35%',
      'Folded least-privilege IAM, KMS encryption and Azure RBAC into CI/CD',
      'On-call for P1/P2 incidents; led RCA and change management under ITIL',
      'Mentored junior engineers on IaC and Python/Bash: team delivery output up 25%'] },
    { role: 'Cloud DevOps Engineer', org: 'Infosys · client Siemens Energy', period: '2022-06 → 2023-06', bullets: [
      'Cut MTTR 60% with end-to-end Nagios monitoring and Python/Bash alert automation',
      'Raised SLA adherence and uptime 30% via tuned thresholds and Grafana/Splunk dashboards',
      'Built production networking on AWS/Azure: VPC, load balancers, DNS, firewall rules',
      'Rolled out Istio service mesh on EKS/AKS for routing, mTLS and policy-based access',
      'Embedded IAM, RBAC and KMS checks directly in the CI/CD pipeline'] }],
  certs: [
    { issuer: 'Oracle', name: 'Cloud Infrastructure 2025 DevOps Professional', issued: '2025-09' },
    { issuer: 'Red Hat', name: 'Linux Fundamentals (RH104)', issued: '2025-09' },
    { issuer: 'Infosys', name: 'Kubernetes Administrator, Associate', issued: '2024' },
    { issuer: 'Infosys', name: 'Ansible Automation Associate', issued: '2024' }],
  projects: [
    { name: 'Azure Landing Zone', desc: 'Terraform landing zone: management groups, RBAC, NSG/ASG rules, hub-spoke VNet peering, Traffic Manager, Azure DNS, secrets in Key Vault.', tags: ['Terraform', 'Azure', 'RBAC', 'Key Vault'], url: null },
    { name: 'Disaster Recovery Automation', desc: 'Automated AMI snapshots and S3 archiving with Lambda and CloudWatch Events: 50% lower RTO.', tags: ['Lambda', 'CloudWatch', 'S3'], url: null },
    { name: 'Self-Service Portal', desc: 'Jenkins + Terraform portal so developers provision isolated AWS environments on demand.', tags: ['Jenkins', 'Terraform', 'AWS'], url: null },
    { name: 'Enterprise Monitoring', desc: 'Nagios monitoring across prod and staging with custom service checks and automated alerting.', tags: ['Nagios', 'Bash', 'Alerting'], url: null }]
};
if (!db.prepare('SELECT 1 FROM kv WHERE k=?').get('profile'))
  db.prepare('INSERT INTO kv VALUES (?,?)').run('profile', JSON.stringify(DEFAULT_PROFILE));
if (!db.prepare('SELECT 1 FROM skills').get()) { const i = db.prepare('INSERT INTO skills VALUES (?,?,?)'); SEED.forEach(s => i.run(...s)); }
for (const [k, v] of Object.entries(CONTENT)) if (!db.prepare('SELECT 1 FROM kv WHERE k=?').get(k)) db.prepare('INSERT INTO kv VALUES (?,?)').run(k, JSON.stringify(v));

const profile = () => JSON.parse(db.prepare('SELECT v FROM kv WHERE k=?').get('profile').v);
const skills = () => db.prepare('SELECT name, cat, level FROM skills ORDER BY level DESC, name').all();
const content = () => Object.fromEntries(['experience', 'certs', 'projects'].map(k => [k, JSON.parse(db.prepare('SELECT v FROM kv WHERE k=?').get(k)?.v ?? '[]')]));
const clean = (s, n) => String(s ?? '').replace(/[\u0000-\u0008\u000b-\u001f<>]/g, ' ').trim().slice(0, n);
const admin = (q, r, n) => (TOKEN && q.get('x-admin-token') === TOKEN ? n() : r.status(401).json({ error: 'unauthorized' }));
const hits = new Map();
const limited = (ip, max = 5, win = 3600e3) => { const t = Date.now(), a = (hits.get(ip) || []).filter(x => t - x < win); a.push(t); hits.set(ip, a); return a.length > max; };

const app = express();
app.set('trust proxy', 1);
app.use(express.json({ limit: '50kb' }));
const ORIGIN = process.env.CORS_ORIGIN || '';   // e.g. https://hemantbhadke.github.io when the static site calls this API
app.use((q, r, n) => {
  r.set({ 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer' });
  if (ORIGIN) { r.set({ 'Access-Control-Allow-Origin': ORIGIN, 'Access-Control-Allow-Headers': 'content-type, x-admin-token', 'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS', Vary: 'Origin' }); if (q.method === 'OPTIONS') return r.sendStatus(204); }
  n();
});

app.get('/api/health', (_q, r) => r.json({ ok: true, uptime: Math.round(process.uptime()) }));
app.get('/api/profile', (_q, r) => r.json({ profile: profile(), skills: skills(), ...content() }));

const F = { firstName: 40, lastName: 40, callsign: 60, role: 120, location: 80, bio: 600, linkedin: 200, github: 200, email: 120 };
app.put('/api/profile', admin, (q, r) => {
  const next = { ...profile() };
  for (const [k, n] of Object.entries(F)) if (typeof q.body[k] === 'string') next[k] = clean(q.body[k], n);
  if (!/^https:\/\//.test(next.linkedin) || !/^https:\/\//.test(next.github)) return r.status(400).json({ error: 'links must be https://' });
  db.prepare('REPLACE INTO kv VALUES (?,?)').run('profile', JSON.stringify(next));
  r.json({ profile: next });
});

app.put('/api/skills', admin, (q, r) => {
  const a = q.body;
  if (!Array.isArray(a) || a.length > 60) return r.status(400).json({ error: 'array of up to 60 skills' });
  try {
    db.exec('BEGIN'); db.exec('DELETE FROM skills');
    const i = db.prepare('INSERT OR REPLACE INTO skills VALUES (?,?,?)');
    a.forEach(s => i.run(clean(s.name, 40), clean(s.cat, 20).toLowerCase(), Math.max(1, Math.min(5, parseInt(s.level) || 1))));
    db.exec('COMMIT'); r.json({ skills: skills() });
  } catch { db.exec('ROLLBACK'); r.status(400).json({ error: 'bad skills' }); }
});

app.put('/api/content/:kind', admin, (q, r) => {
  if (!['experience', 'certs', 'projects'].includes(q.params.kind) || !Array.isArray(q.body) || q.body.length > 30) return r.status(400).json({ error: 'bad content' });
  db.prepare('REPLACE INTO kv VALUES (?,?)').run(q.params.kind, JSON.stringify(q.body));
  r.json(content());
});

const ID = /^[0-9a-f-]{36}$/;
app.get('/api/state/:id', (q, r) => {
  if (!ID.test(q.params.id)) return r.status(400).json({ error: 'bad id' });
  const row = db.prepare('SELECT state FROM visitors WHERE id=?').get(q.params.id);
  r.json({ state: row ? JSON.parse(row.state) : null });
});
app.put('/api/state/:id', (q, r) => {
  const s = q.body;
  if (!ID.test(q.params.id) || !s || Array.isArray(s) || JSON.stringify(s).length > 20000) return r.status(400).json({ error: 'bad state' });
  const xp = Math.max(0, Math.min(50000, parseInt(s.xp) || 0));   // client-reported: a fun metric, not a security boundary
  const handle = clean(s.flags?.handle, 16) || null;
  db.prepare('REPLACE INTO visitors VALUES (?,?,?,?,?)').run(q.params.id, handle, xp, JSON.stringify(s), Date.now());
  r.json({ ok: true });
});
app.get('/api/leaderboard', (_q, r) => r.json(db.prepare('SELECT handle, xp FROM visitors WHERE handle IS NOT NULL ORDER BY xp DESC LIMIT 10').all()));

app.post('/api/contact', (q, r) => {
  if (limited(q.ip)) return r.status(429).json({ error: 'slow down' });
  const name = clean(q.body.name, 80), email = clean(q.body.email, 120), body = clean(q.body.body, 2000);
  if (!name || body.length < 10 || !/^\S+@\S+\.\S+$/.test(email)) return r.status(400).json({ error: 'name, valid email and a 10+ char message required' });
  db.prepare('INSERT INTO messages (name,email,body,ts) VALUES (?,?,?,?)').run(name, email, body, Date.now());
  r.json({ ok: true });
});
app.get('/api/messages', admin, (_q, r) => r.json(db.prepare('SELECT * FROM messages ORDER BY ts DESC LIMIT 200').all()));

// ---- HR audit: a recruiter-style rubric over the live profile + skills (100 pts) ----
const CATS = ['cloud', 'iac', 'cicd', 'containers', 'observability', 'security', 'scripting'];
app.get('/api/hr-review', (_q, r) => {
  const p = profile(), s = skills(), sections = [], strengths = [], gaps = [], actions = [];
  const add = (name, max, pts) => sections.push({ name, max, score: Math.round(pts) });
  let a = 0; const words = p.bio.split(/\s+/).filter(Boolean).length;
  if (p.role.length > 15) a += 6; else gaps.push('Role headline is too short to position you.');
  if (words >= 30 && words <= 90) a += 7; else gaps.push(`Bio is ${words} words; 30–90 reads best.`);
  if (/\d[\d,.]*\s?(%|x\b|ms\b|mins?\b|minutes?\b|hrs?\b|hours?\b|k\b|\+|(users|services|servers|clusters|pipelines|incidents|deployments|tickets)\b)/i.test(p.bio)) { a += 7; strengths.push('Bio contains measurable impact.'); }
  else { gaps.push('No quantified impact in your bio — recruiters scan for numbers.'); actions.push('Add two measurable wins (e.g. “cut deploy time 40%”, “MTTR 45→12 min”) to your bio.'); }
  add('Positioning', 20, a);
  const have = new Set(s.map(x => x.cat)), miss = CATS.filter(c => !have.has(c));
  add('Breadth', 25, 25 * (CATS.length - miss.length) / CATS.length);
  if (miss.length) { gaps.push(`No skills listed for: ${miss.join(', ')}.`); actions.push(`Add one proof-backed skill in: ${miss.join(', ')}.`); }
  else strengths.push('Covers every core DevOps category.');
  const top = s.slice(0, 5), avg = top.reduce((t, x) => t + x.level, 0) / (top.length || 1);
  add('Depth', 20, 20 * avg / 5);
  if (avg >= 4) strengths.push(`Top-5 skills average ${avg.toFixed(1)}/5 (self-rated).`);
  const path = u => { try { return new URL(u).pathname.length > 1; } catch { return false; } };
  const { experience: ex, certs: ce, projects: pr } = content();
  let c = 0;
  if (path(p.github)) c += 5; else { gaps.push('GitHub link is a bare domain, not your profile.'); actions.push('Point GitHub at your real profile and pin 3 repos with READMEs.'); }
  if (path(p.linkedin)) c += 3; else gaps.push('LinkedIn link is a bare domain, not your profile.');
  if (!/example\.com$/i.test(p.email)) c += 2; else { gaps.push('Contact email is a placeholder (example.com) — recruiters cannot reach you.'); actions.push('Replace the placeholder email first.'); }
  const num = /\d+\s?(%|x\b|ms\b|mins?\b|hrs?\b)/i, wins = ex.flatMap(e => e.bullets || []).filter(b => num.test(b)).length;
  if (wins >= 3) { c += 4; strengths.push(`${wins} experience bullets carry measurable results.`); } else { gaps.push('Fewer than 3 experience bullets have numbers.'); actions.push('Add a metric to each experience bullet.'); }
  if (ce.length >= 2) { c += 2; strengths.push(`${ce.length} certifications listed.`); } else gaps.push('Fewer than 2 certifications listed.');
  if (pr.filter(x => x.url).length >= 2) c += 4; else { gaps.push('Projects have no public links, so a recruiter cannot verify them.'); actions.push('Publish sanitized versions of your top 2 projects as GitHub repos and link them.'); }
  add('Proof of work', 20, c);
  let d = 5; strengths.push('A playable, interactive portfolio shows initiative and product sense.');
  if (have.has('observability')) { d += 5; strengths.push('Observability experience is in demand for SRE roles.'); }
  if (have.has('iac')) d += 5;
  add('Differentiators', 15, d);
  actions.push('Skill levels are self-rated: attach a repo, cert or metric to your top 5 skills.');
  const score = sections.reduce((t, x) => t + x.score, 0);
  r.json({ score, verdict: score >= 75 ? 'SHORTLIST — book the interview' : score >= 60 ? 'SCREEN CALL — promising, fix the gaps' : 'HOLD — profile needs work first',
    sections, strengths, gaps, actions, questions: top.slice(0, 3).map(x => `Walk me through a production incident where ${x.name} was central. What did you change afterwards?`) });
});

app.use(express.static('public'));
app.use((_e, _q, r, _n) => r.status(400).json({ error: 'bad request' }));
app.listen(PORT, () => console.log(`ops-unlocked on :${PORT} (db: ${DB_PATH})`));
