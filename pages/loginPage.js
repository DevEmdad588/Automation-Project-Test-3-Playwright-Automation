class LoginPage {
    constructor(page) {
        this.page = page;

        this.loginTitle = page.getByText('Login to your account');

        this.loginEmail = page.locator(
            'input[data-qa="login-email"]'
        );

        this.loginPassword = page.locator(
            'input[data-qa="login-password"]'
        );

        this.loginButton = page.locator(
            'button[data-qa="login-button"]'
        );

        this.loginErrorMessage = page.getByText(
            'Your email or password is incorrect!'
        );

        this.signupTitle = page.getByText('New User Signup!');

        this.signupName = page.locator(
            'input[data-qa="signup-name"]'
        );

        this.signupEmail = page.locator(
            'input[data-qa="signup-email"]'
        );

        this.signupButton = page.locator(
            'button[data-qa="signup-button"]'
        );

        this.existingEmailError = page.getByText(
            'Email Address already exist!'
        );
    }

    async login(email, password) {
        await this.loginEmail.fill(email);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
    }

    async signup(name, email) {
        await this.signupName.fill(name);
        await this.signupEmail.fill(email);
        await this.signupButton.click();
    }
}

module.exports = { LoginPage };