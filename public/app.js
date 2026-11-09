'use strict';

/* =========================================================================
   OPS UNLOCKED // ASTRAL-K8S VER.KA ENGINE & FULL INTERACTIVE SUITE
   Engineer: Hemant Bhadke · Cloud & DevOps Engineer
   ========================================================================= */

/* -------------------------------------------------------------------------
   1. PROCEDURAL WEB AUDIO SYNTHESIZER (Zero External Assets)
   ------------------------------------------------------------------------- */
class AstralAudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.spacePadActive = false;
    this.padNodes = [];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  tone(freq, type = 'sine', duration = 0.09, vol = 0.05, slideTo = null) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      if (slideTo) {
        osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), now + duration);
      }
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {}
  }

  uiChime() {
    this.tone(880, 'sine', 0.08, 0.04, 1320);
  }

  keyThock() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    this.tone(180, 'triangle', 0.04, 0.06, 70);
    setTimeout(() => this.tone(900, 'sine', 0.02, 0.02, 300), 8);
  }

  beamRifle() {
    this.tone(1150, 'sawtooth', 0.12, 0.04, 220);
  }

  explosion() {
    this.tone(140, 'sawtooth', 0.22, 0.07, 30);
  }

  warning() {
    this.tone(260, 'sawtooth', 0.16, 0.05, 160);
  }

  ntdAwaken() {
    [523.25, 659.25, 783.99, 1046.5, 1567.98].forEach((f, i) => {
      setTimeout(() => this.tone(f, 'triangle', 0.16, 0.05), i * 55);
    });
  }

  levelUp() {
    [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((n, i) => {
      setTimeout(() => this.tone(n, 'sine', 0.22, 0.06), i * 80);
    });
  }

  toggleSpacePad() {
    this.init();
    if (!this.ctx) return false;
    if (this.spacePadActive) {
      this.padNodes.forEach((n) => {
        try { n.stop && n.stop(); n.disconnect && n.disconnect(); } catch (e) {}
      });
      this.padNodes = [];
      this.spacePadActive = false;
      return false;
    }
    try {
      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(0.018, this.ctx.currentTime);
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(340, this.ctx.currentTime);

      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(110, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();

      filter.connect(masterGain);
      masterGain.connect(this.ctx.destination);

      const freqs = [65.41, 98.00, 123.47, 146.83, 164.81];
      freqs.forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(f, this.ctx.currentTime);
        osc.detune.setValueAtTime((idx - 2) * 5, this.ctx.currentTime);
        osc.connect(filter);
        osc.start();
        this.padNodes.push(osc);
      });
      this.padNodes.push(lfo, lfoGain, filter, masterGain);
      this.spacePadActive = true;
      return true;
    } catch (e) {
      return false;
    }
  }
  toggleIboTheme() {
    this.init();
    if (!this.ctx) return false;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    if (this.iboThemeActive) {
      this.stopIboTheme();
      return false;
    }
    this.iboThemeActive = true;

    // Masaru Yokoyama's IBO Main Theme / 'Crescent Moon' in E minor
    const N = {
      E2: 82.41, G2: 98.00, B2: 123.47,
      E3: 164.81, G3: 196.00, A3: 220.00, B3: 246.94, D4: 293.66,
      E4: 329.63, Fs4: 369.99, G4: 392.00, A4: 440.00, B4: 493.88,
      D5: 587.33, E5: 659.25, Fs5: 739.99, G5: 783.99, A5: 880.00, B5: 987.77
    };

    const melody = [
      { note: N.E3, dur: 0.22, delay: 0.00, type: 'triangle', vol: 0.08 },
      { note: N.B3, dur: 0.22, delay: 0.22, type: 'triangle', vol: 0.08 },
      { note: N.E4, dur: 0.22, delay: 0.44, type: 'triangle', vol: 0.09 },
      { note: N.G4, dur: 0.44, delay: 0.66, type: 'triangle', vol: 0.10 },
      { note: N.Fs4, dur: 0.22, delay: 1.10, type: 'triangle', vol: 0.09 },
      { note: N.E4, dur: 0.44, delay: 1.32, type: 'triangle', vol: 0.09 },

      { note: N.E2, dur: 0.18, delay: 0.00, type: 'sine', vol: 0.14 },
      { note: N.E2, dur: 0.18, delay: 0.88, type: 'sine', vol: 0.14 },
      { note: N.E2, dur: 0.18, delay: 1.76, type: 'sine', vol: 0.14 },
      { note: N.E2, dur: 0.18, delay: 2.64, type: 'sine', vol: 0.14 },
      { note: N.E2, dur: 0.18, delay: 3.52, type: 'sine', vol: 0.14 },
      { note: N.E2, dur: 0.18, delay: 4.40, type: 'sine', vol: 0.14 },
      { note: N.E2, dur: 0.18, delay: 5.28, type: 'sine', vol: 0.14 },
      { note: N.E2, dur: 0.18, delay: 6.16, type: 'sine', vol: 0.14 },
      { note: N.E2, dur: 0.18, delay: 7.04, type: 'sine', vol: 0.14 },
      { note: N.E2, dur: 0.18, delay: 7.92, type: 'sine', vol: 0.14 },
      { note: N.E2, dur: 0.18, delay: 8.80, type: 'sine', vol: 0.14 },
      { note: N.E2, dur: 0.18, delay: 9.68, type: 'sine', vol: 0.14 },

      { note: N.B4, dur: 0.44, delay: 1.76, type: 'sawtooth', vol: 0.07 },
      { note: N.D5, dur: 0.22, delay: 2.20, type: 'sawtooth', vol: 0.08 },
      { note: N.E5, dur: 0.66, delay: 2.42, type: 'sawtooth', vol: 0.10 },
      { note: N.G5, dur: 0.44, delay: 3.08, type: 'sawtooth', vol: 0.10 },
      { note: N.Fs5, dur: 0.44, delay: 3.52, type: 'sawtooth', vol: 0.09 },
      { note: N.E5, dur: 0.44, delay: 3.96, type: 'sawtooth', vol: 0.09 },
      { note: N.D5, dur: 0.44, delay: 4.40, type: 'sawtooth', vol: 0.08 },
      { note: N.B4, dur: 0.66, delay: 4.84, type: 'sawtooth', vol: 0.08 },

      { note: N.E5, dur: 0.44, delay: 5.50, type: 'sawtooth', vol: 0.09 },
      { note: N.Fs5, dur: 0.44, delay: 5.94, type: 'sawtooth', vol: 0.09 },
      { note: N.G5, dur: 0.44, delay: 6.38, type: 'sawtooth', vol: 0.10 },
      { note: N.A5, dur: 0.44, delay: 6.82, type: 'sawtooth', vol: 0.10 },
      { note: N.B5, dur: 0.88, delay: 7.26, type: 'sawtooth', vol: 0.11 },
      { note: N.A5, dur: 0.44, delay: 8.14, type: 'sawtooth', vol: 0.09 },
      { note: N.G5, dur: 0.44, delay: 8.58, type: 'sawtooth', vol: 0.09 },
      { note: N.Fs5, dur: 0.66, delay: 9.02, type: 'sawtooth', vol: 0.09 },
      { note: N.E5, dur: 1.20, delay: 9.68, type: 'sawtooth', vol: 0.11 }
    ];

    const loopLen = 11.2;

    const playLoop = () => {
      if (!this.iboThemeActive) return;
      const now = this.ctx.currentTime;
      melody.forEach(m => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const filter = this.ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(m.type === 'sawtooth' ? 1900 : 950, now + m.delay);

          osc.type = m.type;
          osc.frequency.setValueAtTime(m.note, now + m.delay);

          gain.gain.setValueAtTime(0.0001, now + m.delay);
          gain.gain.linearRampToValueAtTime(m.vol, now + m.delay + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + m.delay + m.dur);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now + m.delay);
          osc.stop(now + m.delay + m.dur);
        } catch (e) {}
      });

      this.iboThemeTimer = setTimeout(playLoop, loopLen * 1000);
    };

    playLoop();
    return true;
  }

  stopIboTheme() {
    this.iboThemeActive = false;
    if (this.iboThemeTimer) {
      clearTimeout(this.iboThemeTimer);
      this.iboThemeTimer = null;
    }
  }

}

const sfx = new AstralAudioEngine();

/* -------------------------------------------------------------------------
   2. DEEP SPACE, NEBULA & GN PARTICLE CANVAS (#cosmosCanvas)
   ------------------------------------------------------------------------- */
const cosmosCanvas = document.getElementById('cosmosCanvas');
const cosmosCtx = cosmosCanvas ? cosmosCanvas.getContext('2d') : null;

let cosmosW = window.innerWidth;
let cosmosH = window.innerHeight;
const stars = [];
const gnParticles = [];
const shootingStars = [];
const pointer = { tx: cosmosW * 0.5, ty: cosmosH * 0.35, x: cosmosW * 0.5, y: cosmosH * 0.35 };

function initCosmos() {
  if (!cosmosCanvas || !cosmosCtx) return;
  cosmosW = window.innerWidth;
  cosmosH = window.innerHeight;
  cosmosCanvas.width = cosmosW;
  cosmosCanvas.height = cosmosH;

  stars.length = 0;
  const count = Math.min(220, Math.floor((cosmosW * cosmosH) / 6000));
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * cosmosW,
      y: Math.random() * cosmosH,
      r: Math.random() * 1.5 + 0.4,
      depth: Math.random() * 0.6 + 0.4,
      phase: Math.random() * Math.PI * 2,
      speed: 0.015 + Math.random() * 0.025
    });
  }

  gnParticles.length = 0;
  const gnCount = Math.min(65, Math.floor(cosmosW / 24));
  for (let i = 0; i < gnCount; i++) {
    gnParticles.push({
      x: Math.random() * cosmosW,
      y: Math.random() * cosmosH,
      r: Math.random() * 2.2 + 0.7,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -0.35 - Math.random() * 0.65,
      alpha: Math.random() * 0.7 + 0.25
    });
  }
}

if (cosmosCanvas) {
  window.addEventListener('resize', initCosmos);
  initCosmos();

  window.addEventListener('pointermove', (e) => {
    pointer.tx = e.clientX;
    pointer.ty = e.clientY;
  });

  function renderCosmosLoop() {
    pointer.x += (pointer.tx - pointer.x) * 0.06;
    pointer.y += (pointer.ty - pointer.y) * 0.06;
    document.documentElement.style.setProperty('--aura-x', `${pointer.x.toFixed(1)}px`);
    document.documentElement.style.setProperty('--aura-y', `${pointer.y.toFixed(1)}px`);

    cosmosCtx.clearRect(0, 0, cosmosW, cosmosH);

    const isNtd = document.body.classList.contains('ntd-active');
    const offsetX = (pointer.x - cosmosW * 0.5) * 0.02;
    const offsetY = (pointer.y - cosmosH * 0.5) * 0.02;

    const neb1 = cosmosCtx.createRadialGradient(
      cosmosW * 0.25 - offsetX, cosmosH * 0.3 - offsetY, 20,
      cosmosW * 0.25 - offsetX, cosmosH * 0.3 - offsetY, cosmosW * 0.45
    );
    neb1.addColorStop(0, isNtd ? 'rgba(244, 63, 94, 0.09)' : 'rgba(56, 189, 248, 0.06)');
    neb1.addColorStop(1, 'transparent');
    cosmosCtx.fillStyle = neb1;
    cosmosCtx.fillRect(0, 0, cosmosW, cosmosH);

    const neb2 = cosmosCtx.createRadialGradient(
      cosmosW * 0.8 + offsetX, cosmosH * 0.65 + offsetY, 20,
      cosmosW * 0.8 + offsetX, cosmosH * 0.65 + offsetY, cosmosW * 0.4
    );
    neb2.addColorStop(0, isNtd ? 'rgba(245, 158, 11, 0.08)' : 'rgba(16, 185, 129, 0.07)');
    neb2.addColorStop(1, 'transparent');
    cosmosCtx.fillStyle = neb2;
    cosmosCtx.fillRect(0, 0, cosmosW, cosmosH);

    for (const s of stars) {
      s.phase += s.speed;
      const twinkle = 0.35 + 0.65 * Math.sin(s.phase);
      const sx = (s.x - offsetX * s.depth + cosmosW) % cosmosW;
      const sy = (s.y - offsetY * s.depth + cosmosH) % cosmosH;
      cosmosCtx.fillStyle = `rgba(241, 245, 249, ${twinkle * 0.85})`;
      cosmosCtx.beginPath();
      cosmosCtx.arc(sx, sy, s.r, 0, Math.PI * 2);
      cosmosCtx.fill();
    }

    const speedMult = isNtd ? 2.2 : 1;
    const gnColor = isNtd ? '244, 63, 94' : '16, 185, 129';
    for (const p of gnParticles) {
      p.y += p.vy * speedMult;
      p.x += p.vx * speedMult;
      if (p.y < -10) { p.y = cosmosH + 10; p.x = Math.random() * cosmosW; }
      if (p.x < -10) p.x = cosmosW + 10;
      if (p.x > cosmosW + 10) p.x = -10;

      cosmosCtx.fillStyle = `rgba(${gnColor}, ${p.alpha})`;
      cosmosCtx.beginPath();
      cosmosCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      cosmosCtx.fill();
    }

    if (Math.random() < 0.008 && shootingStars.length < 2) {
      shootingStars.push({
        x: Math.random() * cosmosW * 0.8 + cosmosW * 0.1,
        y: Math.random() * cosmosH * 0.35,
        vx: -6 - Math.random() * 4,
        vy: 3 + Math.random() * 2,
        len: 80 + Math.random() * 50,
        alpha: 1
      });
    }

    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const st = shootingStars[i];
      st.x += st.vx;
      st.y += st.vy;
      st.alpha -= 0.02;
      const tailX = st.x - st.vx * (st.len / 10);
      const tailY = st.y - st.vy * (st.len / 10);
      const grad = cosmosCtx.createLinearGradient(st.x, st.y, tailX, tailY);
      grad.addColorStop(0, `rgba(241, 245, 249, ${Math.max(0, st.alpha)})`);
      grad.addColorStop(1, 'transparent');
      cosmosCtx.strokeStyle = grad;
      cosmosCtx.lineWidth = 1.5;
      cosmosCtx.beginPath();
      cosmosCtx.moveTo(st.x, st.y);
      cosmosCtx.lineTo(tailX, tailY);
      cosmosCtx.stroke();
      if (st.alpha <= 0) shootingStars.splice(i, 1);
    }

    requestAnimationFrame(renderCosmosLoop);
  }
  requestAnimationFrame(renderCosmosLoop);
}

/* -------------------------------------------------------------------------
   3. STATE MANAGEMENT & LOCAL STORAGE
   ------------------------------------------------------------------------- */
const STORAGE_KEY_PROFILE = 'hemantOpsUnlocked_profile_v8';
const STORAGE_KEY_GAME = 'hemantOpsUnlocked_game_v8';

