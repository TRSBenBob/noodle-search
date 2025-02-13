![Noodle banner](./.github/assets/noodle.png)

# noodle search

![GitHub deployments](https://img.shields.io/github/deployments/trsbenbob/noodle-search/production?style=flat&logo=vercel&logoColor=white&label=vercel)

Nuxt 3 application providing meal suggestions and shortlisting, powered by [themealdb.com](https://themealdb.com).

## Setup

Make sure to install dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

## Tests

Unit tests are provided by [vitest](https://vitest.dev/). E2E tests are provided by [Playwright](https://playwright.dev/).

```bash
pnpm test
```

E2E tests must be run with either `pnpm dev` or `pnpm preview` running.
