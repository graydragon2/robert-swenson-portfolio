# Robert F. Swenson III | Engineering Portfolio

Systems • Automation • AI • Networking • Security

I build systems that solve problems I actually have. This repository is the source code for my personal engineering portfolio — a Next.js site presenting the infrastructure, automation, security, and AI systems I've designed, built, and operate.

**Live Portfolio:** https://portfolio.swensondigital.com

## About This Portfolio

This repository contains the source for my engineering/systems portfolio. It focuses on systems I have actually designed, built, integrated, operated, or continue to develop — not tutorial projects or resume filler. Each featured system on the live site is presented as a case study: the problem, the requirements, how it was built, what it currently does, and what's next.

My background combines more than 20 years of industrial operations experience with hands-on systems engineering — Linux infrastructure, networking, automation, monitoring, security, local AI, and software development. The portfolio documents a transition from industrial process operations into broader IT infrastructure, networking, systems administration, automation, and security work.

## Featured Systems

### Graydragon Personal Intelligence System

A local-first personal operating system and AI-assisted "second brain" for managing attention, memory, waiting-on items, and daily context. It pulls real context from Gmail and Calendar, runs local LLM inference (llama.cpp + CUDA, Qwen3-8B) behind an OpenAI-compatible API with a provider-abstraction layer, and runs daily processing as restart-safe Linux systemd services with its own health dashboard.

Graydragon is under active development. The interface shown on the site is concept art representing the system's direction, not a production screenshot — this is called out directly on the live case study. Its production source is private.

### Context-Aware Home Security Platform

A self-hosted, Reolink-based security platform designed to understand context rather than fire on raw motion. It correlates camera detections with zones, presence (including Wi-Fi/MAC-based detection), configurable security modes (HOME/AWAY/NIGHT/GUEST/VACATION), and trusted people/vehicle lists, then routes candidate events through an AI verification step before escalating them as incidents with a real OPEN → QUIET → RESOLVED lifecycle.

Public repository: https://github.com/graydragon2/context-aware-home-security

### Home Network Command Center

A centralized dashboard for home network and distributed infrastructure — node health, service health, network status, and remote-node visibility in one place. It sits on top of Prometheus/Grafana, Pi-hole, Portainer, and a WireGuard mesh so a Raspberry Pi elsewhere on the network can report telemetry back without being publicly exposed.

Public repository: https://github.com/graydragon2/home-network-command-center-public

### Homelab & Multi-Node Infrastructure

The physical and virtual foundation the other projects run on: a distributed Linux homelab across four nodes — a security/monitoring/automation host (Wazuh, Suricata, Prometheus, Grafana, Portainer, Uptime Kuma, Pi-hole, Docker, KVM), a dedicated local-AI inference node, a Raspberry Pi WireGuard/monitoring core, and a remote Raspberry Pi telemetry client — all connected through WireGuard.

This is the operational backbone described on the portfolio rather than a single deployable application, and is not represented by a standalone public repository.

### Local AI Infrastructure

The self-hosted inference layer other projects (including Graydragon) build on: llama.cpp with CUDA acceleration serving a Qwen3-8B model at Q3_K_L quantization on an NVIDIA GTX 1080 (8GB), exposed behind an OpenAI-compatible API so downstream tooling doesn't need to know whether inference is local or hosted.

Not represented by a standalone public repository.

### Mortgage Intelligence

Automated mortgage-rate monitoring and refinance decision-support tooling — scheduled rate collection, evaluation against defined refinance thresholds, and a dashboard that turns a manual, easy-to-forget check into ongoing monitoring. Represented on the portfolio as one system; publicly, it's split across a web application and a monitoring agent.

Public repositories:
- https://github.com/graydragon2/mortgage-intelligence-web-public
- https://github.com/graydragon2/mortgage-intelligence-agent-public

## Additional Public Work

**Contingency Brief** (repository name: CrisisWatch) is an AI-assisted crisis intelligence and situational-awareness platform — global/local threat monitoring, watched locations, phishing risk, and breach exposure alerts. It is not currently represented as a case study on the live portfolio, but the source is public:

- Frontend: https://github.com/graydragon2/crisiswatch-frontend
- API: https://github.com/graydragon2/crisiswatch-api

## Portfolio Architecture

