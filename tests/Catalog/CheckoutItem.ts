import {test} from '@playwright/test';
import { Homepage } from '../../page-objects/Homepage';
import { Login } from '../../page-objects/LoginPage';
import { Catalog } from '../../page-objects/Catalog';
import { Checkout } from '../../page-objects/Checkout';
import { beforeEach } from 'node:test';

test.describe('UUser Sucessfully Adds Item to Cart', async () =>{
    let homepage: Homepage
    let login: Login
    let catalog: Catalog
    let checkout: Checkout

      test.beforeEach(async ({page}) => {
        homepage = new Homepage(page);
        login = new Login(page);
        catalog = new Catalog(page);
        checkout = new Checkout(page);
        await homepage.goto();
        await login.loginWorkflow();
    })

    test('User Successfully Adds Item to Cart and Checks out', async () => {
        await catalog.clickToStartShopping();
        await catalog.clickOnFilter("Cookware");
        await catalog.addItemToCart("Bowl");
        //click go to checkout
        // click proceed to checkout
        //checkout form
        //payment
    })
})
