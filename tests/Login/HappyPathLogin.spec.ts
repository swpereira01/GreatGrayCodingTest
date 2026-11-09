import {test, expect} from '@playwright/test';
import {Homepage} from '../../page-objects/Homepage';
import {Login} from '../../page-objects/LoginPage';

test.describe('Happy Path Login', () => {
    let homepage: Homepage;
    let login: Login;

    test.beforeEach(async ({page}) => {
        homepage = new Homepage(page);
        login = new Login(page);
        await homepage.goto();
    })

    test('Successful Login when user enters valid username and password', async () => {
        await login.fillinSuccessfulUsername();
        await login.fillinPassword();
        await login.clickSignInButton();
        await login.seeCatalogPage();
    });
})