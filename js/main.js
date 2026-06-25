/* ==========================================================
   main.js  —  Shared site interactions
   ========================================================== */

/* ── Dark / Light theme toggle ───────────────────────────── */
(function () {
  const html = document.documentElement;

  function getTheme() {
    return localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.querySelectorAll('.nav__theme-toggle').forEach(function (btn) {
      updateIcon(btn, theme);
    });
  }

  function updateIcon(btn, theme) {
    if (!btn) return;
    if (theme === 'dark') {
      btn.setAttribute('aria-label', 'Switch to light mode');
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
    } else {
      btn.setAttribute('aria-label', 'Switch to dark mode');
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  }

  // Apply saved/system theme before page renders
  html.setAttribute('data-theme', getTheme());

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav__theme-toggle').forEach(function (btn) {
      updateIcon(btn, html.getAttribute('data-theme'));
      btn.addEventListener('click', function () {
        var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      });
    });
  });
})();

/* ── Navigation ──────────────────────────────────────────── */
(function () {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  const mobileMenu = document.querySelector('.nav__mobile');

  // Scroll shadow
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // Mobile menu toggle
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      });
    });
  }

  // Active nav link based on scroll position (single-page)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || 68)}px 0px -40% 0px` });

    sections.forEach(s => observer.observe(s));
  }
})();

/* ── News toggle ─────────────────────────────────────────── */
(function () {
  const toggle = document.getElementById('news-toggle');
  if (!toggle) return;

  const extra = document.querySelectorAll('.news-more');
  let expanded = false;

  toggle.addEventListener('click', () => {
    expanded = !expanded;
    extra.forEach(el => el.classList.toggle('visible', expanded));
    toggle.textContent = expanded ? '↑ Show less' : '↓ Show more updates';
  });
})();

/* ── Publication abstract toggle ─────────────────────────── */
(function () {
  document.querySelectorAll('.pub-item__toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const abstract = btn.closest('.pub-item').querySelector('.pub-item__abstract');
      if (!abstract) return;
      const open = abstract.classList.toggle('open');
      btn.textContent = open ? '↑ Hide abstract' : '↓ Show abstract';
    });
  });
})();

/* ── Publication filter (publications.html) ──────────────── */
(function () {
  const filterBtns = document.querySelectorAll('.pub-filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      document.querySelectorAll('.pub-item').forEach(item => {
        const match = filter === 'all' || item.dataset.tags?.includes(filter);
        item.style.display = match ? '' : 'none';
      });

      // Hide empty year groups
      document.querySelectorAll('.pub-year-group').forEach(group => {
        const visible = group.querySelectorAll('.pub-item:not([style*="none"])');
        group.style.display = visible.length ? '' : 'none';
      });
    });
  });
})();

/* ── Project filter (projects/index.html) ────────────────── */
(function () {
  const filterBtns = document.querySelectorAll('[data-proj-filter]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.projFilter;
      document.querySelectorAll('.project-card, .project-row').forEach(card => {
        const match = filter === 'all' || card.dataset.tags?.includes(filter);
        card.style.display = match ? '' : 'none';
      });
    });
  });
})();

/* ── Smooth entrance animations on scroll ────────────────── */
(function () {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.project-card, .pub-item, .timeline-item, .skill-group').forEach(el => {
    observer.observe(el);
  });
})();
