import { test } from '@playwright/test';
import { LandingPage } from '../page_objects/landing.page.ts';
import { SearchProductPage } from '../page_objects/search_product.page.ts';
import { Product } from '../page_objects/product.page.ts';
import { Cart } from '../page_objects/cart.page.ts';

test('User can find products by searching and add to cart', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    const landingPage = new LandingPage(page);
    const searchProductPage = new SearchProductPage(page);
    const product = new Product(page);
    const cartPage = new Cart(page);
    

    await landingPage.openSearchAndClick();
    await searchProductPage.clickOnProduct();
    await product.clickOnAddToCart();
    await cartPage.clickOnCartPage();
});