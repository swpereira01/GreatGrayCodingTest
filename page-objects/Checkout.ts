import {Page, expect, Locator} from '@playwright/test';
import { Homepage } from './Homepage';

export class Checkout extends Homepage {
    readonly checkoutButton: Locator;
    // proceed to checkout button
    // checkout form input boxes
    // payment button


    constructor(page: Page){
        super(page);
        this.checkoutButton = this.page.locator(".cart-button")
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }

    //function proceed to checkout
    //function to fill out checkout form
    //function to proceed to payments
}
