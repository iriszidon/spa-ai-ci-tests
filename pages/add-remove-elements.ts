import * as dotenv from 'dotenv';
dotenv.config();

import { Page, Locator } from '@playwright/test';

export class AddRemoveElementsPage {
    readonly page: Page;
    // Initialize from HOME_URL in .env (no fallback)
    readonly url = `${process.env.HOME_URL}/add_remove_elements/`;
    readonly addButton: Locator;
    readonly deleteButtons: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addButton = page.locator('button', { hasText: 'Add Element' });
        // Delete buttons have class 'added-manually' on this site
        this.deleteButtons = page.locator('button.added-manually');
    }

    /** Navigate to the Add/Remove Elements page */
    async goto() {
        await this.page.goto(this.url);
    }

    /** Click the "Add Element" button count times (default 1) */
    async addElements(count = 1) {
        for (let i = 0; i < count; i++) {
            await this.addButton.click();
        }
    }

    /** Click the delete button at a zero-based index */
    async deleteAt(index: number) {
        await this.deleteButtons.nth(index).click();
    }

    /** Delete all present delete buttons */
    async deleteAll() {
        const count = await this.getDeleteButtonsCount();
        for (let i = 0; i < count; i++) {
            // always click the first since list shrinks
            await this.deleteButtons.first().click();
        }
    }

    /** Return the number of "Delete" buttons currently present */
    async getDeleteButtonsCount(): Promise<number> {
        return await this.deleteButtons.count();
    }
}