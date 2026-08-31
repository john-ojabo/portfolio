/**
 * John A. Ojabo — Senior DevOps & SRE Portfolio
 * Interactive Scripts & Theme Management
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Dark / Light Mode)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const root = document.documentElement;

  // Check saved theme preference or default to dark
  const savedTheme = localStorage.getItem('ojabo_theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('ojabo_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'dark'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }

  // 2. Header Scroll Shadow
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 3. Copy Email to Clipboard Functionality
  const copyEmailButtons = document.querySelectorAll('.copy-email-btn');
  copyEmailButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const email = 'johnojabo4@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalContent = btn.innerHTML;
        btn.innerHTML = `<span style="color: var(--accent-emerald);">✓ Copied to Clipboard</span>`;
        setTimeout(() => {
          btn.innerHTML = originalContent;
        }, 2500);
      } catch (err) {
        console.error('Failed to copy email', err);
      }
    });
  });

  // 4. Interactive Terminal Live Metric Update Simulation
  const liveUptimeEl = document.getElementById('liveUptime');
  if (liveUptimeEl) {
    const uptimes = ['99.99%', '100.00%', '99.98%'];
    setInterval(() => {
      const randomUptime = uptimes[Math.floor(Math.random() * uptimes.length)];
      liveUptimeEl.innerText = randomUptime;
    }, 4000);
  }

  // 5. Active Nav Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
