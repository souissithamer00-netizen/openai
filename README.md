# SailTies

A locally hosted HTML/CSS version of the supplied reference:
https://thistle-areas-170179.framer.app/

The published page's layout, text, colors, spacing, SVG artwork, images, and
interactive components are preserved. All 130 required asset files are included
locally. Framer analytics, its author-only editing toolbar, and the Made in Framer badge are excluded. Subtle scroll reveals and teal hover effects are added, with reduced-motion support.

## Run

Requires Node.js 18 or newer. No packages to install and no build step.

```sh
npm start
```

The server listens on port 3000 on all interfaces. To use another port:

```sh
npm run dev -- --port 8080
```

You can also upload the HTML, CSS, and `assets` directory to a static web host.
Keep the directory structure intact. Use a web server rather than opening the
HTML through a `file://` URL so the JavaScript modules load correctly.

## Files

- `index.html`: complete page content and inline SVG artwork.
- `styles.css`: original published page styles.
- `effects.css` and `effects.js`: badge suppression, scroll reveals, and hover effects.
- `responsive.css` and `responsive.js`: responsive layout, logo marquee, and anchored illustrations.
- `assets/`: local images, runtime modules, font files, and SHA-256 manifest.
- `server.mjs`: dependency-free local web server.

The desktop composition is retained at 1440px and above. Smaller screens use stacked sections, wrapping navigation, swipeable trip cards, and a single-column Plus grid on phones. The compatibility logos loop horizontally, pause on hover/focus, and stop for reduced-motion users. The final illustrations are anchored inside the closing section. This is a
reproduction of the supplied page; it preserves existing source behavior and
does not introduce booking, account, payment, or other backend services.

## Validation

Checked in Chromium at desktop and mobile sizes, with external requests blocked.
All 61 image elements load when requested, local resources return successfully,
and the page has no JavaScript errors. Before the requested badge and motion changes, full-page desktop screenshot comparison
against the reference matched over 99.9% of pixels (minor rendering/animation
timing differences remain). The supplied reference itself has no web fonts
registered at runtime, so its existing browser font fallback is retained.
