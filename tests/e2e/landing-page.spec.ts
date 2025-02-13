import { createPage, setup } from '@nuxt/test-utils/e2e'

describe('landing page', async () => {
  await setup({
    host: 'http://localhost:3000',
  })

  it('should render the landing page', async () => {
    const page = await createPage('/')

    const heading = page.getByRole('heading', { level: 1 })
    expect(await heading.textContent()).toBe('noodle')

    expect(await page.getByRole('search').count()).toBe(1)
  })

  // TODO: Spend more time on understanding Playwright testing mechanics
  it.skip('should allow searching for food', async () => {
    const page = await createPage('/')

    const search = page.getByRole('search')
    await search.fill('chicken')

    await page.getByRole('form').dispatchEvent('submit')
    const cards = page.getByTestId('meal-card')

    await cards.waitFor({ state: 'visible', timeout: 10000 })

    expect(await cards.count()).toBeGreaterThan(0)
  }, 10000)
})
