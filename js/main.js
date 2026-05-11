/* ==========================================================
   main.js  —  Shared site interactions
   ========================================================== */

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
