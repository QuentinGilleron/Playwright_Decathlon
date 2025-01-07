import type { Page } from '@playwright/test';
export class LandingPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async openSearchAndClick() {
        // Open the landing page
        await this.page.goto('/');

        // Vérify if the cookie banner is displayed and close it
        await this.page.getByRole('button', { name: 'Tout refuser et fermer' }).waitFor({ state: 'visible' });
        await this.page.getByRole('button', { name: 'Tout refuser et fermer' }).click();

        // Vérify if the search bar is displayed and click on it
        await this.page.getByPlaceholder('Rechercher un produit, un').click();
        await this.page.getByPlaceholder('Rechercher un produit, un').isEditable();

        // Vérify if the search bar is editable and fill it
        await this.page.getByPlaceholder('Rechercher un produit, un').fill('bonnet');

        // Submit the search
        await this.page.getByRole('button', { name: '' }).click();
    } 
}