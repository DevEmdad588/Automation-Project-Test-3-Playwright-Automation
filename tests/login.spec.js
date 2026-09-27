const { test, expect } = require('@playwright/test');

const { HomePage } = require('../pages/homePage');
const { LoginPage } = require('../pages/loginPage');
const { AccountPage } = require('../pages/accountPage');

const { validUser, invalidUser } = require('../test-data/users');


test('TC01 - Login User with correct email and password', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const accountPage = new AccountPage(page);

    // Step 1 & 2: Launch browser and navigate to URL
    await homePage.navigateToHomePage();

    // Step 3: Verify home page
    await expect(homePage.homePageLogo).toBeVisible();

    // Step 4: Click Signup / Login
    await homePage.clickSignupLogin();

    // Step 5: Verify Login to your account
    await expect(loginPage.loginTitle).toBeVisible();

    // Step 6 & 7: Login
    await loginPage.login(
        validUser.email,
        validUser.password
    );

    // Step 8: Verify successful login
    await expect(accountPage.loggedInUser).toBeVisible();

    // Step 9: Delete account
    await accountPage.deleteAccount();

    // Step 10: Verify account deleted
    await expect(
        accountPage.accountDeletedMessage
    ).toBeVisible();
});


test('TC02 - Login User with incorrect email and password', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    // Step 1 & 2
    await homePage.navigateToHomePage();

    // Step 3
    await expect(homePage.homePageLogo).toBeVisible();

    // Step 4
    await homePage.clickSignupLogin();

    // Step 5
    await expect(loginPage.loginTitle).toBeVisible();

    // Step 6 & 7
    await loginPage.login(
        invalidUser.email,
        invalidUser.password
    );

    // Step 8
    await expect(
        loginPage.loginErrorMessage
    ).toBeVisible();
});


test('TC03 - Logout User', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const accountPage = new AccountPage(page);

    // Step 1 & 2
    await homePage.navigateToHomePage();

    // Step 3
    await expect(homePage.homePageLogo).toBeVisible();

    // Step 4
    await homePage.clickSignupLogin();

    // Step 5
    await expect(loginPage.loginTitle).toBeVisible();

    // Step 6 & 7
    await loginPage.login(
        validUser.email,
        validUser.password
    );

    // Step 8
    await expect(accountPage.loggedInUser).toBeVisible();

    // Step 9
    await accountPage.logout();

    // Step 10
    await expect(loginPage.loginTitle).toBeVisible();
});