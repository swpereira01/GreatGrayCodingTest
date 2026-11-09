import {Page, expect, Locator} from '@playwright/test';
import { Homepage } from './Homepage';

export class Catalog extends Homepage {
    readonly promoModal: Locator;
    readonly promoCode: Locator;
    readonly startShoppingButton: Locator;
    readonly search: Locator;
    readonly sortDropdown: Locator;

    constructor(page: Page){
        super(page);
        this.promoModal = this.page.locator('.promo-modal');
        this.promoCode = this.promoModal.locator('.promo-code', {hasText : "TRAILHEAD10"});
        this.startShoppingButton = this.promoModal.getByRole('button').filter({hasText: "Start shopping"});
        this.search = this.page.locator('[id="search-input"]');
        this.sortDropdown = this.page.locator('[id="sort-select"]')
    }

    async clickToStartShopping(){
        this.startShoppingButton.click();
    }
    async clickOnFilter(filter: string){
        let category = filter
        let chooseCategory =  this.page.locator(`[data-category="${category}"]`)
        await chooseCategory.click();
    }
    async addItemToCart(item: String){
        let catalogItem = item;
        let addItem = this.page.locator(`[data-id="${catalogItem}"]`)
        await addItem.click();
    }

    //If there was more time I would add functions to search and sort the catalog page

}
