# Deployment Guide — Personal Academic Website

## One-time GitHub Pages Setup

### 1. Create the repository
Go to github.com/new and create a repo named **exactly**:
```
YOUR-GITHUB-USERNAME.github.io
```
For example: `lesliexxy.github.io`

Leave it empty (no README). Set visibility to **Public**.

### 2. Push this folder as the repo root
Open a terminal in the `personal-website/` folder and run:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages
- Go to your repo → **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: `main` / `/ (root)`
- Click **Save**

Your site will be live at `https://YOUR-USERNAME.github.io` within ~2 minutes.

---

## Updating content

| What to update | Where |
|---|---|
| Name, bio, social links | `index.html` — search for `<!-- EDIT:` |
| Publications | `publications.html` — copy a `pub-item` block |
| Add a project card | `projects/index.html` and `index.html` (Featured Projects) |
| Add a project detail page | Copy `projects/template.html` → `projects/my-project.html` |
| Profile photo | Drop `profile.jpg` in `assets/images/`, uncomment the `<img>` in `index.html` |
| Project figures | Drop PNGs in `assets/images/`, update `<img src="...">` in the project page |
| CV | Drop `cv.pdf` in `assets/`, it's already linked in the nav |
| Colors / theme | Edit CSS variables at the top of `css/style.css` |
| Fonts | Change the Google Fonts `<link>` in each HTML `<head>` and update `--font-display` / `--font-body` |

---

## Adding a new project page (step-by-step)

1. Copy `projects/template.html` to `projects/your-project-slug.html`
2. Fill every `<!-- EDIT:` comment in the new file
3. Add a card in `projects/index.html` (copy an existing `.project-card` block)
4. Optionally feature it on the homepage — add a card in the "Featured Projects" section of `index.html`
5. `git add . && git commit -m "Add project: your-project-name" && git push`

---

## Custom domain (optional)

1. Add a file named `CNAME` at the repo root containing your domain:
   ```
   yourdomain.com
   ```
2. In your domain registrar's DNS settings, add:
   - A record: `@` → `185.199.108.153` (and the other three GitHub IPs)
   - CNAME: `www` → `YOUR-USERNAME.github.io`
3. In GitHub Pages settings, enter the custom domain and enable **Enforce HTTPS**.

---

## File structure reference

```
personal-website/
├── index.html              ← Homepage (hero, about, news, pubs, projects, edu, skills)
├── publications.html       ← Full publications list with filter
├── projects/
│   ├── index.html          ← Projects gallery with filter
│   ├── template.html       ← Copy this for each new project page
│   ├── building-energy-ai.html   ← Example project page (add your own)
│   └── ...
├── css/
│   └── style.css           ← All styles; edit CSS variables at top for theming
├── js/
│   └── main.js             ← Nav, mobile menu, filters, animations
├── assets/
│   ├── cv.pdf              ← Drop your CV here
│   └── images/
│       ├── profile.jpg     ← Your photo (220×220px or larger square)
│       └── proj-*.png      ← Project figures (16:9 or 4:3 recommended)
└── .nojekyll               ← Tells GitHub Pages to skip Jekyll processing
```
