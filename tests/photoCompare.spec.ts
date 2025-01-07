import { test, expect } from '@playwright/test';


test('Has a title', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.getByRole('button', { name: 'Tout refuser' }).click();
    await page.getByRole('img', { name: 'Google' }).click();
    await expect(page).toHaveScreenshot('landing.png');
});
