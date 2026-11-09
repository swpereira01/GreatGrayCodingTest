import {test, expect} from '@playwright/test';
import {Homepage} from '../../page-objects/Homepage';
import {Login} from '../../page-objects/LoginPage';

test.describe('Forgot Password Workflow', () => {
    let homepage: Homepage;
    let login: Login;

    test.beforeEach(async ({page}) => {
        homepage = new Homepage(page);
        login = new Login(page);
        await homepage.goto();
    })

    test('User performs the workflow to reset password and goes back to sign in page', async () => {
        await login.clickForgotPassword();
        await login.seeResetPasswordPage();
        await login.enterInEmail();
        await login.clickSendResetButton();
        await login.seeCheckYourEmailMessage();
        await login.clickBackToSignIn();
        await login.seeSignInPage();
    })
    test('User clicks on reset password email and clicks back into sign in page', async () => {
        await login.clickForgotPassword();
        await login.seeResetPasswordPage()
        await login.clickBackToSignInLink();
        await login .seeSignInPage();
    })


})