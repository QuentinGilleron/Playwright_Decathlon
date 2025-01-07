import type { Page } from '@playwright/test';
export class SearchProductPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async clickOnProduct () {
        // Vérify if the url is the expected one
        const currentURL = this.page.url();
        if (currentURL !== 'https://www.decathlon.fr/search?Ntt=bonnet') {
            throw new Error(`Unexpected URL: ${currentURL}`);
        }

        // Vérify if the product is exist and click on it
        const productExists = await this.page.$('text=BONNET DE SKI ADULTE - FISHERMAN - NOIR');

        if (productExists) {
            await this.page.getByRole('main').getByRole('list').locator('div').filter({ hasText: 'BONNET DE SKI ADULTE - FISHERMAN - NOIR 16 modèles disponibles 5€ 8€ -3€ *À' }).locator('a').nth(1).click();
        } else {
            console.log('Product not found');
        }


    } 
}