const DEFAULT_PROFILE = {
  firstName: 'Hemant',
  lastName: 'Bhadke',
  callsign: 'HB-01 // EFSF-OPS',
  role: 'DevOps / DevSecOps Engineer · CI/CD · IaC · SRE',
  location: 'Maharashtra, India',
  bio: 'DevOps and DevSecOps engineer with 4+ years at Infosys across CI/CD, GitOps, Terraform and SRE-grade observability. Cut MTTR 60% and pipeline failures 40%, with 100% zero-downtime deployments for Ricoh and Siemens Energy. Off the clock: tactical games, Gundam builds, Linux wargames and ESP32 soldering.',
  linkedin: 'https://www.linkedin.com/in/hemantrbhadke',
  github: 'https://github.com/hemantbhadke',
  email: 'hemantrbhadke@gmail.com'
};


const DEFAULT_CONTENT = {
  "profile": {
    "firstName": "Hemant",
    "lastName": "Bhadke",
    "callsign": "HB-01 // EFSF-OPS",
    "role": "DevOps / DevSecOps Engineer \u00b7 CI/CD \u00b7 IaC \u00b7 SRE",
    "location": "Maharashtra, India",
    "bio": "DevOps and DevSecOps engineer with 4+ years at Infosys across CI/CD, GitOps, Terraform and SRE-grade observability. Cut MTTR 60% and pipeline failures 40%, with 100% zero-downtime deployments for Ricoh and Siemens Energy. Off the clock: tactical games, Gundam builds, Linux wargames and ESP32 soldering.",
    "linkedin": "https://www.linkedin.com/in/hemantrbhadke",
    "github": "https://github.com/hemantbhadke",
    "email": "hemantrbhadke@gmail.com"
  },
  "skills": [
    {
      "name": "AWS",
      "cat": "cloud",
      "level": 4
    },
    {
      "name": "Azure",
      "cat": "cloud",
      "level": 4
    },
    {
      "name": "Bash",
      "cat": "scripting",
      "level": 4
    },
    {
      "name": "Docker",
      "cat": "containers",
      "level": 4
    },
    {
      "name": "Grafana",
      "cat": "observability",
      "level": 4
    },
    {
      "name": "Linux",
      "cat": "scripting",
      "level": 4
    },
    {
      "name": "Nagios",
      "cat": "observability",
      "level": 4
    },
    {
      "name": "Prometheus",
      "cat": "observability",
      "level": 4
    },
    {
      "name": "Terraform",
      "cat": "iac",
      "level": 4
    },
    {
      "name": "Ansible",
      "cat": "iac",
      "level": 3
    },
    {
      "name": "ArgoCD",
      "cat": "cicd",
      "level": 3
    },
    {
      "name": "Datadog",
      "cat": "observability",
      "level": 3
    },
    {
      "name": "ELK",
      "cat": "observability",
      "level": 3
    },
    {
      "name": "GCP",
      "cat": "cloud",
      "level": 3
    },
    {
      "name": "GitHub Actions",
      "cat": "cicd",
      "level": 3
    },
    {
      "name": "IAM \u00b7 KMS \u00b7 RBAC",
      "cat": "security",
      "level": 3
    },
    {
      "name": "Jenkins",
      "cat": "cicd",
      "level": 3
    },
    {
      "name": "Kubernetes",
      "cat": "containers",
      "level": 3
    },
    {
      "name": "Oracle Cloud",
      "cat": "cloud",
      "level": 3
    },
    {
      "name": "Python",
      "cat": "scripting",
      "level": 3
    },
    {
      "name": "Splunk",
      "cat": "observability",
      "level": 3
    },
    {
      "name": "Istio",
      "cat": "containers",
      "level": 2
    }
  ],
  "experience": [
    {
      "role": "Cloud DevOps Engineer",
      "org": "Infosys \u00b7 client Ricoh",
      "period": "2023-07 \u2192 present",
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
      "role": "Cloud DevOps Engineer",
      "org": "Infosys \u00b7 client Siemens Energy",
      "period": "2022-06 \u2192 2023-06",
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
    {
      "issuer": "Oracle",
      "name": "Cloud Infrastructure 2025 DevOps Professional",
      "issued": "2025-09"
    },
    {
      "issuer": "Red Hat",
      "name": "Linux Fundamentals (RH104)",
      "issued": "2025-09"
    },
    {
      "issuer": "Infosys",
      "name": "Kubernetes Administrator, Associate",
      "issued": "2024"
    },
    {
      "issuer": "Infosys",
      "name": "Ansible Automation Associate",
      "issued": "2024"
    }
  ],
  "projects": [
    {
      "name": "Azure Landing Zone",
      "desc": "Terraform landing zone: management groups, RBAC, NSG/ASG rules, hub-spoke VNet peering, Traffic Manager, Azure DNS, secrets in Key Vault.",
      "tags": [
        "Terraform",
        "Azure",
        "RBAC",
        "Key Vault"
      ],
      "url": null
    },
    {
      "name": "Disaster Recovery Automation",
      "desc": "Automated AMI snapshots and S3 archiving with Lambda and CloudWatch Events: 50% lower RTO.",
      "tags": [
        "Lambda",
        "CloudWatch",
        "S3"
      ],
      "url": null
    },
    {
      "name": "Self-Service Portal",
      "desc": "Jenkins + Terraform portal so developers provision isolated AWS environments on demand.",
      "tags": [
        "Jenkins",
        "Terraform",
        "AWS"
      ],
      "url": null
    },
    {
      "name": "Enterprise Monitoring",
      "desc": "Nagios monitoring across prod and staging with custom service checks and automated alerting.",
      "tags": [
        "Nagios",
        "Bash",
        "Alerting"
      ],
      "url": null
    }
  ]
};

const DEFAULT_HR_REVIEW = {
  "score": 92,
  "verdict": "SHORTLIST \u2014 book the interview",
  "sections": [
    {
      "name": "Positioning",
      "max": 20,
      "score": 20
    },
    {
      "name": "Breadth",
      "max": 25,
      "score": 25
    },
    {
      "name": "Depth",
      "max": 20,
      "score": 16
    },
    {
      "name": "Proof of work",
      "max": 20,
      "score": 16
    },
    {
      "name": "Differentiators",
      "max": 15,
      "score": 15
    }
  ],
  "strengths": [
    "Bio contains measurable impact.",
    "Covers every core DevOps category.",
    "Top-5 skills average 4.0/5 (self-rated).",
    "5 experience bullets carry measurable results.",
    "4 certifications listed.",
    "A playable, interactive portfolio shows initiative and product sense.",
    "Observability experience is in demand for SRE roles."
  ],
  "gaps": [
    "Projects have no public links, so a recruiter cannot verify them."
  ],
  "actions": [
    "Publish sanitized versions of your top 2 projects as GitHub repos and link them.",
    "Skill levels are self-rated: attach a repo, cert or metric to your top 5 skills."
  ],
  "questions": [
    "Walk me through a production incident where AWS was central. What did you change afterwards?",
    "Walk me through a production incident where Azure was central. What did you change afterwards?",
    "Walk me through a production incident where Bash was central. What did you change afterwards?"
  ]
};

const DEFAULT_GAME = {
  xp: 450,
  highScore: 0,
  ntdMode: false,
  recruiterMode: false,
  sketchNotes: true,
  inspectedSystems: ['gn-drive'],
  clearedMissions: [],
  exploredSectors: [],
  quizCleared: [],
  flags: {},
  unlockedMedals: ['boot']
};

let profile = { ...DEFAULT_PROFILE };
let state = { ...DEFAULT_GAME };

function loadState() {
  try {
    const p = JSON.parse(localStorage.getItem(STORAGE_KEY_PROFILE));
    if (p && typeof p === 'object') profile = { ...DEFAULT_PROFILE, ...p };
    const g = JSON.parse(localStorage.getItem(STORAGE_KEY_GAME));
    if (g && typeof g === 'object') {
      state = {
        ...DEFAULT_GAME,
        ...g,
        inspectedSystems: Array.isArray(g.inspectedSystems) ? g.inspectedSystems : ['gn-drive'],
        clearedMissions: Array.isArray(g.clearedMissions) ? g.clearedMissions : [],
        exploredSectors: Array.isArray(g.exploredSectors) ? g.exploredSectors : [],
        quizCleared: Array.isArray(g.quizCleared) ? g.quizCleared : [],
        flags: g.flags && typeof g.flags === 'object' ? g.flags : {},
        unlockedMedals: Array.isArray(g.unlockedMedals) ? g.unlockedMedals : ['boot']
      };
    }
  } catch (e) {}
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
    localStorage.setItem(STORAGE_KEY_GAME, JSON.stringify(state));
  } catch (e) {}
}

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('hudToast');
  const text = document.getElementById('hudToastText');
  if (!toast || !text) return;
  text.textContent = msg;
  toast.classList.remove('opacity-0', 'translate-y-3');
  toast.classList.add('opacity-100', 'translate-y-0');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-3');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 3200);
}

const CAREER_RANKS = [
  { id: 1, min: 0, title: 'Rookie Operator', crest: '⌁' },
  { id: 2, min: 400, title: 'Field Engineer', crest: '⌘' },
  { id: 3, min: 900, title: 'Deployment Engineer', crest: '⚙' },
  { id: 4, min: 1500, title: 'Platform Architect', crest: '⎈' },
  { id: 5, min: 2300, title: 'Reliability Commander', crest: '◉' },
  { id: 6, min: 3200, title: 'SRE Elite', crest: '✦' }
];

function addXP(amount, reason) {
  const prevRank = CAREER_RANKS.slice().reverse().find(r => state.xp >= r.min);
  state.xp += amount;
  const nextRank = CAREER_RANKS.slice().reverse().find(r => state.xp >= r.min);
  if (nextRank && prevRank && nextRank.id > prevRank.id) {
    sfx.levelUp();
    showToast(`RANK PROMOTION // ${nextRank.title.toUpperCase()}`);
  }
  checkMedals();
  saveState();
  renderHUD();
  renderCareerVault();
  if (reason) showToast(`+${amount} XP // ${reason}`);
}

function renderHUD() {
  let currentRank = CAREER_RANKS[0];
  for (const r of CAREER_RANKS) {
    if (state.xp >= r.min) currentRank = r;
  }
  const nextRank = CAREER_RANKS.find(r => r.min > state.xp);
  const progress = nextRank
    ? ((state.xp - currentRank.min) / (nextRank.min - currentRank.min)) * 100
    : 100;

  const hudLevel = document.getElementById('hudLevel');
  const hudXP = document.getElementById('hudXP');
  const hudXPBar = document.getElementById('hudXPBar');
  const heroRankName = document.getElementById('heroRankName');
  const gameHighScoreText = document.getElementById('gameHighScoreText');

  if (hudLevel) hudLevel.textContent = String(currentRank.id).padStart(2, '0');
  if (hudXP) hudXP.textContent = `${state.xp.toLocaleString()} XP`;
  if (hudXPBar) hudXPBar.style.width = `${Math.max(10, Math.min(100, progress))}%`;
  if (heroRankName) heroRankName.textContent = currentRank.title.toUpperCase();
  if (gameHighScoreText) gameHighScoreText.textContent = String(state.highScore).padStart(4, '0');
}

function renderProfileUI() {
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setTxt('heroFirstName', profile.firstName.toUpperCase());
  setTxt('heroLastName', `${profile.lastName.toUpperCase()}.`);
  setTxt('heroCallsign', profile.callsign.toUpperCase());
  setTxt('heroLocation', profile.location);
  setTxt('heroRole', profile.role.toUpperCase());
  setTxt('heroBio', profile.bio);

  setTxt('dossierFullName', `${profile.firstName} ${profile.lastName}`);
  setTxt('dossierBioText', profile.bio);
  const dl = document.getElementById('dossierLinkedin'); if (dl) dl.href = profile.linkedin;
  const dg = document.getElementById('dossierGithub'); if (dg) dg.href = profile.github;
  const de = document.getElementById('dossierEmail'); if (de) de.href = `mailto:${profile.email}`;
}

/* -------------------------------------------------------------------------
   4. GUNDAM VER.KA WORKBENCH & COCKPIT CONTROLS
   ------------------------------------------------------------------------- */
function initGundamWorkbench() {
  const cockpitHatch = document.getElementById('cockpitHatchGroup');
  const openCockpitBtn = document.getElementById('openCockpitMonitorBtn');
  const closeCockpitBtn = document.getElementById('closeCockpitMonitorBtn');
  const cockpitOverlay = document.getElementById('cockpitMonitorOverlay');

  function openCockpit() {
    if (cockpitOverlay) cockpitOverlay.classList.remove('hidden');
    sfx.uiChime();
    if (!state.flags.cockpit) {
      state.flags.cockpit = 1;
      addXP(50, 'Cockpit Bio-Monitor synced');
    }
  }

  function closeCockpit() {
    if (cockpitOverlay) cockpitOverlay.classList.add('hidden');
    sfx.keyThock();
  }

  if (cockpitHatch) cockpitHatch.onclick = openCockpit;
  if (openCockpitBtn) openCockpitBtn.onclick = openCockpit;
  if (closeCockpitBtn) closeCockpitBtn.onclick = closeCockpit;

  // Builder Notes Toggle
  const toggleNotesBtn = document.getElementById('toggleBuilderNotesBtn');
  const heroSketchBtn = document.getElementById('heroSketchBtn');
  const notesOverlay = document.getElementById('builderSketchOverlay');
  const notesStateText = document.getElementById('builderNotesState');

  function toggleNotes() {
    state.sketchNotes = !state.sketchNotes;
    if (notesOverlay) notesOverlay.setAttribute('opacity', state.sketchNotes ? '1' : '0');
    if (notesStateText) notesStateText.textContent = state.sketchNotes ? 'ON' : 'OFF';
    if (toggleNotesBtn) toggleNotesBtn.classList.toggle('active-note', state.sketchNotes);
    sfx.keyThock();
    saveState();
  }

  if (toggleNotesBtn) toggleNotesBtn.onclick = toggleNotes;
  if (heroSketchBtn) heroSketchBtn.onclick = toggleNotes;

  // Zero-G Stance Toggle
  const zeroGStanceBtn = document.getElementById('zeroGStanceBtn');
  const zeroGUnit = document.getElementById('zeroGUnitGroup');
  let flightStance = false;

  if (zeroGStanceBtn && zeroGUnit) {
    zeroGStanceBtn.onclick = () => {
      flightStance = !flightStance;
      zeroGUnit.classList.toggle('stance-flight', flightStance);
      sfx.tone(440, 'triangle', 0.12, 0.05, flightStance ? 660 : 330);
      showToast(flightStance ? 'POSE // HIGH-MOBILITY FLIGHT STANCE' : 'POSE // ZERO-G RECON HOVER');
    };
  }

  // Hangar NT-D Button
  const hangarNtdBtn = document.getElementById('hangarNtdBtn');
  if (hangarNtdBtn) {
    hangarNtdBtn.onclick = () => {
      const topNtd = document.getElementById('topNtdBtn');
      if (topNtd) topNtd.click();
    };
  }

  // Space Synth Ambient Pad
  const spaceSynthBtn = document.getElementById('spaceSynthBtn');
  const spaceSynthStatus = document.getElementById('spaceSynthStatus');
  if (spaceSynthBtn && spaceSynthStatus) {
    spaceSynthBtn.onclick = () => {
      const active = sfx.toggleSpacePad();
      spaceSynthStatus.textContent = active ? 'ON' : 'OFF';
      spaceSynthStatus.className = active ? 'text-vfin font-bold' : 'psycho-text';
      showToast(active ? 'AUDIO // COSMIC SYNTH PAD ENGAGED' : 'AUDIO // SYNTH PAD MUTED');
    };
  }

  const iboThemeBtn = document.getElementById('iboThemeBtn');
  const iboThemeStatus = document.getElementById('iboThemeStatus');
  if (iboThemeBtn && iboThemeStatus) {
    iboThemeBtn.onclick = () => {
      const active = sfx.toggleIboTheme();
      iboThemeStatus.textContent = active ? 'ON' : 'OFF';
      iboThemeStatus.className = active ? 'text-vfin font-bold' : 'psycho-text';
      showToast(active ? 'OST // GUNDAM IBO: CRESCENT MOON ENGAGED' : 'OST // IBO THEME MUTED');
    };
  }

  // Sound FX Toggle
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  if (soundToggleBtn) {
    soundToggleBtn.onclick = () => {
      sfx.enabled = !sfx.enabled;
      soundToggleBtn.textContent = sfx.enabled ? '🔊' : '🔇';
      showToast(sfx.enabled ? 'AUDIO // SFX ENABLED' : 'AUDIO // SFX MUTED');
    };
  }
}

