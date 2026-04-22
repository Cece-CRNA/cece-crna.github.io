import { test, expect } from '@playwright/test';

test('navigates from home to services', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /a refined path to crna success/i })).toBeVisible();

  await page.getByRole('link', { name: 'Services' }).first().click();

  await expect(page).toHaveURL(/\/services/);
  await expect(page.getByRole('heading', { name: /boutique advisory services/i })).toBeVisible();
});
