import type { Page } from '@playwright/test';
export class SearchProductPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async clickOnProduct () {
        // Vérify if the product is exist and click on it
        await this.page.waitForSelector('text=BONNET DE SKI ADULTE - FISHERMAN - NOIR');
        await this.page.getByRole('main').getByRole('list').locator('div').filter({ hasText: 'BONNET DE SKI ADULTE - FISHERMAN - NOIR 16 modèles disponibles 5€ 8€ -3€ *À' }).locator('a').nth(1).click();
    } 
}