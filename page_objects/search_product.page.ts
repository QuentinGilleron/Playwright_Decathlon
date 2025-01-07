import type { Page } from '@playwright/test';

export class SearchProductPage {
    readonly page: Page;
    readonly expectedURL: string;
    readonly productSelector: string;
    readonly productText: string;

    constructor(page: Page) {
        this.page = page;
        this.expectedURL = 'https://www.decathlon.fr/search?Ntt=bonnet';
        this.productSelector = 'text=BONNET DE SKI ADULTE - FISHERMAN - NOIR';
        this.productText = 'BONNET DE SKI ADULTE - FISHERMAN - NOIR 16 modèles disponibles 5€ 8€ -3€ *À';
    }

    async clickOnProduct() {
        // Vérify if the url is the expected one
        const currentURL = this.page.url();
        if (currentURL !== this.expectedURL) {
            throw new Error(`Unexpected URL: ${currentURL}`);
        }

        // Vérify if the product exists and click on it
        const productExists = await this.page.$(this.productSelector);

        if (productExists) {
            await this.page.getByRole('main').getByRole('list').locator('div').filter({ hasText: this.productText }).locator('a').nth(1).click();
        } else {
            console.log('Product not found');
        }
    }
}