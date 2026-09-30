# Portfolio: Aditya Samsher Singh

**Live:** [commanderportfolio.netlify.app](https://commanderportfolio.netlify.app)

My personal portfolio site: analytics engineering, full-stack and applied AI work, including FieldPulse, ELETTRO Intelligence and my open-source projects.

## Features

- **Data-driven content:** projects, experience and skills live in one data module, so the site updates without touching the layout
- **Experience timeline** built with `react-vertical-timeline-component`
- Custom "Cyber-HUD" theme, responsive layout, SEO metadata
- SPA routing on Netlify, with every route served by `index.html` so direct links and refreshes work

## Tech

React 19 · TypeScript · Vite 6 · Font Awesome · Netlify · GitHub Actions

## Run locally

```bash
git clone https://github.com/Commanderadi/portfolio.git
cd portfolio
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
```

## Deploy

Netlify builds `npm run build` and publishes `dist/` (Node 20); see `netlify.toml`.

## License

See [LICENSE](LICENSE).
