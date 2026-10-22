(() => {
  const init = () => {
    document.querySelectorAll('#main [data-framer-component-type="RichTextContainer"]').forEach(element => {
      const sizes = [element, ...element.querySelectorAll('[style]')].map(node => parseFloat(node.style.getPropertyValue('--framer-font-size')) || 0);
      if (Math.max(...sizes) >= 36) element.classList.add('st-heading');
    });
    const header = document.querySelector('.framer-112zrjh');
    const nav = document.querySelector('.framer-16crtai');
    if (header && nav && !header.querySelector('.st-menu-toggle')) {
      nav.id = 'sailties-navigation';
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'st-menu-toggle';
      toggle.textContent = 'Menu';
      toggle.setAttribute('aria-controls', nav.id);
      toggle.setAttribute('aria-expanded', 'false');
      const close = () => { header.classList.remove('st-nav-open'); toggle.setAttribute('aria-expanded', 'false'); };
      toggle.addEventListener('click', () => {
        const open = header.classList.toggle('st-nav-open');
        toggle.setAttribute('aria-expanded', String(open));
      });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
      document.addEventListener('click', e => { if (!header.contains(e.target)) close(); });
      header.append(toggle);
    }
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
