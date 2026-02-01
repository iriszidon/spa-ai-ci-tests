import { test, expect } from '@playwright/test';


test.describe("Select a Dropdown Option", () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to the website before each test
        await page.goto('https://the-internet.herokuapp.com');
    });

    test('Dropdown List - Select Option 2', {tag: '@dropdown'}, async ({ page }) => {
        // Click the 'Dropdown List' link
        await page.click('a[href="/dropdown"]');

        // Get the dropdown element
        const dropdown = page.locator('#dropdown');

        // Select Option 1
        await dropdown.selectOption('1');

        // Select Option 2
        await dropdown.selectOption('2');

        // Assert that Option 2 is selected
        await expect(dropdown).toHaveValue('2');
    });
});