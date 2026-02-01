import { Page, Locator } from '@playwright/test';

export class DynamicContentPage {
    readonly page: Page;
    readonly url = 'https://the-internet.herokuapp.com/dynamic_content';
    readonly rows: Locator;
    readonly images: Locator;
    readonly clickHereLink: Locator;

    constructor(page: Page) {
        this.page = page;
        // Rows that contain image + content
        this.rows = page.locator('#content .row');
        // Images inside the content rows
        this.images = page.locator('#content .row img');
        // "click here" link that reloads/updates content
        this.clickHereLink = page.locator('a', { hasText: 'click here' });
    }

    /** Navigate to the dynamic content page */
    async goto() {
        await this.page.goto(this.url);
    }

    /** Click the "click here" link to refresh content */
    async clickClickHere() {
        await this.clickHereLink.click();
    }

    /** Return number of content rows on the page */
    async getRowsCount(): Promise<number> {
        return await this.rows.count();
    }

    /** Return the text content of a row (zero-based index) */
    async getRowText(index: number): Promise<string> {
        return await this.rows.nth(index).innerText();
    }

    /** Return the src attribute for the image at the given row index */
    async getImageSrcAt(index: number): Promise<string | null> {
        return await this.images.nth(index).getAttribute('src');
    }

    /** Return list of all image src values currently shown */
    async getAllImageSrcs(): Promise<(string | null)[]> {
        const srcs: (string | null)[] = [];
        const count = await this.images.count();
        for (let i = 0; i < count; i++) {
            srcs.push(await this.images.nth(i).getAttribute('src'));
        }
        return srcs;
    }
}