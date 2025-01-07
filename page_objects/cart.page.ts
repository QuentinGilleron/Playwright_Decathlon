import type { Page } from '@playwright/test';

export class Cart {
    readonly page: Page;
    readonly valideCartButtonName: string;

    constructor(page: Page) {
        this.page = page;
        this.valideCartButtonName = 'Visualiser mon panier ';
    }

    async clickOnCartPage() {
        // Vérify if the button is displayed and click on it
        const valideCartBouton = this.page.getByRole('link', { name: this.valideCartButtonName });
        if (await valideCartBouton.isEnabled()) {
            await valideCartBouton.click();
        } else {
            console.log('Button not clickable');
        }
    }
}