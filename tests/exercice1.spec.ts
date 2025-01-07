import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.decathlon.fr/');
  await page.getByLabel('Accepter & Fermer: Accepter').click();
  await page.getByRole('menuitem', { name: 'Equipements & loisirs' }).click();
  await page.getByRole('menuitem', { name: 'Tapis de course' }).click();
  await page.locator('div:nth-child(14) > div:nth-child(6) > .quick-buy > .vtmn-contents > .vtmn-btn').click();
  await page.locator('#vtmn-modal-description').getByRole('button', { name: 'Ajouter au panier' }).click();
  await page.getByLabel('Fermer l\'alerte').click();
  await page.getByRole('menuitem', { name: 'Homme' }).click();
  await page.getByRole('menuitem', { name: 'Polaires' }).click();
  await page.locator('.dpb-models > .vtmn-relative > .vtmn-absolute').first().click();
  await page.getByRole('combobox', { name: 'Sélectionnez une taille' }).click();
  await page.getByLabel('Taille M, En stock').click();
  await page.getByRole('button', { name: 'Ajouter au panier' }).click();
  await page.getByRole('link', { name: 'Visualiser mon panier ' }).click();
});