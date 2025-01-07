import type { Page } from '@playwright/test';

export class EquivalencePartSearchBarLandingPage {
    readonly page: Page;
    readonly currentURL: string;
    readonly cookiesRejectButton: string;
    readonly cookiesAcceptButton: string;
    readonly noLink: string;
    readonly testCases: (string | null)[];

    constructor(page: Page) {
        this.page = page;
        this.currentURL = this.page.url();
        this.cookiesRejectButton = 'Tout refuser et fermer';
        this.cookiesAcceptButton = 'Accepter & Fermer: Accepter';
        this.noLink = 'Non';
        this.testCases = [
            null, 'abc', 'ABC', '123', '!@#', 'a'.repeat(300), 'randomString', 
            "' OR '1'='1"
        ];
    }

    async equivalencePart() {
        // Wait for the page to load
        await this.page.waitForURL('**', { waitUntil: 'load' });
        await this.page.goto('/');

        if (this.currentURL !== 'https://www.decathlon.fr/') {
            throw new Error(`Unexpected URL: ${this.currentURL}`);
        }

        // Close the cookies banner
        if (await this.page.getByRole('button', { name: this.cookiesRejectButton }).isDisabled()) {
            await this.page.getByRole('button', { name: this.cookiesRejectButton }).click();
        } else if (await this.page.getByRole('button', { name: this.cookiesAcceptButton }).isVisible()) {
            await this.page.getByRole('button', { name: this.cookiesAcceptButton }).click();
        }

        // wait 1 second
        await this.page.waitForTimeout(2000);

        await this.page.getByRole('link', { name: this.noLink, exact: true }).click();

        // Use testCases for further actions
        for (const testCase of this.testCases) {
            // Your test logic here
        }
    }
}