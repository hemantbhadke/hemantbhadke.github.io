# Ops Unlocked — full-stack portfolio
Frontend `public/index.html` (Tailwind, game HUD) → Express API `server.js` → SQLite (`node:sqlite`, zero native deps).

## Run
### Option 1: Zero-Dependency Python Server (Instant & Works Everywhere)
```bash
python3 server.py      # Linux / macOS / WSL
# or in Windows Command Prompt / PowerShell:
python server.py
# Open: http://localhost:3000
```

### Option 2: Node.js (Node >= 22.13)
```bash
npm install
ADMIN_TOKEN=secret npm start
# Open: http://localhost:3000
```

### Option 3: Docker Compose
```bash
cp .env.example .env        # set ADMIN_TOKEN
docker compose up -d --build
# Open: http://localhost:3000
```

### Option 4: Direct Offline / file:/// Mode
Double-click `public/index.html` in Windows Explorer or open it in Chrome/Edge. Built-in resilient offline fallbacks ensure all 10 interactive modules, timeline cards, and Web Audio synthesizers function smoothly with zero network requests.

## API
| Route | Purpose |
|---|---|
| GET /api/health | liveness (used by compose healthcheck) |
| GET /api/profile · PUT /api/profile (admin) | profile stored in DB; the in-page **Dossier editor** asks for the admin token |
| PUT /api/skills (admin) | replace skill list `[{name,cat,level 1-5}]` — cats: cloud iac cicd containers observability security scripting |
| GET/PUT /api/state/:uuid | per-visitor XP/medals (synced with localStorage) |
| GET /api/leaderboard | top operators by XP |
| POST /api/contact · GET /api/messages (admin) | contact form → DB, rate-limited 5/h/IP |
| GET /api/hr-review | recruiter-style 100-pt audit of your live profile |

Read messages: `curl -H "x-admin-token: $ADMIN_TOKEN" localhost:3000/api/messages`
Backup DB: `docker compose cp web:/data/portfolio.db ./backup.db`
Seeded skill levels are self-rated placeholders — set real ones with PUT /api/skills.

## Deploy options
**A. One server (simplest):** `docker compose up -d --build` behind any HTTPS proxy. Everything is same-origin.

**B. GitHub Pages + API (keeps hemantbhadke.github.io):**
1. Push this folder to a repo, Settings → Pages → Source: *GitHub Actions*. `pages.yml` snapshots the API into `public/data/*.json` and deploys `public/`.
2. The static site works on its own (content, HR audit snapshot, contact → mailto). To switch on leaderboard, progress sync and live contact storage, host the Docker API anywhere with
   `CORS_ORIGIN=https://hemantbhadke.github.io`, then add repo variable `OPS_API_URL=https://your-api-host` and re-run the workflow.
3. Safest rollout: use a NEW repo (e.g. `ops-unlocked` → hemantbhadke.github.io/ops-unlocked/) and link it from your current site, rather than replacing the root site.

Edit content: `PUT /api/content/{experience|certs|projects}` (admin token), `PUT /api/skills`, or the in-page Dossier editor (profile).
Project links matter: set `url` on each project once the repos are public. The HR audit rewards it.
