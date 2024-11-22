import { test, describe, expect } from '@playwright/test'

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('pokemon page can be navigated into', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'bulbasaur' }).click()

    await expect(page.getByText('bulbasaur')).toBeVisible()
    await expect(page.getByText('overgrow')).toBeVisible()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})