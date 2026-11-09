#!/usr/bin/env python3
"""
Ops Unlocked — Full-Stack Python Server
Zero-dependency backend replacing or accompanying server.js.
Serves public/ static assets + full REST API with SQLite persistence.
"""

import sys
import os
import json
import sqlite3
import time
import re
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, unquote

PORT = int(os.environ.get('PORT', 3000))
TOKEN = os.environ.get('ADMIN_TOKEN', '')
DB_PATH = os.environ.get('DB_PATH', 'data/portfolio.db')

os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
db = sqlite3.connect(DB_PATH, check_same_thread=False)
db.row_factory = sqlite3.Row

with db:
    db.executescript("""
      CREATE TABLE IF NOT EXISTS kv (k TEXT PRIMARY KEY, v TEXT NOT NULL);
      CREATE TABLE IF NOT EXISTS skills (name TEXT PRIMARY KEY, cat TEXT NOT NULL, level INTEGER NOT NULL);
      CREATE TABLE IF NOT EXISTS visitors (id TEXT PRIMARY KEY, handle TEXT, xp INTEGER DEFAULT 0, state TEXT NOT NULL, updated INTEGER);
      CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, body TEXT, ts INTEGER);
    """)

DEFAULT_PROFILE = {
    "firstName": "Hemant", "lastName": "Bhadke", "callsign": "HB-08 // TEKKADAN-OPS",
    "role": "DevOps / Platform Engineer · Tekkadan Fleet SRE · Calamity-Proof Infrastructure",
    "location": "Maharashtra, India",
    "bio": "DevOps and DevSecOps engineer with 4+ years at Infosys across CI/CD, GitOps, Terraform and SRE-grade observability. Cut MTTR 60% and pipeline failures 40%, with 100% zero-downtime deployments for Ricoh and Siemens Energy. Off the clock: tactical games, Gundam builds, Linux wargames and ESP32 soldering.",
    "linkedin": "https://www.linkedin.com/in/hemantrbhadke",
    "github": "https://github.com/hemantbhadke",
    "email": "hemantrbhadke@gmail.com"
}

SEED_SKILLS = [
    ("AWS", "cloud", 4), ("Azure", "cloud", 4), ("GCP", "cloud", 3), ("Oracle Cloud", "cloud", 3),
    ("Terraform", "iac", 4), ("Ansible", "iac", 3), ("Kubernetes", "containers", 3), ("Docker", "containers", 4),
    ("Istio", "containers", 2), ("Jenkins", "cicd", 3), ("GitHub Actions", "cicd", 3), ("ArgoCD", "cicd", 3),
    ("IAM · KMS · RBAC", "security", 3), ("Linux", "scripting", 4), ("Bash", "scripting", 4),
    ("Python", "scripting", 3), ("Prometheus", "observability", 4), ("Grafana", "observability", 4),
    ("Nagios", "observability", 4), ("Datadog", "observability", 3), ("Splunk", "observability", 3),
    ("ELK", "observability", 3)
]

CONTENT = {
    "experience": [
        {
            "role": "Cloud DevOps Engineer", "org": "Infosys · client Ricoh", "period": "2023-07 → present",
            "bullets": [
                "Rebuilt release pipelines around Jenkins, GitHub Actions and ArgoCD (GitOps): zero-downtime deploys on EKS/AKS",
                "Replaced manual provisioning with Terraform and Ansible across AWS/Azure, cutting pipeline failures 40%",
                "Closed monitoring gaps with Prometheus, Grafana and Datadog: observability coverage up 35%",
                "Folded least-privilege IAM, KMS encryption and Azure RBAC into CI/CD",
                "On-call for P1/P2 incidents; led RCA and change management under ITIL",
                "Mentored junior engineers on IaC and Python/Bash: team delivery output up 25%"
            ]
        },
        {
            "role": "Cloud DevOps Engineer", "org": "Infosys · client Siemens Energy", "period": "2022-06 → 2023-06",
            "bullets": [
                "Cut MTTR 60% with end-to-end Nagios monitoring and Python/Bash alert automation",
                "Raised SLA adherence and uptime 30% via tuned thresholds and Grafana/Splunk dashboards",
                "Built production networking on AWS/Azure: VPC, load balancers, DNS, firewall rules",
                "Rolled out Istio service mesh on EKS/AKS for routing, mTLS and policy-based access",
                "Embedded IAM, RBAC and KMS checks directly in the CI/CD pipeline"
            ]
        }
    ],
    "certs": [
        { "issuer": "Oracle", "name": "Cloud Infrastructure 2025 DevOps Professional", "issued": "2025-09" },
        { "issuer": "Red Hat", "name": "Linux Fundamentals (RH104)", "issued": "2025-09" },
        { "issuer": "Infosys", "name": "Kubernetes Administrator, Associate", "issued": "2024" },
        { "issuer": "Infosys", "name": "Ansible Automation Associate", "issued": "2024" }
    ],
    "projects": [
        {
            "name": "Azure Landing Zone",
            "desc": "Terraform landing zone: management groups, RBAC, NSG/ASG rules, hub-spoke VNet peering, Traffic Manager, Azure DNS, secrets in Key Vault.",
            "tags": ["Terraform", "Azure", "RBAC", "Key Vault"],
            "url": None
        },
        {
            "name": "Disaster Recovery Automation",
            "desc": "Automated AMI snapshots and S3 archiving with Lambda and CloudWatch Events: 50% lower RTO.",
            "tags": ["Lambda", "CloudWatch", "S3"],
            "url": None
        },
        {
            "name": "Self-Service Portal",
            "desc": "Jenkins + Terraform portal so developers provision isolated AWS environments on demand.",
            "tags": ["Jenkins", "Terraform", "AWS"],
            "url": None
        },
        {
            "name": "Enterprise Monitoring",
            "desc": "Nagios monitoring across prod and staging with custom service checks and automated alerting.",
            "tags": ["Nagios", "Bash", "Alerting"],
            "url": None
        }
    ]
}