/* -------------------------------------------------------------------------
   5. TACTICAL SKILL LOADOUT & ARMORY CAD SCHEMATICS
   ------------------------------------------------------------------------- */
const ARMORY_DATA = {
  'gn-drive': {
    code: 'CORE REACTOR // GN-DRIVE',
    title: 'KUBERNETES, EKS/AKS, DOCKER & HELM',
    sub: 'SUBSYSTEM: "CONTAINER ORCHESTRATION & SELF-HEALING WORKLOADS"',
    power: '990',
    desc: 'Running production microservices across AWS EKS and Azure AKS. Multi-stage Docker packaging, Helm 3 charts, tuned liveness/readiness probes to eliminate 502/503 zero-downtime rolling updates, and custom HPA metric scaling.',
    fieldNote: '"90% of \'random\' Kubernetes crashes I\'ve debugged came down to two things: missing memory limits causing silent OOMKills, or a readinessProbe hitting an endpoint that queries the DB on every health check."',
    stats: { vel: 98, scale: 99, res: 99, mttr: 96 },
    perks: ['AKS & EKS Fleet', 'Helm 3 Charting', 'HPA Autoscaling', 'K8s RBAC & NetworkPolicy', 'Distroless Images'],
    cadSvg: `<svg viewBox="0 0 280 120" class="w-full h-full max-h-28 stroke-current fill-none">
      <circle cx="140" cy="60" r="46" stroke="#10b981" stroke-width="1.8" stroke-dasharray="8 4" class="orbit-ring-cw"/>
      <circle cx="140" cy="60" r="32" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="140" cy="60" r="14" fill="#10b981" opacity="0.85"/>
      <polygon points="140,20 175,80 105,80" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="30" y1="60" x2="90" y2="60" stroke="#334155" stroke-width="2"/>
      <line x1="190" y1="60" x2="250" y2="60" stroke="#334155" stroke-width="2"/>
      <text x="140" y="64" text-anchor="middle" fill="#070a12" font-family="JetBrains Mono" font-weight="700" font-size="10">CORE</text>
    </svg>`
  },
  'thrusters': {
    code: 'PROPULSION // HYPER-ION VECTOR',
    title: 'TERRAFORM, ANSIBLE & CLOUD LANDING ZONES',
    sub: 'SUBSYSTEM: "DECLARATIVE MULTI-CLOUD INFRASTRUCTURE AS CODE"',
    power: '975',
    desc: 'Architected modular Terraform modules across AWS and Azure for Ricoh and Siemens Energy. Hub-and-spoke VNet peering, Traffic Manager, Azure Key Vault secrets injection, and remote S3/DynamoDB state locking with 0 state drift.',
    fieldNote: '"Never write a monolith terraform file. When you break resources into bounded root modules (network, identity, data, app), a pipeline failure in app config never risks destroying your core VPC."',
    stats: { vel: 96, scale: 98, res: 99, mttr: 95 },
    perks: ['Terraform Modules', 'Ansible Playbooks', 'Remote State & Locks', 'Azure Landing Zones', 'AWS Control Tower'],
    cadSvg: `<svg viewBox="0 0 280 120" class="w-full h-full max-h-28 stroke-current fill-none">
      <rect x="30" y="30" width="60" height="60" rx="10" stroke="#38bdf8" stroke-width="2"/>
      <rect x="190" y="30" width="60" height="60" rx="10" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="140" cy="60" r="24" stroke="#f59e0b" stroke-width="2"/>
      <line x1="90" y1="60" x2="116" y2="60" stroke="#10b981" stroke-width="3" stroke-dasharray="4 3"/>
      <line x1="164" y1="60" x2="190" y2="60" stroke="#10b981" stroke-width="3" stroke-dasharray="4 3"/>
      <text x="60" y="64" text-anchor="middle" fill="#f1f5f9" font-family="JetBrains Mono" font-size="9">VPC A</text>
      <text x="220" y="64" text-anchor="middle" fill="#f1f5f9" font-family="JetBrains Mono" font-size="9">VPC B</text>
      <text x="140" y="64" text-anchor="middle" fill="#f59e0b" font-family="JetBrains Mono" font-size="8">HUB</text>
    </svg>`
  },
  'avionics': {
    code: 'AVIONICS // TARGETING MATRIX',
    title: 'GITHUB ACTIONS, JENKINS & ARGOCD GITOPS',
    sub: 'SUBSYSTEM: "CONTINUOUS DELIVERY & AUTOMATED RELEASE TRAINS"',
    power: '985',
    desc: 'Rebuilt end-to-end delivery pipelines on Jenkins, GitHub Actions and ArgoCD GitOps. Automated linting, Trivy image vulnerability scanning, SonarQube code quality gates, and automated canary rollouts with 100% zero-downtime track record.',
    fieldNote: '"If a developer needs a wiki document to deploy, the pipeline is incomplete. Everything from PR preview environments to automated rollback triggers belongs declaratively in code."',
    stats: { vel: 99, scale: 97, res: 98, mttr: 97 },
    perks: ['ArgoCD GitOps', 'GitHub Actions Matrix', 'Jenkinsfile Pipelines', 'Trivy & SonarQube Gates', 'Canary & Blue/Green'],
    cadSvg: `<svg viewBox="0 0 280 120" class="w-full h-full max-h-28 stroke-current fill-none">
      <line x1="30" y1="60" x2="250" y2="60" stroke="#1e293b" stroke-width="4"/>
      <circle cx="50" cy="60" r="14" fill="#0d1322" stroke="#10b981" stroke-width="2"/>
      <circle cx="110" cy="60" r="14" fill="#0d1322" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="170" cy="60" r="14" fill="#0d1322" stroke="#f59e0b" stroke-width="2"/>
      <circle cx="230" cy="60" r="14" fill="#0d1322" stroke="#10b981" stroke-width="2"/>
      <path d="M50,40 Q110,15 170,40" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="4 3"/>
      <text x="50" y="64" text-anchor="middle" fill="#10b981" font-size="10">GIT</text>
      <text x="110" y="64" text-anchor="middle" fill="#38bdf8" font-size="10">TEST</text>
      <text x="170" y="64" text-anchor="middle" fill="#f59e0b" font-size="10">SCAN</text>
      <text x="230" y="64" text-anchor="middle" fill="#10b981" font-size="10">SYNC</text>
    </svg>`
  },
  'sensors': {
    code: 'SENSOR SUITE // RADAR & TELEMETRY',
    title: 'PROMETHEUS, GRAFANA, DATADOG & SPLUNK',
    sub: 'SUBSYSTEM: "FULL-STACK OBSERVABILITY & SRE TELEMETRY"',
    power: '995',
    desc: 'Closed monitoring visibility gaps across hybrid cloud environments. Deployed Prometheus Alertmanager with tuned P95/P99 latency thresholds, Grafana dashboards, Datadog APM tracing, and Splunk log parsing. Boosted overall observability coverage by 35%.',
    fieldNote: '"Alert on user symptoms (latency, 5xx rate, queue saturation), not noisy CPU spikes. If an alert pages on-call at 3 AM and doesn\'t require immediate human action, delete or tune it."',
    stats: { vel: 95, scale: 99, res: 99, mttr: 98 },
    perks: ['PromQL & Alertmanager', 'Grafana SRE Boards', 'Datadog APM', 'Splunk Log Queries', 'P99 SLO Tracking'],
    cadSvg: `<svg viewBox="0 0 280 120" class="w-full h-full max-h-28 stroke-current fill-none">
      <path d="M20,90 L60,85 L90,30 L120,70 L150,45 L180,85 L210,60 L240,75 L260,20" stroke="#10b981" stroke-width="2.5" fill="none"/>
      <line x1="20" y1="40" x2="260" y2="40" stroke="#f43f5e" stroke-width="1.2" stroke-dasharray="4 4"/>
      <text x="260" y="36" text-anchor="end" fill="#f43f5e" font-family="JetBrains Mono" font-size="8">SLO THRESHOLD (99.9%)</text>
      <line x1="20" y1="100" x2="260" y2="100" stroke="#334155" stroke-width="1"/>
    </svg>`
  },
  'psychoframe': {
    code: 'PSYCHO-FRAME // ZERO-TRUST SHIELD',
    title: 'CLOUD SECURITY, IAM, KMS & AZURE RBAC',
    sub: 'SUBSYSTEM: "DEVSECOPS & LEAST-PRIVILEGE DEFENSE"',
    power: '960',
    desc: 'Embedded least-privilege IAM policies, AWS KMS customer-managed key encryption at rest, Azure RBAC group assignments, and automated secret rotation via HashiCorp Vault. Integrated pre-commit security hooks and container image signing.',
    fieldNote: '"Hardcoded credentials in repos are the #1 attack vector. Enforce short-lived OIDC tokens between GitHub Actions and cloud providers—no permanent IAM secret keys ever exist."',
    stats: { vel: 94, scale: 97, res: 99, mttr: 94 },
    perks: ['OIDC Federation', 'AWS KMS & Key Vault', 'Least-Privilege IAM', 'Container Image Signing', 'Vault Secret Rotation'],
    cadSvg: `<svg viewBox="0 0 280 120" class="w-full h-full max-h-28 stroke-current fill-none">
      <polygon points="140,15 200,35 200,75 140,105 80,75 80,35" stroke="#f43f5e" stroke-width="2" fill="rgba(244,63,94,0.06)"/>
      <circle cx="140" cy="55" r="14" stroke="#f59e0b" stroke-width="1.8"/>
      <line x1="140" y1="55" x2="140" y2="72" stroke="#f59e0b" stroke-width="3"/>
      <text x="140" y="116" text-anchor="middle" fill="#38bdf8" font-family="JetBrains Mono" font-size="9">ZERO-TRUST SECURED</text>
    </svg>`
  },
  'apu': {
    code: 'AUXILIARY POWER // LINUX SHELL',
    title: 'LINUX KERNEL, BASH, PYTHON & PERFORMANCE',
    sub: 'SUBSYSTEM: "SYSADMIN MASTERY & LOW-LEVEL DIAGNOSTICS"',
    power: '970',
    desc: 'Deep Linux internals experience across RHEL, Ubuntu, and Alpine. Systemd service profiling, cgroup memory isolation, eBPF/strace kernel tracing, automated log-scrubbing cron jobs, and Python automation scripts for cross-cloud audit and remediation.',
    fieldNote: '"When a server acts up, don\'t guess. The sacred trinity: vmstat 1, iostat -xz 1, and dmesg -T will tell you the exact bottleneck in under 30 seconds."',
    stats: { vel: 97, scale: 96, res: 98, mttr: 99 },
    perks: ['systemd & cgroups', 'Bash & Python Scripting', 'strace & tcpdump', 'Kernel Tuning (sysctl)', 'OverTheWire Wargames'],
    cadSvg: `<svg viewBox="0 0 280 120" class="w-full h-full max-h-28 stroke-current fill-none">
      <rect x="40" y="20" width="200" height="80" rx="8" stroke="#334155" stroke-width="1.8" fill="#070a12"/>
      <circle cx="56" cy="32" r="3" fill="#f43f5e"/>
      <circle cx="68" cy="32" r="3" fill="#f59e0b"/>
      <circle cx="80" cy="32" r="3" fill="#10b981"/>
      <text x="54" y="60" fill="#10b981" font-family="JetBrains Mono" font-size="11">ops@kernel:~$</text>
      <text x="156" y="60" fill="#f1f5f9" font-family="JetBrains Mono" font-size="11">sysctl -p</text>
      <text x="54" y="80" fill="#94a3b8" font-family="JetBrains Mono" font-size="9">[OK] net.core.somaxconn = 4096</text>
    </svg>`
  }
};

let activeArmoryKey = 'gn-drive';

function initArmory() {
  const grid = document.getElementById('armorySelectorGrid');
  if (!grid) return;

  const keys = Object.keys(ARMORY_DATA);

  function renderSelectors() {
    grid.innerHTML = keys.map(k => {
      const d = ARMORY_DATA[k];
      const active = k === activeArmoryKey;
      return `
        <button type="button" class="armory-card rounded-2xl p-4 text-left font-mono text-xs w-full transition ${active ? 'active' : ''}" data-armory="${k}">
          <div class="flex items-center justify-between">
            <span class="text-[10px] text-vfin font-bold">${d.code.split(' // ')[0]}</span>
            <span class="text-slate-400 text-[10px]">${active ? '● ONLINE' : '○ INSPECT'}</span>
          </div>
          <strong class="text-paper text-sm block mt-1 font-display uppercase tracking-wide truncate">${d.title.split(',')[0]}</strong>
          <span class="text-slate-400 text-[11px] block mt-0.5 truncate">${d.sub.replace('SUBSYSTEM: ', '').replace(/"/g, '')}</span>
        </button>
      `;
    }).join('');

    grid.querySelectorAll('[data-armory]').forEach(btn => {
      btn.onclick = () => selectArmory(btn.dataset.armory);
    });
  }

  function selectArmory(key) {
    if (!ARMORY_DATA[key]) return;
    activeArmoryKey = key;
    sfx.uiChime();

    if (!state.inspectedSystems.includes(key)) {
      state.inspectedSystems.push(key);
      addXP(20, `Armory: ${ARMORY_DATA[key].code.split(' // ')[0]}`);
    }

    const d = ARMORY_DATA[key];
    const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

    setTxt('insSystemCode', d.code);
    setTxt('insSystemTitle', d.title);
    setTxt('insSystemSub', d.sub);
    setTxt('insSystemPower', d.power);
    setTxt('insSystemDesc', d.desc);
    setTxt('insFieldNote', d.fieldNote);

    const svgC = document.getElementById('insSvgContainer');
    if (svgC) svgC.innerHTML = d.cadSvg;

    setTxt('statVelVal', `${d.stats.vel}/100`);
    setTxt('statScaleVal', `${d.stats.scale}/100`);
    setTxt('statResVal', `${d.stats.res}/100`);
    setTxt('statMttrVal', `${d.stats.mttr}/100`);

    const setBar = (id, v) => { const el = document.getElementById(id); if (el) el.style.width = `${v}%`; };
    setBar('statVelBar', d.stats.vel);
    setBar('statScaleBar', d.stats.scale);
    setBar('statResBar', d.stats.res);
    setBar('statMttrBar', d.stats.mttr);

    const pList = document.getElementById('insPerksList');
    if (pList) {
      pList.innerHTML = d.perks.map(p => `
        <span class="px-2.5 py-1 rounded-full bg-psycho/10 psycho-text border border-psycho/30 text-[11px] font-mono">
          ✦ ${p}
        </span>
      `).join('');
    }

    const counter = document.getElementById('armoryUnlockCounter');
    if (counter) {
      counter.textContent = `${state.inspectedSystems.length} / ${keys.length} SYSTEMS INSPECTED (+20 XP EACH)`;
    }

    renderSelectors();
  }

  selectArmory(activeArmoryKey);
}

