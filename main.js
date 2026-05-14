/* Thailand Trip — Shared JS */

// Mark active nav link based on current page
document.addEventListener('DOMContentLoaded', function () {

  // Accordion day cards
  document.querySelectorAll('.day-header').forEach(function (header) {
    header.addEventListener('click', function () {
      const body = this.nextElementSibling;
      const isOpen = body.classList.contains('open');
      // Close all
      document.querySelectorAll('.day-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('.day-header').forEach(h => h.classList.remove('open'));
      // Open clicked if it was closed
      if (!isOpen) {
        body.classList.add('open');
        this.classList.add('open');
        // Smooth scroll into view on mobile
        setTimeout(() => {
          this.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    });
  });

  // Open day if anchor in URL
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      const header = target.querySelector('.day-header');
      const body = target.querySelector('.day-body');
      if (header && body) {
        header.classList.add('open');
        body.classList.add('open');
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }

  // Active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && (path.includes(href.replace('../', '').replace('index.html', '')) || (href === '../index.html' && (path.endsWith('/') || path.endsWith('index.html'))))) {
      link.classList.add('active');
    }
  });
});
