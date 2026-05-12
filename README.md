# Xinyue (Leslie) Xu — Personal Academic Website

Personal website for Xinyue (Leslie) Xu, Ph.D. candidate in Architectural Engineering at Penn State.  
Built with plain HTML / CSS / JavaScript — no frameworks, no build tools.

**Live site:** https://lesliexxy.github.io/xinyue.github.io/

---

## Project Structure

```
personal-website/
├── index.html              # Homepage (hero, about, news, publications, projects, education, skills)
├── publications.html       # Full publications list with filters
├── projects/
│   ├── index.html          # Projects gallery (horizontal image + text cards)
│   ├── pgbnn.html          # Project detail: Physics-Guided BNNs
│   ├── model-selection.html# Project detail: Bayesian Model Selection
│   ├── uq-bem.html         # Project detail: UQ Systematic Review
│   ├── retrofit-agent.html # Project detail: Multi-Agent Retrofit Framework
│   ├── leettrack.html      # Project detail: LeetTrack
│   └── template.html       # Blank template — copy this for new projects
├── assets/
│   ├── cv.pdf              # Your CV (replace with updated version)
│   └── images/
│       ├── profile.jpg     # Profile photo (400×500 px recommended)
│       ├── proj-pgbnn.png  # Cover image for PG-BNN project
│       └── ...             # Add more project images here
├── css/
│   └── style.css           # All styles — single file, fully commented
└── js/
    └── main.js             # Nav scroll, mobile menu, filters, abstract toggles
```

---

## How to Update Content

### Profile photo
Drop your photo at `assets/images/profile.jpg`. The site loads it automatically; a placeholder appears if the file is missing.

### Update the homepage bio / research interests
Edit `index.html` — find the `#about` section and update the `<p>` tags and `.tag` spans.

### Add a news item
In `index.html`, find the `#news` section and prepend a new `.news-item` block:
```html
<div class="news-item">
  <span class="news-item__date">May 2026</span>
  <p class="news-item__text">
    <strong>Paper accepted.</strong> "Your Title" accepted at <em>Journal Name</em>.
  </p>
</div>
```
Items beyond the first three are hidden until the user clicks "Show more".

### Add a publication
In `publications.html`, copy an existing `<article class="pub-item">` block and fill in:
- `data-tags` — space-separated filter tokens (e.g. `journal ml energy`)
- Title, authors, venue, DOI
- Abstract text inside `.pub-item__abstract`

### Add a project detail page
1. Copy `projects/template.html` → `projects/your-project.html`
2. Fill in each section: Overview, Methods, Key Findings, Technical Stack, Impact, BibTeX
3. Add a cover image at `assets/images/proj-yourproject.png`
4. Add a row to `projects/index.html` (copy an existing `.project-row` block)
5. Link the row's image and title to `your-project.html`

### Add a project cover image
In `projects/index.html` or `projects/pgbnn.html`, find the placeholder comment:
```html
<!-- <img src="../assets/images/proj-pgbnn.png" alt="..."> -->
```
Drop the image into `assets/images/` and uncomment the line. Remove the placeholder `<div>` above it.

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

### Subsequent updates
```bash
git add .
git commit -m "Describe your change"
git push origin main
```
Changes go live at **https://lesliexxy.github.io/xinyue.github.io/** within ~2 minutes.

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#F9F8F6` | Warm off-white page background |
| `--bg-white` | `#FFFFFF` | Card and hero backgrounds |
| `--accent` | `#1E3A5F` | Deep navy — links, labels, active states |
| `--ink` | `#1A1A1A` | Primary text |
| `--ink-2` | `#545454` | Secondary text |
| `--rule` | `#E3DFD8` | Hairline borders |
| `--serif` | Cormorant Garamond | Display headings |
| `--sans` | Inter | Body text, UI |
| `--mono` | JetBrains Mono | Dates, code, BibTeX |

---

## Social Links to Update

The following placeholders remain in the HTML — replace with your real URLs:

| Link | File | Current value |
|---|---|---|
| Google Scholar | `index.html`, `publications.html` | `?user=YOUR-ID` → replace with `?user=zJpzOSEAAAAJ` |
| LinkedIn | `index.html` | already set to `/in/xinyue-xu-8a4a74184/` |
| GitHub | `index.html` | already set to `github.com/lesliexxy` |
| Email | all files | `xkx5055@psu.edu` |
