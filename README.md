# Xinyue (Leslie) Xu — Personal Academic Website

Personal academic website for Xinyue (Leslie) Xu, Ph.D. candidate in Architectural Engineering at Penn State.
Built with plain HTML / CSS / JavaScript — no frameworks, no build tools, no dependencies.

**Live site:** https://lesliexxy.github.io/xinyue.github.io/

---

## Project Structure

```
personal-website/
├── index.html                   # Homepage: hero, about, news, publications, projects, education, skills
├── publications.html            # Full publications list with year groups and tag filters
├── projects/
│   ├── index.html               # Projects gallery — themed groups, sorted by year
│   ├── pgbnn.html               # Detail: Physics-Guided Bayesian Neural Networks (Forecasting 2025)
│   ├── model-selection.html     # Detail: Information-Theoretic & Bayesian Model Selection (Info. Sciences 2026)
│   ├── uq-bem.html              # Detail: UQ in ML-Based Building Energy Models (RSER 2025)
│   ├── retrofit-agent.html      # Detail: Multi-Agent Retrofit Decision Framework
│   ├── retrofit-diagnostics.html# Detail: Equitable Retrofit Diagnostics
│   ├── floorplan-cv.html        # Detail: Computer Vision Floor Plan Analysis
│   ├── leettrack.html           # Detail: LeetTrack spaced repetition tool
│   └── template.html            # Blank template — copy for new project detail pages
├── assets/
│   ├── cv.pdf                   # CV file (replace with updated version)
│   └── images/
│       ├── profile.jpg          # Profile photo (400×500 px recommended)
│       └── proj-*.png           # Project cover images (uncomment in HTML when ready)
├── css/
│   └── style.css                # All styles — single file, fully commented, 19 sections
└── js/
    └── main.js                  # Nav scroll, mobile menu, filters, news toggle, abstract toggles
```

---

## Pages

### Homepage (`index.html`)
- **Hero** — name, title, affiliation, bio, social links (GitHub, LinkedIn, Google Scholar, LeetCode, email)
- **About** — research background + research interest tags
- **News** — 9 items; first 3 visible, rest hidden behind "Show more" toggle
- **Selected Publications** — 3 featured papers with real abstracts from PDFs
- **Projects** — 4 featured project cards linking to detail pages
- **Education** — PhD (Penn State), MS CS (ASU), BS (Tongji University)
- **Awards** — 7 honors and fellowships
- **Skills** — 6 groups: ML & AI, Programming Languages, Data & Infrastructure, Building Simulation, Probabilistic Methods, Web & Dev Tools

### Publications (`publications.html`)
Full list organized by year group with tag filters (All / Journal / Conference / Under Review / ML·AI / Energy / Bayesian·UQ).

| Group | Contents |
|---|---|
| Under Review | M1 — residential energy equity paper |
| Accepted | C1 ResStock-LLM · C2 Floor Plan CV |
| 2026 | J1 Information Sciences |
| 2025 | J2 RSER · J3 Forecasting |
| 2024 | J4 J. Building Engineering · J5 Energy and Buildings · C3 IMAC · C4 ASME VVUQ |
| 2023 | J6 ASME JVVUQ · C5 SEM · C6 SEM · C7 SEM |
| 2019 & Earlier | C8 IOP · C9 IOP |

### Projects Gallery (`projects/index.html`)
10 projects across 5 themed groups, sorted newest-first within each group:

| Theme | Projects |
|---|---|
| Bayesian Inference & UQ | Model Selection (2026) · PG-BNNs (2025) · UQ Systematic Review (2025) |
| Causal Discovery & Scientific ML | Causal Discovery in Building Energy (2026, ongoing) |
| Building Retrofit & Equity | Multi-Factor Retrofit Toolkit (2025) · Multi-Agent Retrofit (2025) · Equitable Diagnostics (2024) · Building Parameter Enrichment (2024) |
| AI & Computer Vision | Floor Plan CV Analysis (2025) |
| Open-Source Tools | LeetTrack |

---

## How to Update Content

### Replace the profile photo
Copy your photo to `assets/images/profile.jpg`. The `<img>` tag has an `onerror` fallback — a placeholder icon shows automatically if the file is missing.

### Update the bio or research interests
Open `index.html`, find the `#about` section, and edit the `<p>` paragraphs and `.tag` spans.

### Add a news item
In `index.html`, find `#news` and prepend a `.news-item` block before the first existing item:
```html
<div class="news-item">
  <span class="news-item__date">May 2026</span>
  <p class="news-item__text">
    <strong>Paper accepted.</strong> "Title" accepted at <em>Venue</em>.
  </p>
</div>
```
Items are automatically hidden after the third one until "Show more" is clicked.

