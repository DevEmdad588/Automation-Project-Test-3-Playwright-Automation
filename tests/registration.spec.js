const { test, expect } = require('@playwright/test');

const { HomePage } = require('../pages/homePage');
const { LoginPage } = require('../pages/loginPage');

const { validUser } = require('../test-data/users');

test('TC04 - Register User with existing email', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigateToHomePage();

    await expect(homePage.homePageLogo).toBeVisible();

    await homePage.clickSignupLogin();

    await expect(loginPage.signupTitle).toBeVisible();

    await loginPage.signup(
        validUser.name,
        validUser.email
    );

    await expect(
        loginPage.existingEmailError
    ).toBeVisible();
});