This site itself is built with:

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** for styling
- Content-as-data: pages are driven by typed data modules (`src/data/projects.ts`, `site.ts`, `infrastructure.ts`, `resume.ts`) rather than hardcoded markup, so case studies, infrastructure nodes, and resume content share one source of truth
- Shared presentational components (`ScreenshotFrame`, `ProjectShowcase`, `ArchitectureDiagram`, `TopologyDiagram`, etc.) rather than one-off page layouts
- Static assets under `public/portfolio/` (backgrounds, brand, diagrams, icons, project screenshots)
- Google Fonts via `next/font` (Space Grotesk, Inter, IBM Plex Mono) — no external font CDN
- ESLint 9 / `eslint-config-next` for linting

```
src/data/*.ts  (projects, site, infrastructure, resume)
      │
      ▼
src/app/**/page.tsx  (routes: /, /about, /contact, /infrastructure, /projects, /projects/[slug], /resume)
      │
      ▼
src/components/*  (ScreenshotFrame, ProjectShowcase, ArchitectureDiagram, ...)
      │
      ▼
public/portfolio/*  (screenshots, diagrams, backgrounds, icons)
```

The codebase also carries an explicit Cloudflare Workers constraint: social share images are pre-baked static PNGs rather than generated at request time via `next/og`, because — per the comment in `src/data/site.ts` — Cloudflare Workers can't reliably render `ImageResponse` routes within production resource limits.

## Design Direction

The visual direction is intentional, not decorative:

- A dark, cinematic engineering aesthetic with restrained technical-green accents, rather than a generic SaaS-template look
- Real application screenshots for systems that have one (Home Security, Network Command Center) — letterboxed with `object-fit: contain` so no interface content is cropped
- Concept artwork used only where a real screenshot doesn't yet exist, and explicitly labeled as such (Graydragon) rather than presented as a finished product
- Technical architecture diagrams used for infrastructure-level projects (Homelab, Local AI, Mortgage Intelligence) instead of forcing a screenshot where the real "product" is a system topology
- Mobile-first responsive layout, verified across common breakpoints

## Engineering Focus

What the portfolio demonstrates technically:

- **Linux systems & self-hosting** — systemd services, Docker, KVM, running production workloads on owned hardware rather than managed platforms
- **Networking** — WireGuard mesh connectivity, DNS-level filtering, topology design across multiple physical and virtual nodes
- **Monitoring & observability** — Prometheus/Grafana, Uptime Kuma, exporter-based health reporting
- **Security** — Wazuh/Suricata, presence-aware access logic, incident lifecycle design, AI-assisted verification to reduce false positives
- **Local AI infrastructure** — GPU-constrained local inference (llama.cpp/CUDA) behind an OpenAI-compatible API, with a provider-abstraction layer for local/hosted interchangeability
- **Automation** — scheduled data collection and evaluation (mortgage monitoring), automated daily intelligence processing (Graydragon)
- **Software/web development** — this portfolio itself, plus the public applications listed above

## Public Project Repositories

| Project | Repository |
|---|---|
| Context-Aware Home Security | https://github.com/graydragon2/context-aware-home-security |
| Home Network Command Center | https://github.com/graydragon2/home-network-command-center-public |
| Mortgage Intelligence Web | https://github.com/graydragon2/mortgage-intelligence-web-public |
| Mortgage Intelligence Agent | https://github.com/graydragon2/mortgage-intelligence-agent-public |
| Contingency Brief Frontend | https://github.com/graydragon2/crisiswatch-frontend |
| Contingency Brief API | https://github.com/graydragon2/crisiswatch-api |

Graydragon, Homelab, and Local AI Infrastructure are not linked here — Graydragon's production repository is private, and Homelab/Local AI are described as infrastructure rather than standalone deployable repositories.

## Running Locally

```bash
git clone https://github.com/graydragon2/robert-swenson-portfolio.git
cd robert-swenson-portfolio
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`. Other scripts: `npm run build` (production build), `npm run start` (serve the production build), `npm run lint` (ESLint).

## Project Status

This portfolio is actively maintained as my technical work evolves — new case studies, updated screenshots, and copy revisions land here as the underlying systems change. It isn't a template; it's the source for a specific, real site.

Not every system shown here is open source. Several of the systems above run with private infrastructure, credentials, and configuration that can't be published as-is, so the public repositories linked above are sanitized versions of operational systems rather than 1:1 mirrors of what's actually running in production.

## Contact

- Portfolio: https://portfolio.swensondigital.com
- GitHub: https://github.com/graydragon2
- LinkedIn: https://www.linkedin.com/in/robert-swenson-733290104
