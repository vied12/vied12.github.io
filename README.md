# vied12.github.io

Source of [www.edri.fr](https://www.edri.fr). Built with [Astro](https://astro.build).

- `src/data/projects.ts` — every project, as a question and its answer.
  - `hidden: true` — the project is not published. It stays visible in `npm run dev` with a "hidden" badge.
  - `todo: '...'` — a note for missing content. It shows a "draft" badge in `npm run dev` only.
- `npm run dev` — local preview.
- Deploy: every push to `src` builds the site and publishes it with GitHub Pages (`.github/workflows/deploy.yml`).
