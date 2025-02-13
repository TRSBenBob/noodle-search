![Noodle banner](./.github/assets/noodle.png)

# noodle search

![GitHub deployments](https://img.shields.io/github/deployments/trsbenbob/noodle-search/production?style=flat&logo=vercel&logoColor=white&label=vercel)

Nuxt 3 application providing meal suggestions and shortlisting, powered by [themealdb.com](https://themealdb.com).

## Decisions and Tradeoffs

- Nuxt 3 + Vue
- pinia
- Tailwind CSS
- DaisyUI

For speed of development, Nuxt was chosen to provide a structured framework with clear separation of concerns and a strong type system.

For styling, [Tailwind CSS](https://tailwindcss.com) was chosen as it provides a simple and intuitive way to style components, and is also used by the [DaisyUI](https://daisyui.com) component library.

For state management, [pinia](https://pinia.vuejs.org) provides a simple and intuitive way to manage state and persist it to local storage via [pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/).

[Icons](https://nuxt.com/modules/icon) and [Fonts](https://nuxt.com/modules/fonts) are provided via Nuxt modules, and are automatically imported into the application at runtime. During the production build, these are pulled down and stored alongside other build artifacts.

The application is hosted on [Vercel](https://vercel.com) and deployed automatically on every push to the `main` branch.

### Further Ideas

- [ ] Add more meal details
  - [ ] Full-screen meal cards
  - [ ] Meal ingredients & instructions
- [ ] Streamline API responses to only include data used by frontend
- [ ] Use ingredient suggestions from themealdb's API, rather than hard-coded
- [ ] Explore `cookie` storage for shortlist, allowing this to be shared across frontend and backend
  - [ ] Explore storage events to sync state between different tabs
- [ ] Move shortlist visibility toggle to store, rather than using hidden checkbox hack
- [ ] Further testing, including E2E tests

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
