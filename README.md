# Santosh Prasad Sah — Portfolio

Personal portfolio site for **Santosh Prasad Sah**, a Senior Ruby on Rails Engineer based in Kathmandu, Nepal.

A decade building production web applications — Rails backends, PostgreSQL, Hotwire, Docker, Kamal, and mobile with Flutter.

## Links

- **Portfolio:** [sahsantoshh.com](https://sahsantoshh.com)
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
  content/blog/      # Blog posts (Markdown)
  data/site.ts       # Content: bio, experience, projects, open source, skills
  components/        # UI components
  layouts/           # Page layouts
  pages/             # Routes (/, /projects, /open-source, /blog, /experience, /contact)
functions/
  api/contact.ts     # Contact form API (Cloudflare Pages Function)
public/              # Static assets + CV PDF
```

Edit `src/data/site.ts` to update copy, experience, projects, or open source repos. Add blog posts under `src/content/blog/`.

## Contact form (Resend)

The contact form posts to `/api/contact`, handled by a Cloudflare Pages Function.

Set these **secrets** in Cloudflare Pages → Settings → Environment variables:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key from [Resend](https://resend.com) |
| `CONTACT_TO_EMAIL` | Inbox for form submissions (default: `sahsantoshh@gmail.com`) |
| `RESEND_FROM_EMAIL` | Verified sender, e.g. `Portfolio <onboarding@resend.dev>` |

Optional: `PUBLIC_CF_ANALYTICS_TOKEN` for Cloudflare Web Analytics (see `.env.example`).

## Deploy (Cloudflare Pages)

**Build settings** (Cloudflare dashboard → Settings → Build):

| Setting | Value |
|---------|--------|
| Build command | `pnpm run build` |
| Deploy command | `pnpm run deploy` |
| Path | `/` |

Static Astro build output goes to `dist/`. The `functions/` folder provides the contact form API on Pages — no Astro SSR adapter needed.

- **Node version:** `22` (matches `.tool-versions`)
- Optional env var: `NODE_VERSION` = `22`

Push to GitHub — Cloudflare rebuilds on every commit to `main`.

## License

Personal portfolio — all rights reserved.