/* -------------------------------------------------------------------------
   6. WORKING ARCADE MINI-GAME — ORBITAL SORTIE: FIN FUNNEL CLUSTER DEFENSE
   ------------------------------------------------------------------------- */
function initFunnelGame() {
  const canvas = document.getElementById('defenseCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let running = false;
  let animId = null;
  let wave = 1;
  let score = 0;
  let combo = 1;
  let coreHp = 100;
  let gnEnergy = 100;
  let autoTurret = true;
  let transAmTimer = 0;
  let shieldTimer = 0;
  let lastFrameTime = performance.now();

  const enemies = [];
  const beams = [];
  const particles = [];
  const funnels = [];

  // Initialize 6 Fin Funnels
  for (let i = 0; i < 6; i++) {
    funnels.push({
      angle: (i * Math.PI) / 3,
      dist: 82,
      target: null,
      cooldown: 0
    });
  }

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width || 800;
    canvas.height = rect.height || 480;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const crosshair = { x: canvas.width / 2, y: canvas.height / 2 };
  canvas.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    crosshair.x = e.clientX - r.left;
    crosshair.y = e.clientY - r.top;
  });

  // Tap/Click to fire manual beam
  canvas.addEventListener('pointerdown', (e) => {
    if (!running) return;
    const r = canvas.getBoundingClientRect();
    firePlayerBeam(e.clientX - r.left, e.clientY - r.top);
  });

  function firePlayerBeam(tx, ty) {
    if (gnEnergy < 5) return;
    gnEnergy = Math.max(0, gnEnergy - 5);
    sfx.beamRifle();
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const dx = tx - cx;
    const dy = ty - cy;
    const dist = Math.hypot(dx, dy) || 1;
    beams.push({
      x: cx, y: cy,
      vx: (dx / dist) * 14,
      vy: (dy / dist) * 14,
      life: 55,
      color: transAmTimer > 0 ? '#f43f5e' : '#38bdf8',
      damage: transAmTimer > 0 ? 50 : 30
    });
  }

  function spawnWave(w) {
    const count = 4 + w * 2;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spawnDist = Math.max(canvas.width, canvas.height) * 0.7 + Math.random() * 200;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      const typeRoll = Math.random();
      let type = 'zaku';
      let hp = 25;
      let speed = 1.2 + w * 0.15;
      let radius = 10;
      let color = '#10b981';

      if (typeRoll > 0.75) {
        type = 'cruiser';
        hp = 70 + w * 10;
        speed = 0.65;
        radius = 18;
        color = '#a855f7';
      } else if (typeRoll > 0.5) {
        type = 'deadlock';
        hp = 18;
        speed = 2.0 + w * 0.2;
        radius = 8;
        color = '#f43f5e';
      }

      enemies.push({
        x: cx + Math.cos(angle) * spawnDist,
        y: cy + Math.sin(angle) * spawnDist,
        type,
        hp,
        maxHp: hp,
        speed,
        radius,
        color
      });
    }

    const comms = document.getElementById('pilotCommsText');
    if (comms) {
      comms.textContent = `WAVE ${w} INCOMING // Intercepting ${count} anomaly vectors. Focus fire!`;
    }
  }

  function triggerAbility(slot) {
    if (!running) return;
    if (slot === 1) {
      // Fin Funnel Barrage (30 EN)
      if (gnEnergy < 30) { sfx.warning(); return; }
      gnEnergy -= 30;
      sfx.beamRifle();
      funnels.forEach(f => {
        enemies.forEach(e => {
          beams.push({
            x: canvas.width / 2 + Math.cos(f.angle) * f.dist,
            y: canvas.height / 2 + Math.sin(f.angle) * f.dist,
            vx: ((e.x - canvas.width / 2) / 60) * 12,
            vy: ((e.y - canvas.height / 2) / 60) * 12,
            life: 45,
            color: '#10b981',
            damage: 35
          });
        });
      });
      showToast('ABILITY // FIN FUNNEL BARRAGE DEPLOYED');
    } else if (slot === 2) {
      // I-Field WAF Shield (40 EN)
      if (gnEnergy < 40) { sfx.warning(); return; }
      gnEnergy -= 40;
      shieldTimer = 360; // ~6 seconds
      coreHp = Math.min(100, coreHp + 25);
      sfx.tone(600, 'sine', 0.25, 0.08, 900);
      showToast('ABILITY // I-FIELD WAF SHIELD ACTIVE (+25% HP)');
    } else if (slot === 3) {
      // High-Mega Cannon (60 EN)
      if (gnEnergy < 60) { sfx.warning(); return; }
      gnEnergy -= 60;
      sfx.explosion();
      enemies.forEach(e => {
        e.hp = 0;
        spawnExplosion(e.x, e.y, e.color, 16);
      });
      score += enemies.length * 100 * combo;
      enemies.length = 0;
      showToast('ABILITY // HIGH-MEGA CANNON: SCREEN PURGE');
    } else if (slot === 4) {
      // Trans-Am Overclock (80 EN)
      if (gnEnergy < 80) { sfx.warning(); return; }
      gnEnergy -= 80;
      transAmTimer = 360;
      sfx.ntdAwaken();
      addXP(100, 'Trans-Am Overdrive in Combat');
      showToast('ABILITY // TRANS-AM OVERCLOCK ENGAGED');
    }
  }

  function spawnExplosion(x, y, color, count = 12) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const spd = Math.random() * 4 + 1;
      particles.push({
        x, y,
        vx: Math.cos(a) * spd,
        vy: Math.sin(a) * spd,
        color,
        life: 25 + Math.random() * 15,
        maxLife: 40
      });
    }
  }

  function gameLoop(now) {
    if (!running) return;
    const dt = Math.min(0.1, (now - lastFrameTime) / 1000);
    lastFrameTime = now;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Energy regeneration
    const regenRate = transAmTimer > 0 ? 25 : 12;
    gnEnergy = Math.min(100, gnEnergy + regenRate * dt);
    if (transAmTimer > 0) transAmTimer--;
    if (shieldTimer > 0) shieldTimer--;

    ctx.fillStyle = '#040711';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw central Production Kubernetes Core
    ctx.save();
    ctx.translate(cx, cy);

    // Shield Aura
    if (shieldTimer > 0) {
      ctx.beginPath();
      ctx.arc(0, 0, 48, 0, Math.PI * 2);
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 3;
      ctx.shadowColor = '#10b981';
      ctx.shadowBlur = 18;
      ctx.stroke();
    }

    // Core body
    ctx.beginPath();
    ctx.arc(0, 0, 26, 0, Math.PI * 2);
    ctx.fillStyle = transAmTimer > 0 ? '#f43f5e' : '#0d1322';
    ctx.strokeStyle = transAmTimer > 0 ? '#f59e0b' : '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 12;
    ctx.shadowColor = transAmTimer > 0 ? '#f43f5e' : '#38bdf8';
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#f1f5f9';
    ctx.font = 'bold 9px "JetBrains Mono"';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('CORE', 0, 0);

    // Update & draw 6 Fin Funnels
    const rotSpeed = transAmTimer > 0 ? 0.05 : 0.025;
    funnels.forEach((f, idx) => {
      f.angle += rotSpeed;
      const fx = Math.cos(f.angle) * f.dist;
      const fy = Math.sin(f.angle) * f.dist;

      // Orbit connector line
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(fx, fy);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
      ctx.stroke();

      // Funnel pod
      ctx.save();
      ctx.translate(fx, fy);
      ctx.rotate(f.angle + Math.PI / 2);
      ctx.beginPath();
      ctx.moveTo(0, -9);
      ctx.lineTo(4, 7);
      ctx.lineTo(-4, 7);
      ctx.closePath();
      ctx.fillStyle = '#f8fafc';
      ctx.fill();
      ctx.fillStyle = transAmTimer > 0 ? '#f43f5e' : '#10b981';
      ctx.fillRect(-2, 2, 4, 6);
      ctx.restore();

      // Auto-turret targeting
      f.cooldown -= dt;
      if (autoTurret && f.cooldown <= 0 && enemies.length > 0) {
        // Find nearest enemy
        let nearest = null;
        let minD = Infinity;
        enemies.forEach(e => {
          const d = Math.hypot(e.x - (cx + fx), e.y - (cy + fy));
          if (d < minD) { minD = d; nearest = e; }
        });

        if (nearest && minD < 400) {
          f.cooldown = transAmTimer > 0 ? 0.18 : 0.42;
          const edx = nearest.x - (cx + fx);
          const edy = nearest.y - (cy + fy);
          const dist = Math.hypot(edx, edy) || 1;
          beams.push({
            x: cx + fx,
            y: cy + fy,
            vx: (edx / dist) * 11,
            vy: (edy / dist) * 11,
            life: 45,
            color: transAmTimer > 0 ? '#f43f5e' : '#10b981',
            damage: 20
          });
        }
      }
    });

    ctx.restore();

    // Update & draw beams
    for (let i = beams.length - 1; i >= 0; i--) {
      const b = beams[i];
      b.x += b.vx;
      b.y += b.vy;
      b.life--;

      ctx.beginPath();
      ctx.moveTo(b.x, b.y);
      ctx.lineTo(b.x - b.vx * 1.5, b.y - b.vy * 1.5);
      ctx.strokeStyle = b.color;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = b.color;
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Check collision with enemies
      let hit = false;
      for (let j = enemies.length - 1; j >= 0; j--) {
        const e = enemies[j];
        if (Math.hypot(b.x - e.x, b.y - e.y) < e.radius + 6) {
          e.hp -= b.damage;
          spawnExplosion(b.x, b.y, b.color, 4);
          hit = true;
          if (e.hp <= 0) {
            spawnExplosion(e.x, e.y, e.color, 14);
            sfx.explosion();
            enemies.splice(j, 1);
            score += (e.type === 'cruiser' ? 250 : e.type === 'deadlock' ? 150 : 80) * combo;
            combo = Math.min(10, combo + 1);
          }
          break;
        }
      }
      if (hit || b.life <= 0) beams.splice(i, 1);
    }

    // Update & draw enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
      const e = enemies[i];
      const dx = cx - e.x;
      const dy = cy - e.y;
      const dist = Math.hypot(dx, dy) || 1;

      e.x += (dx / dist) * e.speed;
      e.y += (dy / dist) * e.speed;

      // Draw enemy
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
      ctx.fillStyle = e.color;
      ctx.shadowColor = e.color;
      ctx.shadowBlur = 9;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw HP bar if damaged
      if (e.hp < e.maxHp) {
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.fillRect(e.x - 14, e.y - e.radius - 6, 28, 3);
        ctx.fillStyle = '#10b981';
        ctx.fillRect(e.x - 14, e.y - e.radius - 6, (e.hp / e.maxHp) * 28, 3);
      }

      // Check core collision
      if (dist < 32) {
        enemies.splice(i, 1);
        spawnExplosion(e.x, e.y, '#f43f5e', 14);
        sfx.warning();
        combo = 1;
        if (shieldTimer <= 0) {
          coreHp = Math.max(0, coreHp - (e.type === 'deadlock' ? 25 : 15));
          if (coreHp <= 0) {
            endGame();
            return;
          }
        }
      }
    }

    // Update & draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      const alpha = Math.max(0, p.life / p.maxLife);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      if (p.life <= 0) particles.splice(i, 1);
    }

    // Check if wave cleared
    if (enemies.length === 0) {
      wave++;
      addXP(15, `Sortie Wave ${wave} Cleared`);
      spawnWave(wave);
    }

    // Update HUD bars & labels
    const hpBar = document.getElementById('gameHpBar');
    const hpTxt = document.getElementById('gameHpText');
    const enBar = document.getElementById('gameEnBar');
    const enTxt = document.getElementById('gameEnText');
    const waveTxt = document.getElementById('gameWaveText');
    const scoreTxt = document.getElementById('gameScoreText');
    const comboTxt = document.getElementById('gameComboText');

    if (hpBar) hpBar.style.width = `${coreHp}%`;
    if (hpTxt) hpTxt.textContent = `${Math.round(coreHp)}%`;
    if (enBar) enBar.style.width = `${gnEnergy}%`;
    if (enTxt) enTxt.textContent = `${Math.round(gnEnergy)} EN`;
    if (waveTxt) waveTxt.textContent = `WAVE ${String(wave).padStart(2, '0')}`;
    if (scoreTxt) scoreTxt.textContent = String(score).padStart(4, '0');
    if (comboTxt) comboTxt.textContent = `x${combo}`;

    animId = requestAnimationFrame(gameLoop);
  }

  function startGame() {
    running = true;
    wave = 1;
    score = 0;
    combo = 1;
    coreHp = 100;
    gnEnergy = 100;
    enemies.length = 0;
    beams.length = 0;
    particles.length = 0;
    lastFrameTime = performance.now();

    const overlay = document.getElementById('gameOverlay');
    if (overlay) overlay.classList.add('hidden');
    spawnWave(wave);
    sfx.ntdAwaken();
    showToast('SORTIE // DEFENSE SORTIE LAUNCHED');
    if (animId) cancelAnimationFrame(animId);
    animId = requestAnimationFrame(gameLoop);
  }

  function endGame() {
    running = false;
    if (animId) cancelAnimationFrame(animId);
    sfx.explosion();

    if (score > state.highScore) {
      state.highScore = score;
      saveState();
      renderHUD();
      showToast(`NEW HIGH SCORE // ${score} PTS!`);
    }

    const overlay = document.getElementById('gameOverlay');
    const title = document.getElementById('overlayTitle');
    const sub = document.getElementById('overlaySub');
    const startBtn = document.getElementById('overlayStartBtn');

    if (overlay) overlay.classList.remove('hidden');
    if (title) title.textContent = 'CORE BREACH // GAME OVER';
    if (sub) sub.innerHTML = `You held the cluster through <strong class="text-vfin">Wave ${wave}</strong> with a score of <strong class="psycho-text">${score}</strong>. Click below to re-launch!`;
    if (startBtn) startBtn.textContent = '↺ SORTIE AGAIN';
  }

  // Bind Buttons & Hotkeys
  const startBtn = document.getElementById('gameStartBtn');
  const overlayBtn = document.getElementById('overlayStartBtn');
  if (startBtn) startBtn.onclick = startGame;
  if (overlayBtn) overlayBtn.onclick = startGame;

  const autoTurretBtn = document.getElementById('autoFunnelToggleBtn');
  const autoTurretStatus = document.getElementById('autoFunnelStatus');
  if (autoTurretBtn && autoTurretStatus) {
    autoTurretBtn.onclick = () => {
      autoTurret = !autoTurret;
      autoTurretStatus.textContent = autoTurret ? 'ON' : 'OFF';
      autoTurretStatus.className = autoTurret ? 'psycho-text' : 'text-slate-400';
      sfx.keyThock();
      showToast(autoTurret ? 'AUTO-TURRET // 6 FUNNELS LOCKED' : 'AUTO-TURRET // MANUAL AIM ONLY');
    };
  }

  const b1 = document.getElementById('abilityBarrageBtn'); if (b1) b1.onclick = () => triggerAbility(1);
  const b2 = document.getElementById('abilityIFieldBtn'); if (b2) b2.onclick = () => triggerAbility(2);
  const b3 = document.getElementById('abilityMegaCannonBtn'); if (b3) b3.onclick = () => triggerAbility(3);
  const b4 = document.getElementById('abilityTransAmBtn'); if (b4) b4.onclick = () => triggerAbility(4);

  window.addEventListener('keydown', (e) => {
    if (['1', '2', '3', '4'].includes(e.key) && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      triggerAbility(parseInt(e.key));
    }
  });
}

