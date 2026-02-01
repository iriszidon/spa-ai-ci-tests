import { test, expect } from '@playwright/test';
import { HerokuAppHome } from '../../pages/herokuapp';

test.describe("Select a Dropdown Option", () => {
    let home: HerokuAppHome;

    test.beforeEach(async ({ page }) => {
        // Use the HerokuApp page object to navigate to the site
        home = new HerokuAppHome(page);
        await home.goto();
    });

    test('Dropdown List - Select Option 2', { tag: '@dropdown' }, async ({ page }, testInfo) => {
        // Add repository-specific tag for filtering
        testInfo.annotations.push({ type: 'tag', description: 'herokuapp' });

        // Use the page object to navigate to the dropdown example
        await home.navigateToDropdown();

        // Use the page-object methods to interact with the dropdown
        await home.selectDropdownByValue('1');
        await home.selectDropdownByValue('2');

        // Assert that Option 2 is selected via the page object
        const selected = await home.getSelectedDropdownValue();
        expect(selected).toBe('2');
    });
});