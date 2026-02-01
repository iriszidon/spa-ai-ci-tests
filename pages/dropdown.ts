import { Page, Locator } from '@playwright/test';

export class DropdownPage {
    readonly page: Page;
    readonly dropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dropdown = page.locator('#dropdown');
    }

    /** Select a dropdown option by value (e.g., '1', '2') */
    async selectByValue(value: string) {
        await this.dropdown.selectOption(value);
    }

    /** Return the currently selected value of the dropdown */
    async getSelectedValue(): Promise<string> {
        return await this.dropdown.inputValue();
    }
}