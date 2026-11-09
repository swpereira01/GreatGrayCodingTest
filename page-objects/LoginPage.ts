import {expect, Locator, Page} from '@playwright/test';
import {Homepage} from './Homepage';
import dotenv from 'dotenv';

export class Login extends Homepage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly forgotPasswordLink: Locator;
    readonly invalidLogin: Locator;
    readonly catalogPage: Locator;
    readonly suspendedMessage: Locator;
    readonly resetPasswordPage: Locator;
    readonly emailInput: Locator;
    readonly sendResetButton: Locator;
    readonly backToSigninLink: Locator;
    readonly checkYourEmailMessage: Locator;
    readonly signInPage: Locator;

    constructor(page: Page){
        super(page);
        this.usernameInput = this.page.locator("[id = 'username']");
        this.passwordInput = this.page.locator("[id = 'password']");
        this.signInButton = this.page.locator("[id = 'login-submit']");
        this.forgotPasswordLink = this.page.locator(".link-reset", {hasText: "Forgot Password?"});
        this.invalidLogin = this.page.locator("text=Username and password do not match any account. Check the test accounts listed below.");
        this.catalogPage = this.page.locator(".page-title", {hasText: 'Gear For the Trail'});
        this.suspendedMessage = this.page.locator("text = This account has been suspended. Contact the trail office for help.");
        this.resetPasswordPage = this.page.locator(".login-card", {hasText: 'Reset your password'});
        this.emailInput = this.page.locator("[id = 'forgot-email']");
        this.sendResetButton = this.page.locator("[id = 'forgot-submit']");
        this.backToSigninLink = this.page.locator(".link-reset", {hasText: "Back to sign in"});
        this.checkYourEmailMessage = this.page.locator(".login-card", {hasText: 'Check your email'});
        this.signInPage = this.page.locator(".login-card", {hasText: 'Sign in'});
    }

    async fillinSuccessfulUsername(){
        await this.usernameInput.fill(process.env.NORMAL_USERNAME!);

    }
    async fillinPassword(){
        await this.passwordInput.fill(process.env.UNIVERSAL_PASSWORD!);
    }
    async  clickSignInButton(){
        await this.signInButton.click();
    }
    async seeCatalogPage(){
        await expect(this.catalogPage).toBeVisible();
    }
    async fillInLockedUsername(){
        await this.usernameInput.fill(process.env.LOCKED_USERNAME!);
    }
    async seeLockedAccountMessage(){
        await expect(this.suspendedMessage).toBeVisible();
    }
    async fillInDelayedUsername(){
        await this.usernameInput.fill(process.env.DELAYED_USERNAME!);
    }
    async enterInvalidPassword(){
        await this.passwordInput.fill("invalid_password");
    }
    async seeInvalidLoginMessage(){
        await expect(this.invalidLogin).toBeVisible();
    }
    async clickForgotPassword() {
        await this.forgotPasswordLink.click();
    }
    async seeResetPasswordPage() {
        await expect(this.resetPasswordPage).toBeVisible();
    }
    async enterInEmail(){
        await this.emailInput.fill(process.env.EMAIL!);
    }
    async clickSendResetButton() {
        await this.sendResetButton.click();
    }
    async seeCheckYourEmailMessage() {
        await expect(this.checkYourEmailMessage).toBeVisible();
    }
    async clickBackToSignInLink() {
        await this.backToSigninLink.click();
    }
    async seeSignInPage() {
        await expect(this.signInPage).toBeVisible();
    }
    async clickBackToSignIn() {
        await this.backToSigninLink.click();
    }

    async loginWorkflow() {
        await this.fillinSuccessfulUsername();
        await this.fillinPassword();
        await this.clickSignInButton()
        await this.seeCatalogPage();
    }
}
