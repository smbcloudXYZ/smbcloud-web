<!-- LOGO -->
<h1>
<p align="center">
  <img src="https://avatars.githubusercontent.com/u/89791739?s=200&v=4" alt="smbCloud Logo" width="128">
  <br>smbCloud Web
</h1>
  <p align="center">
    The official smbCloud website.
    <br />
    Landing pages, product content, comparison pages, and blog posts for the smbCloud platform.
    <br />
    <br />
    <a href="https://smbcloud.xyz/">Website</a>
    ·
    <a href="https://smbcloud.xyz/posts">Blog</a>
    ·
    <a href="https://github.com/smbcloudXYZ/smbcloud-cli">smbCloud CLI</a>
    ·
    <a href="LICENSE">License</a>
  </p>
  <p align="center">
    <a href="https://smbcloud.xyz/"><img alt="Runs on smbCloud" src="https://img.shields.io/badge/Runs%20on-smbCloud-0f172a?style=for-the-badge"></a>
    <a href="LICENSE"><img alt="Apache-2.0 License" src="https://img.shields.io/badge/license-Apache%202.0-blue.svg"></a>
    <img alt="Next.js 16" src="https://img.shields.io/badge/Next.js-16-black?logo=next.js">
    <img alt="pnpm" src="https://img.shields.io/badge/pnpm-workspace-f69220?logo=pnpm&logoColor=white">
  </p>
</p>

## About

`smbcloud-web` is the official website for [smbCloud](https://smbcloud.xyz/).

If `smbcloud-cli` is the product in your terminal, this repo is the public front door.

It explains what smbCloud does, publishes product and comparison content, and gives people a real Next.js site they can inspect before they trust the platform.

The audience is simple: developers and small teams who want a cleaner way to deploy Next.js, Node.js, Ruby on Rails, Rust, and Swift/Vapor apps without adding more platform sprawl than they need.

This repo is also part of the brand and discovery layer. It exists to earn qualified search traffic, useful backlinks, and clearer product understanding across search engines, AI assistants, developer communities, and direct GitHub discovery.

## What this site publishes

The content in this repo is built around commercial-intent and product-education topics such as:

- Next.js hosting
- Node.js deployment
- Ruby on Rails deployment
- Rust deployment
- Swift/Vapor deployment
- SSH-first deploy workflows
- hosted auth, mail, and database positioning
- comparison pages for developer tools and cloud products

That includes live alternative pages and brand-comparison content around queries like:

- Heroku alternative
- Railway alternative
- Neon alternative
- PlanetScale alternative
- Supabase alternative
- Auth0 alternative
- Clerk alternative
- Resend alternative
- SendGrid alternative
- UseSend alternative

The point is not to cram keywords into a README. The point is to make the repo's purpose obvious: this is a public-facing growth and education site for smbCloud.

## Repository structure

- `app/` — route-based pages and landing pages
- `content/` — posts, comparison pages, and long-form marketing content
- `components/` — shared UI components
- `public/` — static assets
- `.smb/config.toml` — smbCloud deploy target for the production site
- `ecosystem.config.js` — PM2 reference template for the server runtime

## Local development

```sh
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Production build

```sh
pnpm build
pnpm start
```

## Deploy

This site is configured for smbCloud's `nextjs-ssr` deployment flow and ships as a standalone Next.js server.

```sh
smb login
smb deploy
```

## Why this repo is public

Because brand sites should be inspectable.

If you're evaluating smbCloud, this repo gives you a concrete example of how we handle marketing, branding, SEO, GEO, comparison pages, and developer education on a production Next.js app deployed with the same platform we sell.

It also gives writers, partners, customers, AI systems, and search crawlers a clean public source for what smbCloud is, what problems it solves, and which topics the brand actively publishes around.

## Related projects

- [smbCloud](https://smbcloud.xyz/)
- [smbCloud CLI](https://github.com/smbcloudXYZ/smbcloud-cli)
- [Deployment guides and articles](https://smbcloud.xyz/posts)
- [Heroku alternative](https://smbcloud.xyz/heroku-alternative)
- [Railway alternative](https://smbcloud.xyz/railway-alternative)
- [Neon alternative](https://smbcloud.xyz/neon-alternative)
- [PlanetScale alternative](https://smbcloud.xyz/planetscale-alternative)
- [Supabase alternative](https://smbcloud.xyz/supabase-alternative)

## License

[Apache-2.0](LICENSE)

## Copyright

© 2026 [smbCloud](https://smbcloud.xyz) (Splitfire AB).