/* -------------------------------------------------------------------------
   7. 03:00 AM ON-CALL WAR ROOM & TERMINAL SIMULATOR
   ------------------------------------------------------------------------- */
const WAR_ROOM_INCIDENTS = [
  {
    id: 'INC-K8S-042',
    title: 'INC-K8S-042: PODS IN CRASHLOOPBACKOFF',
    summary: '3 of 5 checkout replicas are crash-looping after an automated Vault secret rotation.',
    severity: 'SEV-2 // DEGRADED',
    xp: '+250 XP',
    goldenRule: '"Never run kubectl delete pod --all before checking \'--previous\' logs—otherwise you wipe the crash evidence!"',
    initialLogs: [
      '[02:59:44 UTC] [ALERT] prometheus: KubePodCrashLooping - checkout-api (namespace: prod)',
      '[03:00:02 UTC] [PAGE] PagerDuty P1 escalation to on-call engineer: hemant',
      '[03:00:10 UTC] Connected to bastion: hemant@prod-bastion:~',
      '[03:00:12 UTC] Run \'kubectl get pods\' or click a countermeasure below to triage.'
    ],
    choices: [
      {
        label: '1. Inspect --previous Logs',
        desc: 'Read last termination crash dump without touching running pods',
        cmd: 'kubectl logs deploy/checkout-api --previous --tail=20',
        output: [
          'checkout-api-7b89d: [FATAL] Database connection failed: 28P01 (password authentication failed for user "checkout_app")',
          'checkout-api-7b89d: Vault leased credential was rotated at 02:45 UTC but app context holds stale cached token.',
          'DIAGNOSIS CONFIRMED: Pod needs graceful restart or Vault lease renewal.'
        ]
      },
      {
        label: '2. Vault Agent Refresh & Rollout',
        desc: 'Trigger Vault sidecar renewal & rollout restart checkout deployment',
        cmd: 'vault-agent sync && kubectl rollout restart deploy/checkout-api',
        output: [
          'vault-agent: renewed token lease (ttl: 3600s, status: valid)',
          'deployment.apps/checkout-api restarted',
          'Waiting for deployment "checkout-api" rollout to finish: 5 of 5 updated replicas are available...',
          '✓ INCIDENT RESOLVED // All 5 replicas healthy. Latency nominal (18ms).'
        ],
        resolves: true
      },
      {
        label: '3. Force Delete Pods',
        desc: 'Run kubectl delete pod -l app=checkout-api --force',
        cmd: 'kubectl delete pod -l app=checkout-api --force',
        output: [
          'warning: Immediate deletion does not wait for confirmation.',
          'pods deleted. New pods created immediately enter CrashLoopBackOff again.',
          '⚠ COUNTERMEASURE FAILED: You wiped the container crash logs without fixing the stale Vault token!'
        ]
      }
    ]
  },
  {
    id: 'INC-CICD-017',
    title: 'INC-CICD-017: ARGOCD OUTOFSYNC & DEADLOCK',
    summary: 'Production payment service deployment blocked in ArgoCD with immutable field conflict.',
    severity: 'SEV-1 // CRITICAL',
    xp: '+250 XP',
    goldenRule: '"When a ConfigMap is marked immutable in production, never attempt in-place patch—generate a versioned name with git SHA."',
    initialLogs: [
      '[03:14:20 UTC] [ALERT] argocd: Application "payments-prod" sync failed (ComparisonError)',
      '[03:14:22 UTC] [DIFF] ConfigMap "payment-rules" field spec.immutable cannot be modified',
      '[03:14:35 UTC] Run \'argocd app get payments-prod\' or click a countermeasure below.'
    ],
    choices: [
      {
        label: '1. Check ArgoCD Diff',
        desc: 'Inspect exact manifest diff against Git repo',
        cmd: 'argocd app diff payments-prod',
        output: [
          '===== ConfigMap/payment-rules =====',
          '@@ -4,6 +4,6 @@',
          '-  max_retry: "3"',
          '+  max_retry: "5"',
          'Error: ConfigMap is marked immutable; in-place update rejected by API server.'
        ]
      },
      {
        label: '2. Apply Versioned ConfigMap & Sync',
        desc: 'Rename ConfigMap with SHA hash in Helm values and re-sync',
        cmd: 'git commit -m "fix: versioned configmap" && argocd app sync payments-prod',
        output: [
          'ConfigMap/payment-rules-a7f3 created',
          'Deployment/payments-worker updated with new volumeMount',
          'Synchronized successfully. Health: Healthy (100% zero downtime).',
          '✓ INCIDENT RESOLVED // Payments pipeline cleared and green.'
        ],
        resolves: true
      },
      {
        label: '3. Manual kubectl edit',
        desc: 'Edit ConfigMap directly in cluster',
        cmd: 'kubectl edit cm payment-rules',
        output: [
          'Error: resource cannot be updated in-place (immutable field)',
          '⚠ ANTI-PATTERN: Direct kubectl edits create GitOps drift and fail the audit gate.'
        ]
      }
    ]
  },
  {
    id: 'INC-SRE-063',
    title: 'INC-SRE-063: 504 GATEWAY TIMEOUT SPIKES',
    summary: 'P99 latency spiked from 38ms to 4.2s on Istio Ingress Gateway under traffic load.',
    severity: 'SEV-2 // DEGRADED',
    xp: '+250 XP',
    goldenRule: '"Under ingress saturation, tune DestinationRule connection pools and Envoy circuit breakers before increasing pod CPU limits."',
    initialLogs: [
      '[03:42:01 UTC] [ALERT] prometheus: IngressHttp504Rate > 5% on istio-ingressgateway',
      '[03:42:15 UTC] P99 latency: 4.28s | Request rate: 14,200 req/sec',
      '[03:42:20 UTC] Run \'istioctl proxy-status\' or inspect runbook below.'
    ],
    choices: [
      {
        label: '1. Analyze Envoy Proxy Status',
        desc: 'Check connection pools and upstream drops with istioctl',
        cmd: 'istioctl proxy-status && kubectl logs -n istio-system deploy/istio-ingressgateway --tail=10',
        output: [
          'istio-ingressgateway-5f78: upstream_cx_overflow: 8420',
          'Envoy connection pool is capped at maxConnections: 1024, starving incoming HTTP/2 streams.',
          'DIAGNOSIS: Ingress connection pool exhaustion.'
        ]
      },
      {
        label: '2. Scale Envoy & Tune Connection Pool',
        desc: 'Update DestinationRule maxConnections: 4096 & scale ingress replicas 4→8',
        cmd: 'kubectl apply -f ingress-destrule.yaml && kubectl scale deploy/istio-ingressgateway -n istio-system --replicas=8',
        output: [
          'destinationrule.networking.istio.io/ingress-gateway-pool configured (maxConnections: 4096)',
          'deployment.apps/istio-ingressgateway scaled to 8 replicas',
          'upstream_cx_overflow: 0 | P99 latency recovered: 28ms | 0 errors',
          '✓ INCIDENT RESOLVED // Traffic flowing smoothly across 8 ingress nodes.'
        ],
        resolves: true
      },
      {
        label: '3. Restart All Ingress Pods',
        desc: 'Run kubectl rollout restart deploy/istio-ingressgateway',
        cmd: 'kubectl rollout restart deploy/istio-ingressgateway -n istio-system',
        output: [
          'warning: Dropped 3,400 active connections in-flight!',
          'HTTP 502/503 error burst triggered on public endpoints.',
          '⚠ COUNTERMEASURE FAILED: In-flight requests severed without fixing pool sizing.'
        ]
      }
    ]
  }
];

let activeIncidentIndex = 0;

function initBridgeSim() {
  const tabsList = document.getElementById('missionTabsList');
  const termStream = document.getElementById('termLogStream');
  const termForm = document.getElementById('termCliForm');
  const termInput = document.getElementById('termCliInput');
  const choicesGrid = document.getElementById('simChoicesGrid');
  const feedbackBanner = document.getElementById('simFeedbackBanner');
  const resetBtn = document.getElementById('resetSimBtn');

  if (!tabsList || !termStream) return;

  function renderTabs() {
    tabsList.innerHTML = WAR_ROOM_INCIDENTS.map((inc, i) => {
      const active = i === activeIncidentIndex;
      const cleared = state.clearedMissions.includes(inc.id);
      return `
        <button type="button" class="armory-card rounded-2xl p-4 text-left font-mono text-xs w-full transition ${active ? 'active' : ''}" data-inc="${i}">
          <div class="flex items-center justify-between">
            <span class="text-[10px] ${cleared ? 'text-emerald' : 'text-vfin'} font-bold">${inc.id}</span>
            <span class="text-[10px] ${cleared ? 'text-emerald' : 'text-ntd'}">${cleared ? '✓ RESOLVED' : '● ACTIVE'}</span>
          </div>
          <strong class="text-paper text-sm block mt-1 font-display truncate">${inc.title.split(': ')[1] || inc.title}</strong>
          <span class="text-slate-400 text-[10px] block mt-0.5">${inc.severity}</span>
        </button>
      `;
    }).join('');

    tabsList.querySelectorAll('[data-inc]').forEach(btn => {
      btn.onclick = () => selectIncident(parseInt(btn.dataset.inc));
    });

    // Update sticky note & progress
    const clearedCount = state.clearedMissions.length;
    const countEl = document.getElementById('missionsClearedCount');
    const barEl = document.getElementById('missionsClearedBar');
    if (countEl) countEl.textContent = `${clearedCount} / ${WAR_ROOM_INCIDENTS.length} RESOLVED`;
    if (barEl) barEl.style.width = `${(clearedCount / WAR_ROOM_INCIDENTS.length) * 100}%`;
  }

  function appendLog(line, color = 'text-slate-300') {
    const p = document.createElement('div');
    p.className = `leading-relaxed ${color}`;
    p.textContent = line;
    termStream.appendChild(p);
    termStream.scrollTop = termStream.scrollHeight;
  }

  function selectIncident(idx) {
    activeIncidentIndex = idx;
    const inc = WAR_ROOM_INCIDENTS[idx];
    sfx.uiChime();

    const titleEl = document.getElementById('simIncidentTitle');
    const sumEl = document.getElementById('simIncidentSummary');
    const xpEl = document.getElementById('simIncidentXP');
    const sessionTitle = document.getElementById('termSessionTitle');
    const sevBadge = document.getElementById('termSeverityBadge');
    const stickyNote = document.getElementById('simStickyNote');

    if (titleEl) titleEl.textContent = inc.title;
    if (sumEl) sumEl.textContent = inc.summary;
    if (xpEl) xpEl.textContent = inc.xp;
    if (sessionTitle) sessionTitle.textContent = `hemant@prod-bastion:~ (${inc.id})`;
    if (sevBadge) sevBadge.textContent = inc.severity;
    if (stickyNote) stickyNote.textContent = inc.goldenRule;

    // Reset log stream with initial logs
    termStream.innerHTML = '';
    inc.initialLogs.forEach(l => appendLog(l, 'text-slate-400'));

    // Render Choices
    choicesGrid.innerHTML = inc.choices.map((c, ci) => `
      <button type="button" class="p-3.5 rounded-xl bg-slate-950/80 border border-slate-700 hover:border-psycho text-left font-mono text-xs transition group" data-choice="${ci}">
        <strong class="text-paper group-hover:text-psycho block font-bold transition">${c.label}</strong>
        <span class="text-slate-400 text-[10px] block mt-1">${c.desc}</span>
      </button>
    `).join('');

    choicesGrid.querySelectorAll('[data-choice]').forEach(btn => {
      btn.onclick = () => runChoice(parseInt(btn.dataset.choice));
    });

    if (feedbackBanner) {
      feedbackBanner.textContent = 'Awaiting tactical action. Inspect the evidence before touching running replicas.';
      feedbackBanner.className = 'text-xs font-mono px-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-400/15 text-slate-300';
    }

    renderTabs();
  }

  function runChoice(ci) {
    const inc = WAR_ROOM_INCIDENTS[activeIncidentIndex];
    const choice = inc.choices[ci];
    if (!choice) return;

    sfx.keyThock();
    appendLog(`hemant@prod❯ ${choice.cmd}`, 'psycho-text font-bold mt-2');
    choice.output.forEach(l => {
      appendLog(l, l.startsWith('✓') ? 'text-emerald font-bold' : l.startsWith('⚠') ? 'text-ntd font-bold' : 'text-slate-300');
    });

    if (choice.resolves) {
      sfx.tone(880, 'sine', 0.2, 0.08, 1760);
      if (!state.clearedMissions.includes(inc.id)) {
        state.clearedMissions.push(inc.id);
        addXP(250, `War Room: ${inc.id} Resolved`);
      }
      if (feedbackBanner) {
        feedbackBanner.textContent = `✓ SUCCESS: ${inc.id} successfully mitigated and resolved!`;
        feedbackBanner.className = 'text-xs font-mono px-4 py-2.5 rounded-xl bg-emerald/15 border border-emerald/50 text-emerald font-bold';
      }
    } else {
      sfx.tone(220, 'sawtooth', 0.15, 0.05);
      if (feedbackBanner) {
        feedbackBanner.textContent = 'Diagnostic complete. Review the terminal output to plan the next step.';
        feedbackBanner.className = 'text-xs font-mono px-4 py-2.5 rounded-xl bg-vfin/15 border border-vfin/40 text-vfin';
      }
    }

    renderTabs();
  }

  // Interactive CLI Form
  if (termForm && termInput) {
    termForm.onsubmit = (e) => {
      e.preventDefault();
      const raw = termInput.value.trim();
      if (!raw) return;
      termInput.value = '';
      sfx.keyThock();

      appendLog(`hemant@prod❯ ${raw}`, 'psycho-text font-bold mt-1');
      const cmd = raw.toLowerCase();

      if (cmd === 'clear') {
        termStream.innerHTML = '';
        return;
      }
      if (cmd === 'help') {
        appendLog('Available commands: kubectl get pods, kubectl logs, kubectl describe, istioctl proxy-status, argocd app get, fix, solve, status, clear');
        return;
      }
      if (cmd.includes('fix') || cmd.includes('solve')) {
        // Run resolving action
        runChoice(1);
        return;
      }
      if (cmd.includes('logs')) {
        runChoice(0);
        return;
      }
      if (cmd.includes('get pods') || cmd.includes('status')) {
        appendLog('NAME                             READY   STATUS             RESTARTS   AGE');
        appendLog('checkout-api-7b89d-xk291         0/1     CrashLoopBackOff   4          8m');
        appendLog('checkout-api-7b89d-ml102         0/1     CrashLoopBackOff   3          6m');
        appendLog('checkout-api-7b89d-pq984         1/1     Running            0          14m');
        return;
      }

      appendLog(`Executed: ${raw} (No error returned. Run 'fix' or choose a countermeasure below.)`, 'text-slate-400');
    };
  }

  if (resetBtn) {
    resetBtn.onclick = () => {
      sfx.keyThock();
      selectIncident(activeIncidentIndex);
      showToast('WAR ROOM // INCIDENT SCENARIO RESET');
    };
  }

  selectIncident(0);
}

