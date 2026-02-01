import * as dotenv from 'dotenv';
dotenv.config();

import { Page, Locator } from '@playwright/test';

export class HerokuAppHome {
    readonly page: Page;
    // Initialize from HOME_URL in .env, fallback to the original URL
    readonly url = process.env.HOME_URL ?? 'https://the-internet.herokuapp.com';
    readonly dropdownLink: Locator;
    readonly dropdown: Locator;
    readonly addRemoveLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dropdownLink = page.locator('a[href="/dropdown"]');
        this.dropdown = page.locator('#dropdown');
        this.addRemoveLink = page.locator('a[href="/add_remove_elements/"]');
    }

    /** Navigate to the home page URL */
    async goto() {
        await this.page.goto(this.url);
    }

    /** Convenience to click the dropdown example link */
    async navigateToDropdown() {
        await this.dropdownLink.click();
    }

    /** Convenience to click the Add/Remove Elements example link */
    async navigateToAddRemoveElements() {
        await this.addRemoveLink.click();
    }

    /** Select a dropdown option by value (e.g., '1', '2') */
    async selectDropdownByValue(value: string) {
        await this.dropdown.selectOption(value);
    }

    /** Return the currently selected value of the dropdown */
    async getSelectedDropdownValue(): Promise<string> {
        return await this.dropdown.inputValue();
    }
}