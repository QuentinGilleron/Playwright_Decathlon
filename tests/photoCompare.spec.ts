import { test, expect } from '@playwright/test';

test('Has a title', async ({ page }) => {
    await page.goto('https://google.com');
    await expect(page.title()).resolves.toMatch('Google');
});