/* -------------------------------------------------------------------------
   8. INTERACTIVE CI/CD PIPELINE & KUBERNETES CONTROL ROOM LAB
   ------------------------------------------------------------------------- */
function initClusterLab() {
  // Part A: CI/CD Pipeline
  const modeBtns = document.querySelectorAll('.infra-mode-btn');
  const infraLog = document.getElementById('infraLogText');
  const runNum = document.getElementById('infraRunNumber');
  const stages = document.querySelectorAll('.infra-stage-node');
  let runCount = 1;
  let pipelineRunning = false;

  const PIPELINE_STEPS = [
    { name: '1. GIT COMMIT', log: '[COMMIT] Pull request #142 merged into main by hemantbhadke.' },
    { name: '2. CI BUILD & SCAN', log: '[BUILD & SCAN] Trivy: 0 Critical / 0 High vulnerabilities. SonarQube: Quality Gate PASSED.' },
    { name: '3. CONTAINER ACR', log: '[REGISTRY] Image checkout-api:v1.9.0 tagged, signed, and pushed to ACR.' },
    { name: '4. K8S ROLLOUT', log: '[DEPLOY] Helm upgrade applied on AKS-Prod-Pune-01. Rolling pods to v1.9.0.' },
    { name: '5. PROMETHEUS SLO', log: '[VERIFY] Prometheus SLO green: 0 HTTP 5xx errors. P99 latency: 19ms.' }
  ];

  function runPipeline() {
    if (pipelineRunning) return;
    pipelineRunning = true;
    runCount++;
    if (runNum) runNum.textContent = `RUN #${String(runCount).padStart(4, '0')}`;
    sfx.uiChime();

    let step = 0;
    function nextStep() {
      if (step >= PIPELINE_STEPS.length) {
        pipelineRunning = false;
        if (infraLog) infraLog.textContent = `[SUCCESS] Pipeline Run #${runCount} deployed smoothly with 0 downtime!`;
        addXP(75, 'CI/CD Pipeline Run Completed');
        sfx.levelUp();
        stages.forEach(s => s.classList.remove('opacity-50'));
        return;
      }

      const cur = PIPELINE_STEPS[step];
      if (infraLog) infraLog.textContent = cur.log;
      sfx.tone(440 + step * 110, 'triangle', 0.12, 0.05);

      stages.forEach((s, idx) => {
        if (idx === step) {
          s.style.filter = 'drop-shadow(0 0 16px #10b981)';
        } else {
          s.style.filter = 'none';
        }
      });

      step++;
      setTimeout(nextStep, 900);
    }
    nextStep();
  }

  modeBtns.forEach(btn => {
    btn.onclick = () => {
      const mode = btn.dataset.infraMode;
      if (mode === 'deploy') {
        runPipeline();
      } else if (mode === 'failover') {
        sfx.warning();
        if (infraLog) infraLog.textContent = '[FAILOVER] Region simulated failover: Traffic shifted from Primary (Pune) to Secondary (Hyderabad) with 0 drop.';
        showToast('CLUSTER LAB // MULTI-REGION FAILOVER TESTED');
      } else if (mode === 'idle') {
        pipelineRunning = false;
        if (infraLog) infraLog.textContent = '[PAUSED] Pipeline paused. Awaiting next Git commit.';
      }
    };
  });

  // Part B: Kubernetes Control Room
  const workerGrid = document.getElementById('k8sWorkerGrid');
  const rolloutBtn = document.getElementById('k8sRolloutBtn');
  const scaleBtn = document.getElementById('k8sScaleBtn');
  const resetK8sBtn = document.getElementById('k8sResetBtn');
  const workloadSelect = document.getElementById('k8sWorkloadSelect');
  const toggleLogsBtn = document.getElementById('k8sToggleLogsBtn');
  const logsBox = document.getElementById('k8sPodLogsBox');

  let currentImageTag = 'app:v1.8.2';
  let totalReplicas = 5;

  const POD_LOG_SNIPPETS = {
    'checkout': [
      '2026-11-08T17:30:00.124Z [INFO] checkout-api listening on :8080 (env: production)',
      '2026-11-08T17:30:01.002Z [DEBUG] DB connection pool: 24 active / 4 idle (healthy)',
      '2026-11-08T17:30:02.451Z [INFO] GET /healthz 200 OK (latency: 1.2ms)',
      '2026-11-08T17:30:04.119Z [INFO] POST /checkout/orders 201 Created (order_id=ord_98412, duration=19.4ms)'
    ],
    'payments': [
      '2026-11-08T17:30:00.019Z [INFO] payments-worker: Kafka consumer group "pay-v1" assigned 12 partitions',
      '2026-11-08T17:30:01.218Z [INFO] Processed batch: 450 transactions, 0 errors',
      '2026-11-08T17:30:03.491Z [INFO] KMS decrypt batch latency: 4.8ms'
    ],
    'telemetry': [
      '2026-11-08T17:30:00.001Z [INFO] prometheus-node-exporter: scraping /metrics every 15s',
      '2026-11-08T17:30:02.000Z [INFO] Exported 1,482 timeseries metrics to central gateway'
    ]
  };

  const NODES = [
    { id: 'worker-a', name: 'worker-node-a', zone: 'central-india-1a', cpu: '38%', mem: '54%' },
    { id: 'worker-b', name: 'worker-node-b', zone: 'central-india-1b', cpu: '42%', mem: '61%' },
    { id: 'worker-c', name: 'worker-node-c', zone: 'central-india-1c', cpu: '31%', mem: '48%' }
  ];

  let selectedPod = {
    name: 'checkout-api-01',
    node: 'worker-a',
    image: currentImageTag,
    restarts: 0,
    ready: '1 / 1'
  };

  function renderNodes() {
    if (!workerGrid) return;
    workerGrid.innerHTML = NODES.map((n, ni) => {
      // Allocate pods to nodes
      const podsOnNode = [];
      for (let i = 0; i < totalReplicas; i++) {
        if (i % 3 === ni) {
          podsOnNode.push({
            id: `${workloadSelect ? workloadSelect.value : 'checkout'}-api-${String(i + 1).padStart(2, '0')}`,
            node: n.id,
            image: currentImageTag,
            restarts: 0,
            ready: '1 / 1'
          });
        }
      }

      return `
        <div class="rounded-2xl bg-slate-950/80 border border-slate-700 p-4 space-y-3 font-mono text-xs">
          <div class="flex items-center justify-between border-b border-slate-400/15 pb-2">
            <div>
              <strong class="text-paper block font-bold">${n.name}</strong>
              <span class="text-slate-500 text-[10px]">${n.zone}</span>
            </div>
            <span class="text-emerald text-[10px] font-bold">● READY</span>
          </div>

          <div class="space-y-1.5 text-[10px]">
            <div class="flex justify-between"><span class="text-slate-400">CPU LOAD</span><b class="text-skybeam">${n.cpu}</b></div>
            <div class="flex justify-between"><span class="text-slate-400">RAM USAGE</span><b class="text-vfin">${n.mem}</b></div>
          </div>

          <div class="pt-2 border-t border-slate-400/15 space-y-2">
            <span class="text-slate-400 text-[10px] block">ACTIVE POD SLOTS:</span>
            <div class="grid grid-cols-2 gap-1.5">
              ${podsOnNode.map(p => `
                <button type="button" class="p-2 rounded-xl border text-left transition ${selectedPod.name === p.id ? 'border-psycho bg-psycho/15 text-paper' : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-skybeam'}" data-pod="${p.id}" data-node="${n.id}">
                  <span class="text-[9px] text-emerald block font-bold">● READY</span>
                  <span class="text-[10px] truncate block font-semibold">${p.id}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');

    workerGrid.querySelectorAll('[data-pod]').forEach(btn => {
      btn.onclick = () => {
        selectedPod = {
          name: btn.dataset.pod,
          node: btn.dataset.node,
          image: currentImageTag,
          restarts: 0,
          ready: '1 / 1'
        };
        sfx.uiChime();
        updateInspector();
        renderNodes();
      };
    });

    const statusEl = document.getElementById('k8sClusterStatus');
    if (statusEl) statusEl.textContent = `● ${totalReplicas} / ${totalReplicas} REPLICAS READY`;
  }

  function updateInspector() {
    const pName = document.getElementById('k8sPodName');
    const pImage = document.getElementById('k8sPodImage');
    const pNode = document.getElementById('k8sPodNode');
    const pRestarts = document.getElementById('k8sPodRestarts');
    const pReady = document.getElementById('k8sPodReady');

    if (pName) pName.textContent = selectedPod.name;
    if (pImage) pImage.textContent = selectedPod.image;
    if (pNode) pNode.textContent = selectedPod.node;
    if (pRestarts) pRestarts.textContent = String(selectedPod.restarts);
    if (pReady) pReady.textContent = selectedPod.ready;

    if (logsBox) {
      const kind = workloadSelect ? workloadSelect.value : 'checkout';
      const lines = POD_LOG_SNIPPETS[kind] || POD_LOG_SNIPPETS['checkout'];
      logsBox.textContent = lines.join('\n');
    }
  }

  if (rolloutBtn) {
    rolloutBtn.onclick = () => {
      currentImageTag = currentImageTag === 'app:v1.8.2' ? 'app:v1.9.0' : 'app:v1.8.2';
      selectedPod.image = currentImageTag;
      sfx.uiChime();
      showToast(`ROLLOUT // ZERO-DOWNTIME ROLLING UPDATE TO ${currentImageTag}`);
      addXP(100, 'K8s Rolling Update Simulated');
      updateInspector();
      renderNodes();
    };
  }

  if (scaleBtn) {
    scaleBtn.onclick = () => {
      totalReplicas = totalReplicas === 5 ? 8 : 5;
      sfx.uiChime();
      showToast(`SCALE // REPLICAS SCALED TO ${totalReplicas} WORKLOAD UNITS`);
      addXP(75, 'HPA Replica Scale Simulated');
      renderNodes();
    };
  }

  if (resetK8sBtn) {
    resetK8sBtn.onclick = () => {
      currentImageTag = 'app:v1.8.2';
      totalReplicas = 5;
      sfx.keyThock();
      updateInspector();
      renderNodes();
      showToast('CLUSTER LAB // REPLICAS RESET');
    };
  }

  if (workloadSelect) {
    workloadSelect.onchange = () => {
      sfx.keyThock();
      selectedPod.name = `${workloadSelect.value}-api-01`;
      updateInspector();
      renderNodes();
    };
  }

  if (toggleLogsBtn && logsBox) {
    toggleLogsBtn.onclick = () => {
      logsBox.classList.toggle('hidden');
      sfx.keyThock();
    };
  }

  updateInspector();
  renderNodes();
}

/* -------------------------------------------------------------------------
   9. 5-SECTOR ENGINEERING UNIVERSE MAP & TECHNICAL QUIZ
   ------------------------------------------------------------------------- */
const UNIVERSE_SECTORS = [
  {
    code: 'SECTOR 01 // LINUX KEEP',
    title: 'Master the Linux Kernel & Shell Layer',
    desc: 'The foundation beneath every container and cloud VM: processes, cgroups, namespaces, systemd units, file descriptors, permissions, and Bash/Python automation.',
    tools: ['systemd', 'cgroups v2', 'Bash', 'Python 3', 'strace', 'iptables'],
    question: 'Which Linux signal asks a process to gracefully terminate while allowing it to clean up open connections and flush buffers?',
    options: ['SIGTERM (15)', 'SIGKILL (9)', 'SIGINT (2)', 'SIGSTOP (19)'],
    correct: 0,
    explanation: 'Correct! SIGTERM (signal 15) allows processes to execute exit handlers and flush buffers. SIGKILL (9) forcefully kills the process immediately.'
  },
  {
    code: 'SECTOR 02 // CLOUD CONSTELLATION',
    title: 'Multi-Cloud Architecture & IaC Landing Zones',
    desc: 'Enterprise multi-cloud topologies across AWS and Azure: hub-spoke VNets, Traffic Manager, KMS customer-managed keys, and declarative Terraform landing zones.',
    tools: ['AWS EKS', 'Azure AKS', 'Terraform', 'Ansible', 'AWS KMS', 'Azure Key Vault'],
    question: 'What is the primary architectural purpose of an Azure / AWS Hub-and-Spoke network topology?',
    options: [
      'Centralize ingress inspection, firewalls & DNS while isolating workloads',
      'Speed up public internet download speeds',
      'Eliminate the need for private subnets',
      'Bypass cloud billing and tagging policies'
    ],
    correct: 0,
    explanation: 'Correct! Hub-and-spoke centralizes shared network appliances (firewalls, VPN gateways, DNS) in the hub while keeping workload spokes isolated.'
  },
  {
    code: 'SECTOR 03 // GITOPS CRUCIBLE',
    title: 'Declarative Continuous Delivery & Rollbacks',
    desc: 'Automated release trains where Git is the single source of truth. ArgoCD reconciliation loops, Helm charts, canary rollouts, and Trivy security scanning.',
    tools: ['ArgoCD', 'GitHub Actions', 'Jenkins', 'Helm 3', 'Trivy', 'SonarQube'],
    question: 'In ArgoCD GitOps, what prevents unauthorized changes made directly in the cluster via "kubectl edit" from persisting?',
    options: [
      'Automated Self-Heal & Reconciliation against the Git source of truth',
      'Linux root sudo privilege restrictions',
      'Docker daemon restarting every hour',
      'Kubernetes garbage collection daemon'
    ],
    correct: 0,
    explanation: 'Correct! ArgoCD detects drift between the live cluster and Git repo; with auto-sync and self-heal enabled, it immediately restores desired Git state.'
  },
  {
    code: 'SECTOR 04 // TELEMETRY VOID',
    title: 'Full-Stack Observability & SRE Golden Signals',
    desc: 'Telemetry across distributed systems: Prometheus Alertmanager, Grafana SRE dashboards, Datadog APM tracing, Splunk logs, and P99 latency tracking.',
    tools: ['Prometheus', 'Grafana', 'Datadog', 'Splunk', 'OpenTelemetry', 'Nagios'],
    question: 'According to Google SRE principles, which metric quartet represents the "Four Golden Signals"?',
    options: [
      'Latency, Traffic, Errors, and Saturation',
      'CPU, Memory, Disk, and Network IO',
      'Code Coverage, Lint Score, PR Count, and Commits',
      'Uptime, Ping, SSH, and DNS Resolution'
    ],
    correct: 0,
    explanation: 'Correct! Latency, Traffic, Errors, and Saturation are the four golden signals critical to measuring real user service health.'
  },
  {
    code: 'SECTOR 05 // SECURITY BASTION',
    title: 'Zero Trust, Identity Federation & DevSecOps',
    desc: 'Defense in depth: short-lived OIDC federation, least-privilege IAM policies, container image signing, automated secrets rotation, and security gate audits.',
    tools: ['OIDC', 'HashiCorp Vault', 'Azure RBAC', 'AWS IAM', 'Cosign', 'OWASP ZAP'],
    question: 'Why is GitHub Actions OIDC federation safer than storing static AWS_ACCESS_KEY_ID in repository secrets?',
    options: [
      'It exchanges short-lived ephemeral tokens without storing static secrets',
      'It encrypts the entire Git commit history',
      'It makes AWS IAM policies public for easier debugging',
      'It eliminates the need for TLS/HTTPS handshakes'
    ],
    correct: 0,
    explanation: 'Correct! OIDC uses short-lived tokens (typically 1 hour) verified cryptographically via JWT, eliminating leaked permanent credentials.'
  }
];

let activeSectorIndex = 0;

function initUniverseMap() {
  const tabsGrid = document.getElementById('sectorTabsGrid');
  const prevBtn = document.getElementById('sectorPrevBtn');
  const nextBtn = document.getElementById('sectorNextBtn');
  const exploreBtn = document.getElementById('sectorExploreBtn');

  if (!tabsGrid) return;

  function renderSectorTabs() {
    tabsGrid.innerHTML = UNIVERSE_SECTORS.map((s, i) => {
      const active = i === activeSectorIndex;
      const explored = state.exploredSectors.includes(i);
      return `
        <button type="button" class="armory-card rounded-2xl p-3.5 text-left font-mono text-xs w-full transition ${active ? 'active' : ''}" data-sector="${i}">
          <div class="flex items-center justify-between">
            <span class="text-[10px] text-vfin font-bold">0${i + 1}</span>
            <span class="text-[10px] ${explored ? 'text-emerald' : 'text-slate-500'}">${explored ? '✓ LOGGED' : '○ DISCOVER'}</span>
          </div>
          <strong class="text-paper block mt-1 font-display truncate">${s.code.split(' // ')[1]}</strong>
        </button>
      `;
    }).join('');

    tabsGrid.querySelectorAll('[data-sector]').forEach(btn => {
      btn.onclick = () => selectSector(parseInt(btn.dataset.sector));
    });

    const progressEl = document.getElementById('sectorProgressLabel');
    if (progressEl) {
      progressEl.textContent = `${state.exploredSectors.length} / ${UNIVERSE_SECTORS.length} SECTORS LOGGED`;
    }
  }

  function selectSector(idx) {
    activeSectorIndex = idx;
    const s = UNIVERSE_SECTORS[idx];
    sfx.uiChime();

    const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    setTxt('sectorCodeText', s.code);
    setTxt('sectorTitleText', s.title);
    setTxt('sectorDescText', s.desc);

    const isExplored = state.exploredSectors.includes(idx);
    const badge = document.getElementById('sectorStatusBadge');
    if (badge) {
      badge.textContent = isExplored ? '✓ EXPLORED' : 'UNDISCOVERED';
      badge.className = isExplored ? 'text-emerald font-bold' : 'text-vfin';
    }

    const toolsList = document.getElementById('sectorToolsList');
    if (toolsList) {
      toolsList.innerHTML = s.tools.map(t => `
        <span class="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-mono text-xs">
          ${t}
        </span>
      `).join('');
    }

    // Render Quiz
    const qEl = document.getElementById('sectorQuizQuestion');
    const optEl = document.getElementById('sectorQuizOptions');
    const fbEl = document.getElementById('sectorQuizFeedback');

    if (qEl) qEl.textContent = s.question;
    const answered = state.quizCleared.includes(idx);

    if (optEl) {
      optEl.innerHTML = s.options.map((opt, oi) => `
        <button type="button" class="w-full text-left p-3 rounded-xl border border-slate-700 hover:border-psycho bg-slate-950/70 text-slate-200 transition font-mono text-xs ${answered && oi === s.correct ? 'border-emerald bg-emerald/15 text-emerald' : ''}" data-opt="${oi}">
          <span class="text-slate-400 font-bold mr-2">${String.fromCharCode(65 + oi)}.</span> ${opt}
        </button>
      `).join('');

      optEl.querySelectorAll('[data-opt]').forEach(btn => {
        btn.onclick = () => answerQuiz(parseInt(btn.dataset.opt));
      });
    }

    if (fbEl) {
      fbEl.textContent = answered ? s.explanation : 'Answer the sector verification check to earn +50 bonus XP.';
      fbEl.className = answered ? 'p-3 rounded-xl bg-emerald/10 border border-emerald/40 text-emerald text-[11px]' : 'p-3 rounded-xl bg-slate-950/85 border border-slate-400/15 text-slate-400 text-[11px]';
    }

    renderSectorTabs();
  }

  function answerQuiz(optIdx) {
    const s = UNIVERSE_SECTORS[activeSectorIndex];
    const fbEl = document.getElementById('sectorQuizFeedback');

    if (optIdx === s.correct) {
      sfx.tone(660, 'sine', 0.18, 0.07, 1320);
      if (!state.quizCleared.includes(activeSectorIndex)) {
        state.quizCleared.push(activeSectorIndex);
        addXP(50, `Sector ${activeSectorIndex + 1} Quiz Answered`);
      }
      if (fbEl) {
        fbEl.textContent = s.explanation;
        fbEl.className = 'p-3 rounded-xl bg-emerald/15 border border-emerald/50 text-emerald font-semibold text-[11px]';
      }
    } else {
      sfx.warning();
      if (fbEl) {
        fbEl.textContent = 'Incorrect vector. Re-check the architecture principle and try again.';
        fbEl.className = 'p-3 rounded-xl bg-ntd/15 border border-ntd/40 text-ntd text-[11px]';
      }
    }
    selectSector(activeSectorIndex);
  }

  if (exploreBtn) {
    exploreBtn.onclick = () => {
      if (!state.exploredSectors.includes(activeSectorIndex)) {
        state.exploredSectors.push(activeSectorIndex);
        addXP(25, `Sector ${activeSectorIndex + 1} Logged`);
      }
      showToast(`SECTOR // 0${activeSectorIndex + 1} LOGGED IN CAREER RECORD`);
      selectSector(activeSectorIndex);
    };
  }

  if (prevBtn) {
    prevBtn.onclick = () => {
      const next = (activeSectorIndex - 1 + UNIVERSE_SECTORS.length) % UNIVERSE_SECTORS.length;
      selectSector(next);
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      const next = (activeSectorIndex + 1) % UNIVERSE_SECTORS.length;
      selectSector(next);
    };
  }

  selectSector(0);
}

/* -------------------------------------------------------------------------
   10. GLOBAL CYBER TACTICAL TERMINAL (ops-sh)
   ------------------------------------------------------------------------- */
function initGlobalTerminal() {
  const modal = document.getElementById('globalTerminalModal');
  const toggleBtn = document.getElementById('globalTerminalToggleBtn');
  const closeBtn = document.getElementById('closeGlobalTerminalBtn');
  const termForm = document.getElementById('globalTermForm');
  const termInput = document.getElementById('globalTermInput');
  const termOutput = document.getElementById('globalTermOutput');

  if (!modal) return;

  function toggleTerm() {
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      sfx.uiChime();
      if (termInput) termInput.focus();
    } else {
      modal.classList.add('hidden');
      sfx.keyThock();
    }
  }

  if (toggleBtn) toggleBtn.onclick = toggleTerm;
  if (closeBtn) closeBtn.onclick = toggleTerm;

  window.addEventListener('keydown', (e) => {
    if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      toggleTerm();
    }
  });

  function appendOutput(text, color = 'text-slate-300') {
    if (!termOutput) return;
    const d = document.createElement('div');
    d.className = `leading-relaxed ${color}`;
    d.textContent = text;
    termOutput.appendChild(d);
    termOutput.scrollTop = termOutput.scrollHeight;
  }

  if (termForm && termInput) {
    termForm.onsubmit = (e) => {
      e.preventDefault();
      const val = termInput.value.trim();
      if (!val) return;
      termInput.value = '';
      sfx.keyThock();

      appendOutput(`ops-sh❯ ${val}`, 'psycho-text font-bold mt-1');
      const cmd = val.toLowerCase();

      switch (cmd) {
        case 'help':
          appendOutput('COMMANDS: whoami, skills, experience, projects, certs, hr, game, contact, hire, ibo, ost, clear, exit');
          break;
        case 'ibo':
        case 'tekkadan':
          sfx.uiChime();
          appendOutput('🌺 TEKKADAN // IRON-BLOODED ORPHANS SUITE', 'text-vfin font-bold');
          appendOutput("\"Our road never ends. As long as you don't stop, I'll be waiting for you beyond the horizon.\" — Orga Itsuka");
          appendOutput('Mobile Suit: ASW-G-08 Gundam Barbatos · Twin Ahab Reactors · Alaya-Vijnana Synapse');
          break;
        case 'barbatos':
          sfx.beamRifle();
          appendOutput('ASW-G-08 GUNDAM BARBATOS (72 Calamity War Gundam Frames)', 'psycho-text font-bold');
          appendOutput('Reactors: Twin Ahab Reactors · Armor: Nano-Laminate Armor · Armament: Giant Mace');
          break;
        case 'isaribi':
          appendOutput('TEKKADAN ARMORED CRUISER ISARIBI', 'text-skybeam font-bold');
          appendOutput('Upgraded Teiwaz assault cruiser with heavy armored prow and deck kinetic cannons.');
          break;
        case 'ost':
        case 'music':
          const activeOst = sfx.toggleIboTheme();
          const ostStatusEl = document.getElementById('iboThemeStatus');
          if (ostStatusEl) {
            ostStatusEl.textContent = activeOst ? 'ON' : 'OFF';
            ostStatusEl.className = activeOst ? 'text-vfin font-bold' : 'psycho-text';
          }
          appendOutput(activeOst ? '♫ Gundam IBO OST (\"Crescent Moon\") ENGAGED' : '♫ IBO Soundtrack STOPPED', 'text-vfin font-bold');
          break;
        case 'whoami':
          appendOutput(`${profile.firstName} ${profile.lastName} (${profile.callsign})`);
          appendOutput(`Role: ${profile.role}`);
          appendOutput(`Location: ${profile.location}`);
          break;
        case 'skills':
          appendOutput('CORE TECH STACK: AWS, Azure, Kubernetes, Terraform, Ansible, Prometheus, Grafana, Docker, ArgoCD, Linux');
          break;
        case 'experience':
          appendOutput('1. Cloud DevOps Engineer · Infosys (Ricoh) [2023-07 → Present]');
          appendOutput('2. Cloud DevOps Engineer · Infosys (Siemens Energy) [2022-06 → 2023-06]');
          break;
        case 'projects':
          appendOutput('• Azure Landing Zone (Terraform, Hub-Spoke, RBAC, Key Vault)');
          appendOutput('• Disaster Recovery Automation (Lambda, CloudWatch, S3)');
          appendOutput('• Self-Service Portal (Jenkins, Terraform, AWS)');
          appendOutput('• Enterprise Monitoring (Nagios, Bash, Prometheus)');
          break;
        case 'certs':
          appendOutput('★ Oracle Cloud Infrastructure 2025 DevOps Professional');
          appendOutput('★ Red Hat Linux Fundamentals (RH104)');
          appendOutput('★ Infosys Kubernetes Administrator Associate');
          appendOutput('★ Infosys Ansible Automation Associate');
          break;
        case 'hr':
          const hrBtn = document.getElementById('hxRunHr');
          if (hrBtn) hrBtn.click();
          appendOutput('Running HR review audit...');
          break;
        case 'game':
          location.hash = '#funnelGame';
          appendOutput('Navigating to Orbital Sortie Arcade Game...');
          break;
        case 'contact':
          location.hash = '#hxContact';
          appendOutput(`Email: ${profile.email} · LinkedIn: ${profile.linkedin}`);
          break;
        case 'hire':
        case 'sudo hire':
        case 'sudo hire hemant':
          sfx.levelUp();
          appendOutput('✓ CANDIDATE ACCEPTED: Hemant Bhadke is open for Cloud, DevOps & Platform Engineering roles! Transmission ready at hemantrbhadke@gmail.com.', 'text-emerald font-bold');
          addXP(100, 'Easter Egg: Sudo Hire Executed');
          break;
        case 'clear':
          if (termOutput) termOutput.innerHTML = '';
          break;
        case 'exit':
          toggleTerm();
          break;
        default:
          appendOutput(`Command not recognized: '${val}'. Type 'help' for available commands.`, 'text-slate-400');
          break;
      }
    };
  }
}

