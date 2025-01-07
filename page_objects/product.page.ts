import type { Page } from '@playwright/test';
export class Product {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async clickOnAddToCart () {
        // Verify title product
        const productTitle = this.page.locator('text=BONNET DE SKI ADULTE - FISHERMAN - NOIR');
        if (productTitle) {
            console.log('Product title is correct');
        } else {
            console.log('Product title is incorrect');
            // stop the test
            process.exit(1);
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