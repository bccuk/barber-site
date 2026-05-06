# barber-site

> Modern, sleek Astro template for barber shops — built by Bytecode Consulting.

## Status

🚧 Early development. Astro framework not yet scaffolded — see "Getting started" below.

## Getting started

### Prerequisites

Node.js 20+, npm or pnpm.

### Setup

```bash
git clone https://github.com/bccuk/barber-site.git
cd barber-site
npm create astro@latest .   # scaffold Astro into this directory
npm install
npm run dev
```

### Environment variables

Copy `.env.example` to `.env` and fill in any required values:

```bash
cp .env.example .env
```

**Never commit `.env`** — it's gitignored for a reason.

## Project structure

```
barber-site/
├── .github/          # GitHub-specific config (security policy, workflows)
├── src/              # Astro source (created by `npm create astro@latest`)
├── public/           # Static assets
├── .env.example      # Template for environment variables
├── .gitignore
└── README.md
```

## Security

- Secrets live in `.env` (gitignored) — never in source code or commit history.
- A pre-commit hook scans for common secret patterns before allowing a commit.
- See [`.github/SECURITY.md`](.github/SECURITY.md) for disclosure policy.

## License

MIT — see [LICENSE](LICENSE).

---

Prepared by Bytecode Consulting Ltd · AI • Cloud • Software Delivery • Training
[bytecodeconsulting.com](https://bytecodeconsulting.com) · admin@bytecodeconsulting.com
