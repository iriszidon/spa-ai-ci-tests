import { test, expect } from '@playwright/test';
import { HerokuAppHome } from '../../pages/herokuapp';
import { DropdownPage } from '../../pages/dropdown';

test.describe("Select a Dropdown Option", () => {
    let home: HerokuAppHome;
    let dropdown: DropdownPage;

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
        dropdown = new DropdownPage(page);

        // Use the Dropdown page-object methods to interact with the dropdown
        await dropdown.selectByValue('1');
        await dropdown.selectByValue('2');

        // Assert that Option 2 is selected via the Dropdown page object
        const selected = await dropdown.getSelectedValue();
        expect(selected).toBe('2');
    });
});