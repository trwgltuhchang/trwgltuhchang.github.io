# Trang Truong Portfolio

Personal portfolio site deployed at `https://trwgltuhchang.github.io/`.

This repo is adapted from the `Sagargupta16/portfolio-react` template. The upstream project is GPL-3.0 licensed, so this repo keeps the same license.

## Local development

```bash
corepack enable
corepack pnpm install
corepack pnpm dev
```

Node `>=24.11.0` is expected by the template.

## Customizing content

Most portfolio content is data-driven. Update these files first:

- `src/data/personal.json`
- `src/data/education.json`
- `src/data/experience.json`
- `src/data/projects.json`
- `src/data/skills.json`
- `src/data/services.json`
- `src/data/achievements.json`
- `src/data/contact.json`

The current data is safe starter content. It is intentionally generic and should be replaced with your real bio, projects, education, and links.

## Contact form

The contact form UI is enabled, but message sending is intentionally disabled until you configure EmailJS.

1. Copy `.env.example` to `.env.local`
2. Add your EmailJS values
3. Replace the placeholder values in `src/data/contact.json` if needed

Until then, the form will show a configuration message instead of trying to send mail.

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages on pushes to `main`.
