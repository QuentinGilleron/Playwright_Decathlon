import type { Page } from '@playwright/test';
export class EquivalencePartSearchBarLandingPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async equivalencePart() {
        
        //  Wait for the page to load
        await this.page.waitForURL('**', { waitUntil: 'load' });
        await this.page.goto('/');


        // Check if the URL is the expected one
        const currentURL = this.page.url();
        if (currentURL !== 'https://www.decathlon.fr/') {
            throw new Error(`Unexpected URL: ${currentURL}`);
        }

        // Close the cookies banner
        if (await this.page.getByRole('button', { name: 'Tout refuser et fermer' }).isDisabled()) {
            await this.page.getByRole('button', { name: 'Tout refuser et fermer' }).click();
        }
        else if (await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).isVisible()) {
            await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
        }
        
        // Vérify if the search bar is displayed and click on it


        // Equivalence part of the search bar
        // a - z
        // A - Z
        // 0 - 9
        // Special characters
        // Spaces
        // Long string
        // Empty string
        // Null string
        // Undefined string
        // Random string
        // SQL injection
        // XSS


        // wait 5 seconds
        await this.page.waitForTimeout(1000);

        await this.page.getByRole('link', { name: 'Non', exact: true }).click();

        const testCases = [
            'abc', 'ABC', '123', '!@#', '       ', 'a'.repeat(1000), '', null, undefined, 'randomString', 
            "' OR '1'='1", "'<script>alert(XSS)</script>'"
        ];

        for (const testCase of testCases) {


            // Vérify if the search bar is displayed and click on it
            if (await this.page.getByPlaceholder('Rechercher un produit, un').isVisible()) {
                await this.page.getByPlaceholder('Rechercher un produit, un').click();
            } else {
                throw new Error('Search bar is not visible');
            }
            await this.page.waitForTimeout(1000);

            // Vérify if the search bar is editable and fill it
            if (typeof testCase === 'string') {
                await this.page.getByPlaceholder('Rechercher un produit, un').fill(testCase);
            }


            const searchButton = this.page.getByRole('button', { name: '' });

            // Vérify if the search button is displayed and click on it
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
}