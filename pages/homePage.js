class HomePage {
    constructor(page) {
        this.page = page;

        this.homePageLogo = page.getByText('AutomationExercise');
        this.signupLoginButton = page.getByRole('link', {
            name: 'Signup / Login'
        });
    }

    async navigateToHomePage() {
        await this.page.goto('/');
    }

    async clickSignupLogin() {
        await this.signupLoginButton.click();
    }
}

module.exports = { HomePage };