(() => {
  // Preserve the normal 1440px hero composition on larger displays.
  const fitHero = () => {
    const scale = Math.max(1, document.documentElement.clientWidth / 1440);
    document.documentElement.style.setProperty('--st-hero-scale', String(scale));
    document.documentElement.style.setProperty('--st-hero-extra', `${927 * (scale - 1)}px`);
  };
  fitHero();
  addEventListener('resize', fitHero, { passive: true });

  const init = () => {
    document.querySelectorAll('#main [data-framer-component-type="RichTextContainer"]').forEach(element => {
      const sizes = [element, ...element.querySelectorAll('[style]')].map(node => parseFloat(node.style.getPropertyValue('--framer-font-size')) || 0);
      if (Math.max(...sizes) >= 36) element.classList.add('st-heading');
    });
    const track = document.querySelector('.framer-g5b68a');
    if (track && !track.parentElement.classList.contains('st-logo-window')) {
      const window = document.createElement('div');
      window.className = 'st-logo-window';
      window.setAttribute('role', 'region');
      window.setAttribute('aria-label', 'Compatible sailing apps and devices');
      window.tabIndex = 0;
      track.before(window);
      window.append(track);
      [...track.children].slice(6).forEach(logo => { logo.setAttribute('aria-hidden', 'true'); logo.inert = true; });
    }
  };
  const start = () => setTimeout(init, 1500);
  if (document.readyState === 'complete') start();
  else addEventListener('load', start, { once: true });
})();
