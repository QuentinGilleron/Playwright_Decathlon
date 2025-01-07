import type { Page } from '@playwright/test';

export class LandingPage {
    readonly page: Page;
    readonly cookiesRejectButton: string;
    readonly cookiesAcceptButton: string;
    readonly searchBarPlaceholder: string;
    readonly searchButtonName: string;
    readonly expectedURL: string;

    constructor(page: Page) {
        this.page = page;
        this.cookiesRejectButton = 'Tout refuser et fermer';
        this.cookiesAcceptButton = 'Accepter & Fermer: Accepter';
        this.searchBarPlaceholder = 'Rechercher un produit, un';
        this.searchButtonName = '';
        this.expectedURL = 'https://www.decathlon.fr/';
    }

    async openSearchAndClick() {
        // Wait for the page to load
        await this.page.waitForURL('**', { waitUntil: 'load' });
        await this.page.goto('/');

        const currentURL = this.page.url();
        // Check if the URL is the expected one
        if (currentURL !== this.expectedURL) {
            console.log(`Current URL: ${currentURL}`);
            throw new Error(`Unexpected URL: ${currentURL}`);
        }

        // Close the cookies banner
        if (await this.page.getByRole('button', { name: this.cookiesRejectButton }).isDisabled()) {
            await this.page.getByRole('button', { name: this.cookiesRejectButton }).click();
        } else if (await this.page.getByRole('button', { name: this.cookiesAcceptButton }).isVisible()) {
            await this.page.getByRole('button', { name: this.cookiesAcceptButton }).click();
        }


        // Vérify if the search bar is visible and click on it
        if (await this.page.getByPlaceholder(this.searchBarPlaceholder).isVisible()) {
            await this.page.getByPlaceholder(this.searchBarPlaceholder).click();
        } else {
            throw new Error('Search bar is not visible');
        }

        // Vérify if the search bar is editable and fill it
        if (await this.page.getByPlaceholder(this.searchBarPlaceholder).isEditable()) {
            await this.page.getByPlaceholder(this.searchBarPlaceholder).fill('bonnet');
        } else {
            throw new Error('Search bar is not editable');
        }

        // Vérify if the search button is displayed and click on it
        const searchButton = this.page.getByRole('button', { name: this.searchButtonName });
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

    async open() {
        // Wait for the page to load
        await this.page.waitForURL('**', { waitUntil: 'load' });

        await this.page.goto('/');

        const currentURL = this.page.url();
        // Check if the URL is the expected one
        if (currentURL !== this.expectedURL) {
            console.log(`Current URL: ${currentURL}`);
            throw new Error(`Unexpected URL: ${currentURL}`);
        }
    }
}