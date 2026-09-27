class AccountPage {
    constructor(page) {
        this.page = page;

        this.loggedInUser = page.getByText(/Logged in as/);

        this.logoutButton = page.getByRole('link', {
            name: 'Logout'
        });

        this.deleteAccountButton = page.getByRole('link', {
            name: 'Delete Account'
        });

        this.accountDeletedMessage = page.getByText(
            'ACCOUNT DELETED!'
        );
    }

    async logout() {
        await this.logoutButton.click();
    }

    async deleteAccount() {
        await this.deleteAccountButton.click();
    }
}

module.exports = { AccountPage };