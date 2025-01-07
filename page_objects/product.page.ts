import type { Page } from '@playwright/test';
export class Product {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async clickOnAddToCart () {
        // Vérify if the url is the expected one
        const currentURL = this.page.url();
        if (currentURL !== 'https://www.decathlon.fr/p/bonnet-de-ski-adulte-fisherman-noir/_/R-p-12489?mc=8586009') {
            throw new Error(`Unexpected URL: ${currentURL}`);
        }

        // Vérify if the button is displayed and click on it
        const addToCartButton = this.page.getByRole('button', { name: 'Ajouter au panier' });

        if (await addToCartButton.isEnabled()) {
            await addToCartButton.click();
        } else {
            console.log('Button not clickable');
        }


    } 
}