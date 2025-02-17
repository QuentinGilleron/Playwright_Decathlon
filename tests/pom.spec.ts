import { test, Browser } from '@playwright/test';
import { EquivalencePartSearchBarLandingPage } from '../page_objects/equivalence_part_search_bar_landing.page.ts';
import { LandingPage } from '../page_objects/landing.page.ts';
import { SearchProductPage } from '../page_objects/search_product.page.ts';
import { Product } from '../page_objects/product.page.ts';
import { Cart } from '../page_objects/cart.page.ts';

test.describe('Landing Page Access Tests', () => {
    test('User can\'t access the landing page because he doesn\'t have access to internet', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        
        // Disable the network
        await page.route('**', route => route.abort());
        const landingPage = new LandingPage(page);

        await landingPage.open();
        await page.waitForTimeout(3000);
        await page.screenshot({ path: `./screenshots/${Date.now()}_no_internet.png` });
    });

    test('User can access the landing page because he have access to internet', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        
        const landingPage = new LandingPage(page);

        await landingPage.open();
        await page.waitForTimeout(1000);
        await page.screenshot({ path: `./screenshots/${Date.now()}_no_internet.png` });
    });
});


test('User can find products by searching and add to cart', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    const landingPage = new LandingPage(page);
    const searchProductPage = new SearchProductPage(page);
    const product = new Product(page);
    const cartPage = new Cart(page);
    
    // Open the landing page, search for a product, click on it and add it to the cart
    await landingPage.openSearchAndClick();
    await searchProductPage.clickOnProduct();
    await product.clickOnAddToCart();
    await cartPage.clickOnCartPage();

    // Do screenshot
    await page.waitForTimeout(3000);    
    await page.screenshot({ path: `./screenshots/${Date.now()}_item_add_to_cart.png` });
});

test('Equivalence partitioning of the search bar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    const equivalencePartSearchBarLandingPage = new EquivalencePartSearchBarLandingPage(page);

    await equivalencePartSearchBarLandingPage.equivalencePart();    
});


