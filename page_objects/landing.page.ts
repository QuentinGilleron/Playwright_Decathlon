import type { Page } from '@playwright/test';
export class LandingPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async openSearchAndClick() {
        
        //  Wait for the page to load
        await this.page.waitForURL('**', { waitUntil: 'load' });
        await this.page.goto('/');


        // Check if the URL is the expected one
        const currentURL = this.page.url();
        if (currentURL !== 'https://www.decathlon.fr/') {
            throw new Error(`Unexpected URL: ${currentURL}`);
        }

        // Close the cookies banner
        if (await this.page.getByRole('button', { name: 'Tout refuser et fermer' }).isVisible()) {
            await this.page.getByRole('button', { name: 'Tout refuser et fermer' }).click();
        }
        else if (await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).isVisible()) {
            await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
        }
        
        // Vérify if the search bar is displayed and click on it
        if (await this.page.getByPlaceholder('Rechercher un produit, un').isVisible()) {
            await this.page.getByPlaceholder('Rechercher un produit, un').click();
        } else {
            throw new Error('Search bar is not visible');
        }

        // Vérify if the search bar is editable and fill it
        if (await this.page.getByPlaceholder('Rechercher un produit, un').isEditable()) {
            await this.page.getByPlaceholder('Rechercher un produit, un').fill('bonnet');
        } else {
            throw new Error('Search bar is not editable');
        }

        // Vérify if the search button is displayed and click on it
        const searchButton = this.page.getByRole('button', { name: '' });
        if (await searchButton.isVisible()) {
            if (await searchButton.isEnabled()) {
                await searchButton.click();
            } else {
                throw new Error('Search button is not clickable');
            }
        } else {
            throw new Error('Search button is not visible');
        }



    } 
}