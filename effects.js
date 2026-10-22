(() => {
  'use strict';

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let observer;

  function enhance() {
    // Framer can recreate its badge during hydration; CSS also prevents a flash.
    document.querySelectorAll('#__framer-badge-container, .__framer-badge')
      .forEach(element => { element.setAttribute('aria-hidden', 'true'); element.inert = true; });

    document.querySelectorAll('[data-framer-name="Article"]')
      .forEach(element => element.classList.add('st-card'));
    document.querySelectorAll('[data-framer-name="aniamtion download the app"]')
      .forEach(element => element.classList.add('st-action'));
    document.querySelectorAll('[data-framer-name="button"], [data-framer-name="Button,"]')
      .forEach(element => {
        if (!element.closest('[data-framer-name="aniamtion download the app"]')) {
          element.classList.add('st-action');
        }
      });
    document.querySelectorAll('[data-framer-name="Nav - Main"] [data-framer-name="Link"]')
      .forEach(element => element.classList.add('st-nav-link'));

    if (motion.matches || !('IntersectionObserver' in window)) return;
    observer?.disconnect();
    const targets = document.querySelectorAll(
      '#main [data-framer-component-type="RichTextContainer"], ' +
      '#main [data-framer-name="Article"], ' +
      '#main [data-framer-name="iPhone 16 Plus Light"]'
    );
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('st-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

    targets.forEach((element, index) => {
      // Keep hero, navigation, and card contents immediately visible.
      if (element.closest('.framer-1lh8rgf') ||
          (element.matches('[data-framer-component-type="RichTextContainer"]') &&
           element.closest('[data-framer-name="Article"], [data-framer-name="button"], [data-framer-name="Button,"], [data-framer-name="aniamtion download the app"]'))) return;
      const bounds = element.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      element.classList.add('st-reveal');
      element.style.setProperty('--st-delay', `${(index % 3) * 45}ms`);
      if (bounds.top < window.innerHeight) element.classList.add('st-visible');
      else observer.observe(element);
    });
    document.documentElement.classList.add('st-motion');
  }

  // Enhance after the original page runtime has hydrated its content.
  const start = () => window.setTimeout(enhance, 1500);
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start, { once: true });

  motion.addEventListener('change', () => {
    if (motion.matches) {
      observer?.disconnect();
      document.documentElement.classList.remove('st-motion');
      document.querySelectorAll('.st-reveal').forEach(el => el.classList.add('st-visible'));
    } else enhance();
  });
})();
