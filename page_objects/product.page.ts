import type { Page } from '@playwright/test';
export class Product {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async clickOnAddToCart () {
        await this.page.getByRole('button', { name: 'Ajouter au panier' }).click();
    } 
}