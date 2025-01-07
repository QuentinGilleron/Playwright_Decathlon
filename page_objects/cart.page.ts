import type { Page } from '@playwright/test';
export class Cart {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async clickOnCartPage () {

        // Vérify if the button is displayed and click on it
        const valideCartBouton = this.page.getByRole('link', { name: 'Visualiser mon panier ' });
        if (await valideCartBouton.isEnabled()) {
            await valideCartBouton.click();
        } else {
            console.log('Button not clickable');
        }

    } 
}