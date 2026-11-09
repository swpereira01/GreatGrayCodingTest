import {test, expect} from '@playwright/test';
import {Homepage} from '../../page-objects/Homepage';
import {Login} from '../../page-objects/LoginPage';

test.describe('Locked Account Login', () => {
    let homepage: Homepage;
    let login: Login;

    test.beforeEach(async ({page}) => {
        homepage = new Homepage(page);
        login = new Login(page);
        await homepage.goto();
    })

    test('Failed login when user enters in credentials from a locked account', async () => {
        await login.fillInLockedUsername();
        await login.fillinPassword();
        await login.clickSignInButton();
        await login.seeLockedAccountMessage();
    });

})