# gestoq-web

Landing page for Gestoq, an intelligent inventory management mobile app built with Flutter.

## Structure

```
├── index.html                  # Main page (Liquid includes)
├── privacy-policy.html         # Privacy policy (Liquid includes)
├── _config.yml                 # Minimal Jekyll config
├── _includes/                  # HTML partials (processed by Jekyll)
│   ├── hero.html
│   ├── features.html
│   ├── screens.html
│   ├── businesses.html
│   ├── tech.html
│   ├── download.html
│   ├── footer.html
│   └── legal-content.html
├── assets/
│   └── images/
│       └── logo/               # Gestoq logo (PNG + SVG)
└── src/
    ├── main.css                # CSS entry point (imports all modules)
    ├── core/                   # Shared / base styles
    │   ├── variables.css
    │   ├── reset.css
    │   ├── buttons.css
    │   ├── sections.css
    │   └── responsive.css
    └── features/               # One CSS file per section
        ├── hero/
        ├── features/
        ├── screens/
        ├── businesses/
        ├── tech/
        ├── download/
        ├── footer/
        └── legal/
```

See `AGENTS.md` for the full architecture guide.

## Deploy

GitHub Pages with Jekyll (automatic build on push). No local build step required.

The `_includes/` partials are inlined by Jekyll's `{% include %}` Liquid tag
when GitHub Pages builds the site. Just edit, commit, and push.
