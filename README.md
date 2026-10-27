# React + TypeScript + Vite

## Vanguard loader and UI components

This project uses TypeScript and Tailwind CSS 3. Global styles live in
`src/index.css`; keep the existing `@tailwind` directives for this version.

Reusable UI components live in `src/components/ui`, configured in `components.json`.
The `@/` alias resolves to `src/` in both Vite and TypeScript, so
`@/components/ui` is this project's equivalent of `/components/ui`. This folder
keeps reusable primitives separate from site-specific components and gives
shadcn-compatible imports a consistent home. Class merging is in `src/lib/utils.ts`.

`src/components/ui/loader-2.tsx` exports the geometric loader, with an optional
`className` prop. `src/components/ui/demo.tsx` shows standalone usage. No images,
providers, or external state are needed; the SVG shapes are the animation itself.

`src/components/SiteLoader.tsx` displays it over the mounted app on each initial
page load, including direct links. It stays visible for at least three seconds and waits
for the window load event, with a five-second fallback for slow external media.
Client-side navigation does not restart it. The overlay matches Vanguard's black,
white, and red palette, scales spacing for mobile, announces loading to assistive
technology, and disables its animation when reduced motion is requested.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
