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

**Requirements:** Node.js 24+ (see `.tool-versions`)

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

Connect the GitHub repo in Cloudflare Pages. **Do not** set a separate deploy command — Pages uploads `dist/` automatically after the build.

**Build settings** (Cloudflare dashboard → Settings → Builds):

| Setting | Value |
|---------|--------|
| Framework preset | None (or Astro) |
| Build command | `pnpm install && pnpm run build` |
| Build output directory | `dist` |
| Deploy command | **Leave empty** |
| Root directory | `/` |

**Environment variables** (Settings → Environment variables):

| Variable | Type | Value |
|----------|------|--------|
| `NODE_VERSION` | Plain text | `24` |
| `RESEND_API_KEY` | Secret | Resend API key (contact form) |
| `CONTACT_TO_EMAIL` | Plain text | `sahsantoshh@gmail.com` |
| `RESEND_FROM_EMAIL` | Plain text | `Portfolio <onboarding@resend.dev>` |
| `PUBLIC_GOOGLE_SITE_VERIFICATION` | Plain text | optional |
| `PUBLIC_CF_ANALYTICS_TOKEN` | Plain text | optional |

The `functions/` folder is picked up automatically for `/api/contact`.

**Manual deploy from your machine** (optional): `pnpm run deploy` (requires `CLOUDFLARE_API_TOKEN`).

Push to GitHub — Cloudflare rebuilds on every commit to `main`.

## License

Personal portfolio — all rights reserved.
