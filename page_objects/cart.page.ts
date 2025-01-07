import type { Page } from '@playwright/test';
export class Cart {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async clickOnCartPage () {
        await this.page.getByRole('link', { name: 'Visualiser mon panier ' }).click();
    } 
}