import type { Page } from '@playwright/test';

export class Product {
    readonly page: Page;
    readonly productTitleText: string;
    readonly addToCartButtonName: string;

    constructor(page: Page) {
        this.page = page;
        this.productTitleText = 'BONNET DE SKI ADULTE - FISHERMAN - NOIR';
        this.addToCartButtonName = 'Ajouter au panier';
    }

    async clickOnAddToCart() {
        // Verify title product
        const productTitle = this.page.locator(`text=${this.productTitleText}`);
        if (await productTitle.isVisible()) {
            console.log('Product title is correct');
        } else {
            console.log('Product title is incorrect');
            // stop the test
            process.exit(1);
        }

        // Vérify if the button is displayed and click on it
        const addToCartButton = this.page.getByRole('button', { name: this.addToCartButtonName });

        if (await addToCartButton.isEnabled()) {
            await addToCartButton.click();
        } else {
            console.log('Button not clickable');
        }
    }
}