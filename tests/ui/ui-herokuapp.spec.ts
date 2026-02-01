import { test, expect } from '@playwright/test';
import { HerokuAppHome } from '../../pages/herokuapp';
import { DropdownPage } from '../../pages/dropdown';
import { AddRemoveElementsPage } from '../../pages/add-remove-elements';
import { DynamicContentPage } from '../../pages/dynamic-content';

test.describe("Test heroku app page", () => {
    let home: HerokuAppHome;
    let dropdown: DropdownPage;

    test.beforeEach(async ({ page }) => {
        // Use the HerokuApp page object to navigate to the site
        home = new HerokuAppHome(page);
        await home.goto();
    });

    test('Dropdown List - Select Option 2', { tag: '@dropdown' }, async ({ page }, testInfo) => {
        // Add repository-specific tag for filtering
        testInfo.annotations.push({ type: 'tag', description: '1 happy path end-to-end flow' });

        // Use the page object to navigate to the dropdown example
        await home.navigateToDropdown();
        dropdown = new DropdownPage(page);

        // Use the Dropdown page-object methods to interact with the dropdown
        await dropdown.selectByValue('1');
        await dropdown.selectByValue('2');

        // Assert that Option 2 is selected via the Dropdown page object
        const selected = await dropdown.getSelectedValue();
        expect(selected).toBe('2');
        // Try this to see a failure
        // expect(selected).toBe('9'); 
    });

        test('Add Remove Elements - Add elements', { tag: '@add-remove-elements' }, async ({ page }, testInfo) => {
        // Add repository-specific tag for filtering
        testInfo.annotations.push({ type: 'tag', description: 'Add 5 elements to the page' });

        // Navigate to the Add/Remove Elements example and exercise it
        await home.navigateToAddRemoveElements();
        const addRemove = new AddRemoveElementsPage(page);

        // Add 2 elements
        await addRemove.addElements(5);

        // Verify the number of delete buttons is NOT 3
        const count = await addRemove.getDeleteButtonsCount();
        expect(count).toBe(5);
    });

    test('Add Remove Elements - Delete elements', { tag: '@add-remove-elements' }, async ({ page }, testInfo) => {
        // Add repository-specific tag for filtering
        testInfo.annotations.push({ type: 'tag', description: 'Add 5 elements to the page and delete one element' });

        // Navigate to the Add/Remove Elements example and exercise it
        await home.navigateToAddRemoveElements();
        const addRemove = new AddRemoveElementsPage(page);

        // Add 2 elements
        await addRemove.addElements(5);
        await addRemove.deleteAt(4);

        // Verify the number of delete buttons is NOT 3
        const count = await addRemove.getDeleteButtonsCount();
        expect(count).toBe(4);
    });

    test('Add Remove Elements - Negative Test', { tag: '@add-remove-elements' }, async ({ page }, testInfo) => {
        // Add repository-specific tag for filtering
        testInfo.annotations.push({ type: 'tag', description: '1 negative case' });

        // Navigate to the Add/Remove Elements example and exercise it
        await home.navigateToAddRemoveElements();
        const addRemove = new AddRemoveElementsPage(page);

        // Add 2 elements
        await addRemove.addElements(2);

        // Verify the number of delete buttons is NOT 3
        const count = await addRemove.getDeleteButtonsCount();
        expect(count).not.toBe(3);
    });

    test('Dynamic Content - change the text', { tag: '@dynamic-content' }, async ({ page }, testInfo) => {
        // Add repository-specific tag for filtering
        testInfo.annotations.push({ type: 'tag', description: 'test that validates state change' });

        // Number of rows to sample
        const SAMPLE_ROWS = 3;

        // Navigate to the Dynamic Content example and exercise it
        await home.navigateToDynamicContent();
        const dynamicContent = new DynamicContentPage(page);

        // Ensure there are at least SAMPLE_ROWS rows to sample
        const rowsCount = await dynamicContent.getRowsCount();
        expect(rowsCount).toBeGreaterThanOrEqual(SAMPLE_ROWS);

        // Read the first SAMPLE_ROWS text columns
        const readCount = Math.min(SAMPLE_ROWS, rowsCount);
        const beforeTexts: string[] = [];
        for (let i = 0; i < readCount; i++) {
            beforeTexts.push(await dynamicContent.getRowText(i));
        }

        // Trigger content refresh
        await dynamicContent.clickClickHere();

        // Read the first SAMPLE_ROWS text columns again
        const afterTexts: string[] = [];
        for (let i = 0; i < readCount; i++) {
            afterTexts.push(await dynamicContent.getRowText(i));
        }

        // Verify at least one column changed
        const atLeastOneChanged = afterTexts.some((t, i) => t !== beforeTexts[i]);
        expect(atLeastOneChanged).toBeTruthy();
    });

});