### Add a publication
In `publications.html`, copy an existing `<article class="pub-item">` block into the correct year group and fill in:
- `data-tags` — space-separated filter tokens: `journal`, `conference`, `preprint`, `ml`, `energy`, `bayesian`
- Title, authors (`<span class="me">` wraps your name), venue, DOI link
- Abstract text inside `.pub-item__abstract`

### Add a project to the gallery
In `projects/index.html`, copy an existing `.project-row` block into the right theme group (sorted by year) and update:
- `data-tags` — used by the filter bar: `bayesian`, `ml`, `energy`, `retrofit`, `tool`
- Image placeholder SVG or `<img>` tag
- Title, badge tags, description, links

### Create a new project detail page
1. Copy `projects/template.html` → `projects/your-project.html`
2. Fill in each section: Overview, Methodology, Key Findings, Technical Stack, Impact, BibTeX
3. Drop a cover image at `assets/images/proj-yourproject.png` and uncomment the `<img>` line
4. Update the `.project-row` in `projects/index.html` to link the image and title to `your-project.html`
5. Link from the homepage featured projects in `index.html` if desired

### Activate a project cover image
Each project row has a commented-out `<img>` line:
```html
<!-- <img src="../assets/images/proj-pgbnn.png" alt="PG-BNN diagram"> -->
```
Drop the image into `assets/images/`, uncomment that line, and remove the `<div class="project-row__img-placeholder">` above it.

---

## Deploy to GitHub Pages

### First-time setup
```bash
cd personal-website
git init
git remote add origin https://github.com/lesliexxy/xinyue.github.io.git
git branch -M main
git add .
git commit -m "Initial deploy"
git push origin main --force
```
Then go to **GitHub → Settings → Pages → Source: Deploy from branch → main / root → Save**.
The site goes live at **https://lesliexxy.github.io/xinyue.github.io/** within ~2 minutes.

### Subsequent updates
```bash
git add personal-website/
git commit -m "Brief description of change"
git push origin main
```

### Why `.nojekyll`?
The repo root contains a `.nojekyll` file. This tells GitHub Pages to serve files as-is rather than running Jekyll, which would otherwise ignore files and folders that start with an underscore.

---

## Design System

| CSS Variable | Value | Usage |
|---|---|---|
| `--bg` | `#F9F8F6` | Warm off-white page background |
| `--bg-white` | `#FFFFFF` | Card and hero backgrounds |
| `--bg-subtle` | `#F2F0EC` | Placeholder fills, code blocks |
| `--accent` | `#1E3A5F` | Deep navy — links, labels, active states |
| `--ink` | `#1A1A1A` | Primary body text |
| `--ink-2` | `#545454` | Secondary text, captions |
| `--ink-3` | `#9A9896` | Tertiary text, placeholders |
| `--rule` | `#E3DFD8` | Hairline borders, dividers |
| `--serif` | Cormorant Garamond | Display headings (h1, h2) |
| `--sans` | Inter | Body text, UI, nav |
| `--mono` | JetBrains Mono | Dates, BibTeX blocks, code |

All three fonts are loaded from Google Fonts. The site is fully functional without them (system serif/sans fallbacks are defined).

---

## JavaScript Behaviors (`js/main.js`)

| Function | Trigger | Behavior |
|---|---|---|
| Nav shadow | scroll > 20px | adds `.scrolled` class to `<nav>` |
| Mobile menu | burger button click | toggles `.open` on `.nav__mobile` |
| Active nav link | IntersectionObserver on `section[id]` | highlights current section link |
| News toggle | `#news-toggle` click | shows/hides `.news-more` items |
| Abstract toggle | `.pub-item__toggle` click | expands/collapses `.pub-item__abstract` |
| Publication filter | `.pub-filter-btn` click | shows/hides `.pub-item` by `data-tags` |
| Project filter | `[data-proj-filter]` click | shows/hides `.project-row` by `data-tags` |
| Entrance animations | IntersectionObserver | adds `.animate-fade-up` on scroll-in |

---

## Contact & Social Links

| Platform | URL |
|---|---|
| Email | xkx5055@psu.edu |
| GitHub | https://github.com/lesliexxy |
| LinkedIn | https://www.linkedin.com/in/xinyue-xu-8a4a74184/ |
| Google Scholar | https://scholar.google.com/citations?user=zJpzOSEAAAAJ |
| LeetCode | https://leetcode.com/lesliexxy |
