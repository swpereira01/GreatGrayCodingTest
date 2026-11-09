import {test, expect} from '@playwright/test';
import {Homepage} from '../../page-objects/Homepage';
import {Login} from '../../page-objects/LoginPage';

test.describe('Delayed Login', () => {
    let homepage: Homepage;
    let login: Login;

    test.beforeEach(async ({page}) => {
        homepage = new Homepage(page);
        login = new Login(page);
        await homepage.goto();
    })
    test('User enters in valid user name and credentials but login is delayed', async () => {
        await login.fillInDelayedUsername();
        await login.fillinPassword();
        await login.clickSignInButton();
        await login.seeCatalogPage();
    })
})