# Seed DB if empty
with db:
    cur = db.cursor()
    cur.execute("SELECT 1 FROM kv WHERE k = 'profile'")
    if not cur.fetchone():
        cur.execute("INSERT INTO kv VALUES ('profile', ?)", (json.dumps(DEFAULT_PROFILE),))

    cur.execute("SELECT 1 FROM kv WHERE k = 'content'")
    if not cur.fetchone():
        cur.execute("INSERT INTO kv VALUES ('content', ?)", (json.dumps(CONTENT),))

    cur.execute("SELECT 1 FROM skills")
    if not cur.fetchone():
        cur.executemany("INSERT INTO skills VALUES (?, ?, ?)", SEED_SKILLS)


def get_profile():
    cur = db.cursor()
    cur.execute("SELECT v FROM kv WHERE k = 'profile'")
    row = cur.fetchone()
    return json.loads(row[0]) if row else DEFAULT_PROFILE

def get_skills():
    cur = db.cursor()
    cur.execute("SELECT name, cat, level FROM skills ORDER BY level DESC, name ASC")
    return [dict(r) for r in cur.fetchall()]

def get_content():
    cur = db.cursor()
    cur.execute("SELECT v FROM kv WHERE k = 'content'")
    row = cur.fetchone()
    return json.loads(row[0]) if row else CONTENT


class OpsHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="public", **kwargs)

    def _cors(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, x-admin-token')

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def _json(self, data, status=200):
        body = json.dumps(data).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self._cors()
        self.end_headers()
        self.wfile.write(body)

    def _body(self):
        length = int(self.headers.get('Content-Length', 0))
        if length > 0:
            raw = self.rfile.read(length).decode('utf-8')
            try:
                return json.loads(raw)
            except Exception:
                return {}
        return {}

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path.rstrip('/') or '/'

        if path == '/api/profile':
            p = get_profile()
            s = get_skills()
            c = get_content()
            self._json({
                "profile": p,
                "skills": s,
                "experience": c.get("experience", []),
                "certs": c.get("certs", []),
                "projects": c.get("projects", [])
            })
            return

        if path.startswith('/api/state/'):
            pid = path[len('/api/state/'):]
            cur = db.cursor()
            cur.execute("SELECT state FROM visitors WHERE id = ?", (pid,))
            row = cur.fetchone()
            if row:
                try:
                    self._json({"ok": True, "state": json.loads(row[0])})
                    return
                except Exception:
                    pass
            self._json({"ok": True, "state": None})
            return

        if path == '/api/leaderboard':
            cur = db.cursor()
            cur.execute("SELECT handle, xp, updated FROM visitors WHERE handle IS NOT NULL ORDER BY xp DESC LIMIT 10")
            rows = [dict(r) for r in cur.fetchall()]
            self._json(rows)
            return

        if path == '/api/hr-review':
            p = get_profile()
            s = get_skills()
            c = get_content()
            sections = []
            strengths = []
            gaps = []
            actions = []

            # 1. Positioning (20)
            words = len(p.get("bio", "").split())
            pts_pos = 0
            if len(p.get("role", "")) > 15: pts_pos += 6
            else: gaps.append("Role headline is too short to position you.")
            if 30 <= words <= 90: pts_pos += 7
            else: gaps.append(f"Bio is {words} words; 30-90 reads best.")
            if re.search(r'\d[\d,.]*\s?(%|x\b|ms\b|mins?\b|minutes?\b|hrs?\b|hours?\b|k\b|\+|(users|services|servers|clusters|pipelines|incidents|deployments|tickets)\b)', p.get("bio", ""), re.I):
                pts_pos += 7
                strengths.append("Bio contains measurable impact.")
            else:
                gaps.append("No quantified impact in your bio.")
            sections.append({"name": "Positioning", "max": 20, "score": pts_pos})

            # 2. Breadth (25)
            CATS = ['cloud', 'iac', 'cicd', 'containers', 'observability', 'security', 'scripting']
            have_cats = {x.get("cat") for x in s}
            miss_cats = [x for x in CATS if x not in have_cats]
            pts_breadth = round(25 * (len(CATS) - len(miss_cats)) / len(CATS))
            if not miss_cats: strengths.append("Covers every core DevOps category.")
            sections.append({"name": "Breadth", "max": 25, "score": pts_breadth})

            # 3. Depth (20)
            top = s[:5]
            avg = sum(x.get("level", 0) for x in top) / (len(top) or 1)
            pts_depth = round(20 * avg / 5)
            if avg >= 4: strengths.append(f"Top-5 skills average {avg:.1f}/5 (self-rated).")
            sections.append({"name": "Depth", "max": 20, "score": pts_depth})

            # 4. Proof of work (20)
            pts_proof = 0
            if p.get("github"): pts_proof += 5
            if p.get("linkedin"): pts_proof += 3
            if p.get("email") and not p.get("email").endswith("example.com"): pts_proof += 2
            ex = c.get("experience", [])
            bullets = [b for e in ex for b in e.get("bullets", [])]
            wins = len([b for b in bullets if re.search(r'\d+\s?(%|x\b|ms\b|mins?\b|hrs?\b)', b, re.I)])
            if wins >= 3:
                pts_proof += 4
                strengths.append(f"{wins} experience bullets carry measurable results.")
            ce = c.get("certs", [])
            if len(ce) >= 2:
                pts_proof += 2
                strengths.append(f"{len(ce)} certifications listed.")
            pr = c.get("projects", [])
            if len(pr) >= 2: pts_proof += 4
            sections.append({"name": "Proof of work", "max": 20, "score": pts_proof})

            # 5. Differentiators (15)
            pts_diff = 5
            strengths.append("A playable, interactive portfolio shows initiative and product sense.")
            if 'observability' in have_cats:
                pts_diff += 5
                strengths.append("Observability experience is in demand for SRE roles.")
            if 'iac' in have_cats: pts_diff += 5
            sections.append({"name": "Differentiators", "max": 15, "score": pts_diff})

            total_score = sum(x["score"] for x in sections)
            verdict = "SHORTLIST — book the interview" if total_score >= 75 else ("SCREEN CALL — promising, fix the gaps" if total_score >= 60 else "HOLD — profile needs work first")

            self._json({
                "score": total_score,
                "verdict": verdict,
                "sections": sections,
                "strengths": strengths,
                "gaps": gaps,
                "actions": ["Publish sanitized versions of top projects as GitHub repos.", "Skill levels are self-rated: attach a repo or cert to top 5 skills."],
                "questions": [f"Walk me through a production incident where {x['name']} was central. What did you change afterwards?" for x in top[:3]]
            })
            return

        # Static assets
        return super().do_GET()

    def do_PUT(self):
        parsed = urlparse(self.path)
        path = parsed.path.rstrip('/') or '/'

        if path == '/api/profile':
            tok = self.headers.get('x-admin-token', '')
            if TOKEN and tok != TOKEN:
                self._json({"error": "unauthorized"}, 401)
                return
            b = self._body()
            p = get_profile()
            for k in DEFAULT_PROFILE.keys():
                if k in b:
                    p[k] = str(b[k])[:500]
            with db:
                db.execute("INSERT OR REPLACE INTO kv VALUES ('profile', ?)", (json.dumps(p),))
            self._json({"ok": True, "profile": p})
            return

        if path.startswith('/api/state/'):
            pid = path[len('/api/state/'):]
            b = self._body()
            xp = int(b.get('xp', 0)) if isinstance(b.get('xp'), (int, float)) else 0
            handle = str(b.get('flags', {}).get('handle') or '')[:16] or None
            now = int(time.time() * 1000)
            raw = json.dumps(b)
            with db:
                db.execute("""
                    INSERT INTO visitors (id, handle, xp, state, updated)
                    VALUES (?, ?, ?, ?, ?)
                    ON CONFLICT(id) DO UPDATE SET
                      handle = COALESCE(excluded.handle, visitors.handle),
                      xp = MAX(visitors.xp, excluded.xp),
                      state = excluded.state,
                      updated = excluded.updated
                """, (pid, handle, xp, raw, now))
            self._json({"ok": True, "state": b})
            return

        self._json({"error": "not found"}, 404)

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path.rstrip('/') or '/'

        if path == '/api/contact':
            b = self._body()
            name = str(b.get('name', '')).strip()[:80]
            email = str(b.get('email', '')).strip()[:120]
            body = str(b.get('body', '')).strip()[:2000]

            if not name or len(body) < 10 or not re.match(r'^\S+@\S+\.\S+$', email):
                self._json({"error": "name, valid email and a 10+ char message required"}, 400)
                return

            with db:
                db.execute("INSERT INTO messages (name, email, body, ts) VALUES (?, ?, ?, ?)",
                           (name, email, body, int(time.time() * 1000)))
            self._json({"ok": True})
            return

        self._json({"error": "not found"}, 404)


if __name__ == '__main__':
    server = HTTPServer(('0.0.0.0', PORT), OpsHandler)
    print(f"Ops Unlocked (Python Engine) listening on http://0.0.0.0:{PORT} (db: {DB_PATH})")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
        server.server_close()
