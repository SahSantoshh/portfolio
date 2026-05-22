# Santosh Prasad Sah — Portfolio

Personal portfolio site for **Santosh Prasad Sah**, a Senior Ruby on Rails Engineer based in Kathmandu, Nepal.

Ten years building production web applications — Rails backends, PostgreSQL, Hotwire, Docker, Kamal, and mobile with Flutter.

## Links

- **Portfolio:** *(deploy URL — e.g. your domain or `*.pages.dev`)*
- **Email:** [sahsantoshh@gmail.com](mailto:sahsantoshh@gmail.com)
- **GitHub:** [github.com/SahSantoshh](https://github.com/SahSantoshh)
- **LinkedIn:** [linkedin.com/in/sahsantoshh](https://linkedin.com/in/sahsantoshh)
- **Medium:** [medium.com/@sahsantoshh](https://medium.com/@sahsantoshh)

## Featured project

**[Kharcha Diary](https://kharchadiary.com/)** — personal finance tracker (Rails + Flutter) for web and Android. Multi-currency expenses, bill splitting, recurring payments, and lend & borrow tracking.

## Tech stack

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and TypeScript. Static output, deployed on Cloudflare Pages.

| Command        | Action                              |
| -------------- | ----------------------------------- |
| `pnpm install` | Install dependencies              |
| `pnpm dev`     | Dev server at http://localhost:4321 |
| `pnpm build`   | Production build → `dist/`          |
| `pnpm preview` | Preview production build locally    |

**Requirements:** Node.js 22+ (see `.tool-versions`)

## Project structure

```text
src/
  data/site.ts       # Content: bio, experience, projects, skills
  components/        # UI components
  layouts/           # Page layouts
  pages/             # Routes (/, /projects, /experience, /contact)
public/              # Static assets + CV PDF
```

Edit `src/data/site.ts` to update copy, experience, or projects.

## Deploy (Cloudflare Pages)

- **Build command:** `pnpm run build`
- **Output directory:** `dist`
- **Node version:** `22` (matches `.tool-versions` — Cloudflare supports 22.16.0, not 26.x)

Optional environment variable in Cloudflare Pages → Settings → Environment variables:

- `NODE_VERSION` = `22`

Push to GitHub — Cloudflare rebuilds on every commit to `main`.

## License

Personal portfolio — all rights reserved.
