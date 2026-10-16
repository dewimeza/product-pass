# Day 1 – Setup note (Thursday, Oct 15, 2026)

**Goal:** get ProductPass running from my own fork, without changing it yet.

## Links
- Original project: https://github.com/chilu18/product-pass
- My fork: https://github.com/dewimeza/product-pass

## What I did
1. **Forked** the original repository to my GitHub account (`dewimeza`). Changes I make in my fork do not affect the original.
2. **Cloned** the fork (downloaded it) into a working folder. I worked with Claude Code, which ran the commands and explained each one to me.
3. Checked the tools: Node.js v22, npm v10, Git v2.43.
4. Ran `npm install`. npm read `package.json` (the shopping list) and downloaded all the pieces the project needs into `node_modules` (the groceries). That folder is not uploaded to GitHub (it is listed in `.gitignore`); anyone can recreate it with `npm install`.
5. Ran `npm run dev`. The app started in about 8 seconds and answered at `http://localhost:3023` (`GET / 200`, meaning "OK").

> **Where it ran:** this first run was in Claude Code's cloud workspace, not on my own computer. Running it locally on my laptop is still a pending step.

## The screens I explored
| Screen | Address | Who uses it | What it does |
|---|---|---|---|
| Home | `/` | Everyone | Presents ProductPass and links to the demo |
| Dashboard | `/dashboard` | The brand | Counts of passports, missing evidence, readiness score |
| Products | `/products` | The brand | List of products |
| Evidence Vault | `/evidence` | The brand | Supplier documents |
| Create passport | `/products/new` | The brand | 6-step form (Copilot, Identity, Materials, Claims, Lifecycle, Certs) |
| Public passport | `/passport/heysalad-reusable-tote-bag` | The customer | What a person sees after scanning the QR code |

Screenshots: `docs/img/dia-1-home.png`, `docs/img/dia-1-dashboard.png`, `docs/img/dia-1-create-passport.png`.

## Things I noticed
- The readiness score is an internal indicator, **not** a legal certification.
- The passport records materials, origin and claims, but it does not tell the person holding the product what to do with it next (keep it, repair it, donate it). That is the gap my project, Circularity Next Step, will address.
- `npm install` reported 20 vulnerabilities in third-party packages. I did not run `npm audit fix --force` because it can break the app; for this one-week prototype I am noting it as a limitation.
- A font (Geist) could not be downloaded in the workspace, so a fallback font was used. It does not affect how the app works.