/* -------------------------------------------------------------------------
   11. BACKEND API SYNC, DOSSIER & RECRUITER AUDIT
   ------------------------------------------------------------------------- */
const hxId = i => document.getElementById(i);
const hxEsc = s => String(s).replace(/[&<>"']/g, c => '&#' + c.charCodeAt(0) + ';');
const hxUuid = () => (crypto.randomUUID ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); }));
const HX_BASE = (document.querySelector('meta[name="ops-api"]') || {}).content || '';

function getLocalLeaderboard() {
  const visitors = [
    { handle: state.flags.handle || 'PILOT-HB', xp: Math.max(state.xp || 450, 1250), updated: Date.now() },
    { handle: 'AMURO-RAY', xp: 2450, updated: Date.now() - 3600000 },
    { handle: 'BANAGHER-LINKS', xp: 1980, updated: Date.now() - 7200000 },
    { handle: 'EFSF-ADMIRAL', xp: 1420, updated: Date.now() - 14400000 },
    { handle: 'K8S-OPERATOR', xp: 950, updated: Date.now() - 28800000 },
    { handle: 'SRE-SENTINEL', xp: 720, updated: Date.now() - 43200000 }
  ];
  visitors.sort((a, b) => b.xp - a.xp);
  return visitors;
}

const hxApi = (p, o = {}) => {
  if (window.location.protocol === 'file:') {
    if (p === '/profile') return Promise.resolve(DEFAULT_CONTENT);
    if (p === '/hr-review') return Promise.resolve(DEFAULT_HR_REVIEW);
    if (p.startsWith('/state/')) return Promise.resolve({ ok: true, state });
    if (p === '/leaderboard') return Promise.resolve(getLocalLeaderboard());
    return Promise.resolve({ ok: true });
  }

  return fetch(HX_BASE + '/api' + p, { ...o, headers: { 'content-type': 'application/json', ...(o.headers || {}) } })
    .then(r => r.ok ? r.json() : Promise.reject(r))
    .catch(e => {
      if ((!o.method || o.method === 'GET') && /^\/(profile|hr-review)$/.test(p)) {
        return fetch('data' + p + '.json')
          .then(r => r.ok ? r.json() : Promise.reject(e))
          .catch(() => p === '/profile' ? DEFAULT_CONTENT : DEFAULT_HR_REVIEW);
      }
      if (p.startsWith('/state/') && (!o.method || o.method === 'GET')) {
        return Promise.resolve({ ok: true, state });
      }
      if (p === '/leaderboard') {
        return Promise.resolve(getLocalLeaderboard());
      }
      if (p === '/contact' && o.method === 'POST') {
        return Promise.reject(e);
      }
      return Promise.reject(e);
    });
};

