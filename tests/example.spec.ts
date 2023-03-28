import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://127.0.0.1:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tempcover technical challenge/);
});

