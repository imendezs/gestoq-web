# Gestoq Web - Landing Page

Landing page estática para la aplicación móvil Gestoq, publicada con GitHub Pages.

## Estructura del proyecto

```
gestoq-web/
├── index.html                  # Página principal (Liquid includes)
├── privacy-policy.html         # Política de privacidad (Liquid includes)
├── _config.yml                 # Configuración mínima de Jekyll
├── _includes/                  # Partials HTML (procesados por Jekyll)
│   ├── hero.html
│   ├── features.html
│   ├── screens.html
│   ├── businesses.html
│   ├── tech.html
│   ├── download.html
│   ├── footer.html             # Compartido por index y privacy-policy
│   └── legal-content.html
├── AGENTS.md
├── README.md
├── assets/
│   └── images/
│       └── logo/               # Logo de Gestoq (PNG + SVG)
└── src/
    ├── main.css                # CSS entry point (@import de todos los módulos)
    ├── core/                   # Estilos compartidos / base
    │   ├── variables.css
    │   ├── reset.css
    │   ├── buttons.css
    │   ├── sections.css
    │   └── responsive.css
    └── features/               # Un CSS por feature
        ├── hero/
        ├── features/
        ├── screens/
        ├── businesses/
        ├── tech/
        ├── download/
        ├── footer/
        └── legal/
```

## Arquitectura

### HTML — Jekyll includes (nativo de GitHub Pages)
- Los partials viven en `_includes/`.
- Los HTML raíz (`index.html`, `privacy-policy.html`) los referencian con
  `{% include nombre.html %}` (Liquid).
- **GitHub Pages procesa los includes automáticamente al hacer push** — no hay
  build local, no hay Python, no hay JavaScript. Jekyll viene integrado.
- Las carpetas con prefijo `_` (`_includes`, `_layouts`) no se sirven públicamente;
  Jekyll las usa solo como fuente.
- El resto (`src/`, `assets/`, HTML raíz) se copia al sitio generado tal cual.

### CSS — Feature-first
- Cada sección tiene su CSS en `src/features/<nombre>/`.
- `src/main.css` importa todo con `@import`.
- Los HTML referencian solo `src/main.css`.
- Sin build step: CSS nativo.

## Cómo trabajar

- **Nueva sección**: crea `_includes/<nombre>.html`, añade el CSS en
  `src/features/<nombre>/<nombre>.css`, importa el CSS en `src/main.css`, y añade
  `{% include <nombre>.html %}` en el HTML raíz correspondiente.
- **Nueva variable de diseño**: edita `src/core/variables.css`.
- **Nuevo botón**: edita `src/core/buttons.css`.
- Los partials y los HTML raíz no deben tener comentarios `<!-- -->`.

## Publicación

GitHub Pages con Jekyll (build automático al hacer push). No requiere build local
ni servidor de desarrollo: edita, commitea, push, y el sitio se actualiza solo.

## App relacionada

El proyecto Flutter de la app móvil está en `../Gestock`. El logo y la información
de la app se sincronizan desde ahí.