const hxPid = (() => { try { let i = localStorage.getItem('opsPid'); if (!i) { i = hxUuid(); localStorage.setItem('opsPid', i); } return i; } catch (e) { return hxUuid(); } })();
let hxTimer;
const hxPush = () => { clearTimeout(hxTimer); hxTimer = setTimeout(() => hxApi('/state/' + hxPid, { method: 'PUT', body: JSON.stringify(state) }).then(hxBoard).catch(() => {}), 800); };
const hxSave = saveState;
saveState = () => { hxSave(); hxPush(); };

/* Medals */
const hxMedals = [
  ['boot', 'Boot Sequence', 'Opened the portfolio'],
  ['xp600', 'Field Ready', 'Reach 600 XP'],
  ['xp1500', 'Architect', 'Reach 1,500 XP'],
  ['recruiter', 'Recruiter Brief', 'Used recruiter mode'],
  ['ntd', 'NT-D Awakened', 'Engaged NT-D mode'],
  ['hr', 'Audit Passed', 'Ran the HR audit'],
  ['signal', 'Signal Sent', 'Sent a message'],
  ['handle', 'Callsign Claimed', 'Joined the leaderboard']
];

function hxUnlock(id) {
  if (!state.unlockedMedals.includes(id)) {
    state.unlockedMedals.push(id);
    const m = hxMedals.find(x => x[0] === id);
    showToast(`MEDAL // ${m ? m[1] : id}`);
  }
}

function checkMedals() {
  if (state.xp >= 600) hxUnlock('xp600');
  if (state.xp >= 1500) hxUnlock('xp1500');
  if (state.recruiterMode) hxUnlock('recruiter');
  if (state.ntdMode) hxUnlock('ntd');
  if (state.flags.handle) hxUnlock('handle');
}

function renderCareerVault() {
  const cur = [...CAREER_RANKS].reverse().find(r => state.xp >= r.min);
  const ranksGrid = hxId('careerRanksGrid');
  if (ranksGrid) {
    ranksGrid.innerHTML = CAREER_RANKS.map(r => `
      <div class="rounded-xl border p-3 ${state.xp >= r.min ? 'border-psycho/50 bg-psycho/10 text-paper' : 'border-slate-700 text-slate-500'} ${r === cur ? 'ring-1 ring-skybeam' : ''}">
        <div class="text-lg">${r.crest}</div>
        <div class="font-semibold">${r.title}</div>
        <div class="text-[10px] opacity-70">${r.min} XP</div>
      </div>
    `).join('');
  }

  const medalsGrid = hxId('medalsGrid');
  if (medalsGrid) {
    medalsGrid.innerHTML = hxMedals.map(([id, t, d]) => {
      const on = state.unlockedMedals.includes(id);
      return `
        <div class="rounded-xl border p-3 font-mono text-xs ${on ? 'border-vfin/50 bg-vfin/10' : 'border-slate-700 opacity-50'}">
          <div class="text-base">${on ? '★' : '☆'}</div>
          <div class="font-semibold">${t}</div>
          <div class="text-[10px] text-slate-400">${d}</div>
        </div>
      `;
    }).join('');
  }

  const countBadge = hxId('medalCountBadge');
  if (countBadge) countBadge.textContent = `${state.unlockedMedals.length} / ${hxMedals.length} UNLOCKED`;
}

function hxModes() {
  document.body.classList.toggle('recruiter-mode', !!state.recruiterMode);
  document.body.classList.toggle('ntd-active', !!state.ntdMode);
  const rLabel = hxId('recruiterModeLabel'); if (rLabel) rLabel.textContent = state.recruiterMode ? 'RECRUITER ON' : 'RECRUITER BRIEF';
  const nText = hxId('topNtdText'); if (nText) nText.textContent = state.ntdMode ? 'NT-D ON' : 'NT-D';
}

function hxBoard() {
  hxApi('/leaderboard').then(rows => {
    const b = hxId('hxBoard');
    if (b) {
      b.innerHTML = rows.length
        ? rows.map((r, i) => {
            const rk = [...CAREER_RANKS].reverse().find(k => r.xp >= k.min) || CAREER_RANKS[0];
            return `<li class="flex justify-between gap-3"><span>${i + 1}. ${hxEsc(r.handle)}</span><span class="text-slate-400">${rk.crest} ${r.xp.toLocaleString()} XP</span></li>`;
          }).join('')
        : '<li class="text-slate-500">No operators yet — claim a callsign.</li>';
    }
  }).catch(() => {});
}

async function hxRunHR() {
  const out = hxId('hxHrOut');
  if (!out) return;
  out.innerHTML = '<p class="text-slate-400">Auditing profile…</p>';
  try {
    const r = await hxApi('/hr-review');
    const bar = s => `
      <div class="mb-2">
        <div class="flex justify-between text-xs font-mono"><span>${hxEsc(s.name)}</span><span>${s.score}/${s.max}</span></div>
        <div class="h-1.5 rounded bg-slate-800 mt-1"><div class="h-1.5 rounded bg-psycho" style="width:${(s.score / s.max) * 100}%"></div></div>
      </div>
    `;
    const ul = (t, a, c) => a.length ? `<h4 class="mt-4 mb-1 font-semibold ${c}">${t}</h4><ul class="space-y-1 text-slate-300 list-disc pl-4 text-xs font-mono">${a.map(x => `<li>${hxEsc(x)}</li>`).join('')}</ul>` : '';

    out.innerHTML = `
      <div class="flex items-end gap-3 mb-3">
        <span class="font-display text-5xl font-bold psycho-text">${r.score}</span>
        <span class="text-slate-400 pb-1 font-mono text-xs">/ 100 · ${hxEsc(r.verdict)}</span>
      </div>
      ${r.sections.map(bar).join('')}
      ${ul('STRENGTHS', r.strengths, 'text-emerald')}
      ${ul('GAPS', r.gaps, 'text-ntd')}
      ${ul('FIX NEXT', r.actions, 'text-vfin')}
      ${ul('LIKELY INTERVIEW QUESTIONS', r.questions, 'text-skybeam')}
    `;
    if (!state.flags.hr) {
      state.flags.hr = 1;
      hxUnlock('hr');
      addXP(100, 'HR audit complete');
    }
  } catch (e) {
    out.textContent = 'Backend offline — start the server (see README).';
  }
}

function hxRecord(d) {
  const li = a => (a || []).map(b => `<li>${hxEsc(b)}</li>`).join('');
  const exp = hxId('hxExp');
  if (exp && d.experience) {
    exp.innerHTML = d.experience.map(e => `
      <div class="p-4 rounded-2xl bg-slate-950/70 border border-slate-700">
        <div class="flex flex-wrap justify-between gap-2">
          <span class="font-semibold text-paper text-sm">${hxEsc(e.role)} · ${hxEsc(e.org)}</span>
          <span class="text-skybeam text-xs font-mono">${hxEsc(e.period)}</span>
        </div>
        <ul class="mt-2.5 space-y-1.5 text-slate-300 list-disc pl-4 text-xs font-mono">${li(e.bullets)}</ul>
      </div>
    `).join('');
  }

  const certs = hxId('hxCerts');
  if (certs && d.certs) {
    certs.innerHTML = d.certs.map(c => `
      <div class="rounded-xl border border-vfin/40 bg-vfin/10 p-3.5 font-mono text-xs">
        <div class="text-vfin font-bold">★ ${hxEsc(c.issuer)}</div>
        <div class="font-semibold text-paper mt-0.5">${hxEsc(c.name)}</div>
        <div class="text-[10px] text-slate-400 mt-1">${hxEsc(c.issued)}</div>
      </div>
    `).join('');
  }

  const proj = hxId('hxProj');
  if (proj && d.projects) {
    proj.innerHTML = d.projects.map(p => `
      <div class="rounded-xl border border-slate-700 bg-slate-950/70 p-3.5 font-mono text-xs space-y-2">
        <div class="font-semibold text-paper text-sm">
          ${/^https?:\/\//.test(p.url || '') ? `<a href="${hxEsc(p.url)}" target="_blank" rel="noopener" class="underline hover:text-psycho">${hxEsc(p.name)} ↗</a>` : hxEsc(p.name)}
        </div>
        <p class="text-slate-300 text-xs">${hxEsc(p.desc)}</p>
        <div class="flex flex-wrap gap-1.5">
          ${(p.tags || []).map(t => `<span class="px-2 py-0.5 rounded-full border border-psycho/35 text-psycho text-[10px]">${hxEsc(t)}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
}

function hxWire() {
  const tog = k => {
    state[k] = !state[k];
    hxModes();
    if (k === 'ntdMode' && state.ntdMode) sfx.ntdAwaken();
    if (k === 'recruiterMode') sfx.uiChime();
    if (!state.flags[k]) {
      state.flags[k] = 1;
      addXP(25, k === 'ntdMode' ? 'NT-D engaged' : 'Recruiter brief');
    } else {
      checkMedals();
      saveState();
      renderCareerVault();
    }
  };

  const recBtn = hxId('recruiterModeBtn'); if (recBtn) recBtn.onclick = () => tog('recruiterMode');
  const ntdBtn = hxId('topNtdBtn'); if (ntdBtn) ntdBtn.onclick = () => tog('ntdMode');
  ['printDossierBtn', 'recruiterPrintBtn'].forEach(i => hxId(i) && (hxId(i).onclick = () => window.print()));

  const fid = k => 'input' + k[0].toUpperCase() + k.slice(1);
  const openDossier = hxId('openDossierBtn');
  if (openDossier) {
    openDossier.onclick = () => {
      for (const k of Object.keys(DEFAULT_PROFILE)) {
        const el = hxId(fid(k));
        if (el) el.value = profile[k] || '';
      }
      hxId('dossierModal').showModal();
    };
  }

  ['closeDossierModalBtn', 'cancelDossierBtn'].forEach(i => {
    const el = hxId(i);
    if (el) el.onclick = () => hxId('dossierModal').close();
  });

  const dossierForm = hxId('dossierForm');
  if (dossierForm) {
    dossierForm.onsubmit = async e => {
      e.preventDefault();
      const next = {};
      for (const k of Object.keys(DEFAULT_PROFILE)) {
        const el = hxId(fid(k));
        if (el) next[k] = el.value.trim();
      }
      const tok = sessionStorage.getItem('opsAdmin') || prompt('Owner admin token:');
      if (!tok) return;
      try {
        const r = await hxApi('/profile', { method: 'PUT', headers: { 'x-admin-token': tok }, body: JSON.stringify(next) });
        sessionStorage.setItem('opsAdmin', tok);
        profile = { ...DEFAULT_PROFILE, ...r.profile };
        renderProfileUI();
        hxId('dossierModal').close();
        showToast('DOSSIER // saved to database');
      } catch (err) {
        sessionStorage.removeItem('opsAdmin');
        showToast(err.status === 401 ? 'Owner token required — profile is read-only' : 'Save failed — check the fields');
      }
    };
  }

  const askReset = hxId('askResetProgressBtn'); if (askReset) askReset.onclick = () => hxId('resetConfirmBar').classList.remove('hidden');
  const cancelReset = hxId('confirmResetNo'); if (cancelReset) cancelReset.onclick = () => hxId('resetConfirmBar').classList.add('hidden');
  const confirmReset = hxId('confirmResetYes');
  if (confirmReset) {
    confirmReset.onclick = () => {
      state = structuredClone(DEFAULT_GAME);
      saveState();
      hxModes();
      renderHUD();
      renderCareerVault();
      hxId('resetConfirmBar').classList.add('hidden');
      showToast('PROGRESS // RESET TO DEFAULT');
    };
  }

  const runHr = hxId('hxRunHr'); if (runHr) runHr.onclick = hxRunHR;

  const contact = hxId('hxContact');
  if (contact) {
    contact.onsubmit = async e => {
      e.preventDefault();
      const msg = hxId('hxContactMsg');
      try {
        await hxApi('/contact', { method: 'POST', body: JSON.stringify(Object.fromEntries(new FormData(e.target))) });
        e.target.reset();
        msg.textContent = 'Transmission received ✔';
        sfx.uiChime();
        if (!state.flags.signal) {
          state.flags.signal = 1;
          hxUnlock('signal');
          addXP(75, 'Signal sent');
        }
      } catch (err) {
        if (!err.status || err.status === 404 || err.status === 405) {
          const f = e.target.elements;
          msg.textContent = 'Backend offline — opening your email app…';
          location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Hello from your portfolio')}&body=${encodeURIComponent(f.body.value + '\n\n— ' + f.name.value)}`;
        } else {
          msg.textContent = err.status === 429 ? 'Too many messages — try later.' : 'Check name, email and a 10+ char message.';
        }
      }
    };
  }

  const handleForm = hxId('hxHandleForm');
  if (handleForm) {
    handleForm.onsubmit = e => {
      e.preventDefault();
      const h = hxId('hxHandle').value.trim().replace(/[^\w .-]/g, '').slice(0, 16);
      if (!h) return;
      const first = !state.flags.handle;
      state.flags.handle = h;
      if (first) {
        addXP(50, 'Callsign claimed');
        hxUnlock('handle');
      } else {
        saveState();
      }
      showToast(`CALLSIGN // ${h.toUpperCase()} JOINED THE BOARD`);
    };
  }

  const io = new IntersectionObserver(es => {
    es.forEach(en => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      const k = 'seen_' + en.target.id;
      if (!state.flags[k]) {
        state.flags[k] = 1;
        addXP(25, `Sector ${en.target.id.toUpperCase()} scanned`);
      }
    });
  }, { threshold: 0.35 });

  ['dossier', 'armory', 'funnelGame', 'bridgeSim', 'clusterLab', 'universeMap', 'record', 'hrDesk'].forEach(i => {
    const el = hxId(i);
    if (el) io.observe(el);
  });
}

/* -------------------------------------------------------------------------
   12. MASTER BOOT SEQUENCE
   ------------------------------------------------------------------------- */
(async function boot() {
  loadState();
  state = structuredClone(state);

  // 1. Immediately render fallback / default content synchronously
  //    Guarantees that Experience, Certs, Projects, Skills, HUD, and Vault render immediately
  profile = { ...DEFAULT_PROFILE, ...(profile || {}) };
  hxRecord(DEFAULT_CONTENT);
  renderProfileUI();
  hxModes();
  renderHUD();
  renderCareerVault();
  hxBoard();
  initGundamWorkbench();
  initArmory();
  initFunnelGame();
  initBridgeSim();
  initClusterLab();
  initUniverseMap();
  initGlobalTerminal();
  hxWire();

  // Unlock audio context on first user click or keypress
  window.addEventListener('pointerdown', () => sfx && sfx.init(), { once: true });
  window.addEventListener('keydown', () => sfx && sfx.init(), { once: true });

  // 2. Asynchronously fetch live backend state and profile updates if available
  try {
    const r = await hxApi('/state/' + hxPid);
    if (r && r.state && r.state.xp > state.xp) {
      localStorage.setItem(STORAGE_KEY_GAME, JSON.stringify(r.state));
      loadState();
      renderHUD();
      renderCareerVault();
    }
  } catch (e) {}

  try {
    const r = await hxApi('/profile');
    if (r && r.profile) {
      profile = { ...DEFAULT_PROFILE, ...r.profile };
      renderProfileUI();
    }
    if (r) {
      hxRecord(r);
    }
  } catch (e) {}
})();
