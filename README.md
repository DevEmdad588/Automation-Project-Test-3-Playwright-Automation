# Automation Project Test 3 - Playwright Automation

A web automation testing project built with **Playwright** and **JavaScript** to automate key user authentication scenarios on [Automation Exercise](https://www.automationexercise.com/).

The project follows the **Page Object Model (POM)** design pattern to keep test cases maintainable, reusable, and easy to understand.

---

## Project Overview

This project automates the following user authentication scenarios:

* Login with valid email and password
* Login with invalid email and password
* Logout after successful login
* Registration attempt using an existing email address

The valid test account was **manually registered on the website before automation**, as required by the test assignment.

---

## Tech Stack

* **Automation Framework:** Playwright
* **Programming Language:** JavaScript
* **Runtime:** Node.js
* **Design Pattern:** Page Object Model (POM)
* **Test Reporter:** Playwright HTML Reporter
* **Browser:** Chromium

---

## Project Structure

```text
automation-project-test3/
│
├── pages/
│   ├── homePage.js
│   ├── loginPage.js
│   └── accountPage.js
│
├── tests/
│   ├── login.spec.js
│   └── registration.spec.js
│
├── test-data/
│   └── users.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

### Page Objects

#### `homePage.js`

Contains locators and actions related to the Automation Exercise home page.

Responsibilities include:

* Navigate to the website
* Verify the home page
* Click the `Signup / Login` link

#### `loginPage.js`

Contains locators and actions related to the login and signup sections.

Responsibilities include:

* Verify the login section
* Enter login credentials
* Submit login
* Verify invalid login error
* Enter signup information
* Verify existing email error

#### `accountPage.js`

Contains locators and actions available after successful authentication.

Responsibilities include:

* Verify logged-in user
* Logout
* Delete account
* Verify account deletion

---

## Test Cases

### TC01 - Login User with Correct Email and Password

**Objective:** Verify that a registered user can successfully log in.

**Test Flow:**

1. Launch browser
2. Navigate to Automation Exercise
3. Verify that the home page is visible
4. Click `Signup / Login`
5. Verify `Login to your account`
6. Enter valid email and password
7. Click `Login`
8. Verify `Logged in as username`
9. Click `Delete Account`
10. Verify `ACCOUNT DELETED!`

**Expected Result:**
The user should be successfully logged in and the account should be deleted successfully.

---

### TC02 - Login User with Incorrect Email and Password

**Objective:** Verify that login fails when invalid credentials are provided.

**Test Flow:**

1. Launch browser
2. Navigate to Automation Exercise
3. Verify that the home page is visible
4. Click `Signup / Login`
5. Verify `Login to your account`
6. Enter incorrect email and password
7. Click `Login`
8. Verify `Your email or password is incorrect!`

**Expected Result:**
The user should not be logged in and the appropriate error message should be displayed.

---

### TC03 - Logout User

**Objective:** Verify that a successfully logged-in user can log out.

**Test Flow:**

1. Launch browser
2. Navigate to Automation Exercise
3. Verify that the home page is visible
4. Click `Signup / Login`
5. Verify `Login to your account`
6. Enter valid email and password
7. Click `Login`
8. Verify `Logged in as username`
9. Click `Logout`
10. Verify that the user is navigated to the login page

**Expected Result:**
The user should be successfully logged out and redirected to the login page.

---

### TC04 - Register User with Existing Email

**Objective:** Verify that registration is prevented when an already registered email address is used.

**Test Flow:**

1. Launch browser
2. Navigate to Automation Exercise
3. Verify that the home page is visible
4. Click `Signup / Login`
5. Verify `New User Signup!`
6. Enter name and an already registered email address
7. Click `Signup`
8. Verify `Email Address already exist!`

**Expected Result:**
The registration attempt should be rejected and the appropriate error message should be displayed.

---

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* VS Code or another code editor

Verify Node.js installation:

```bash
node -v
```

Verify npm installation:

```bash
npm -v
```

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project

```bash
cd automation-project-test3
```

### 3. Install project dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

---

## Test Data

Before executing the automation:

1. Manually create a user account on Automation Exercise.
2. Use the registered email and password for the valid login test.
3. The same registered email is used for the existing-email registration test.
4. Invalid credentials are used for the negative login test.

---

## Running the Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/login.spec.js
```

```bash
npx playwright test tests/registration.spec.js
```

### Run a specific test by name

```bash
npx playwright test -g "TC01"
```

---

## HTML Test Report

After test execution, open the Playwright HTML report:

```bash
npx playwright show-report
```

The report provides:

* Test execution status
* Passed/failed tests
* Test duration
* Error details
* Screenshots and videos when available

---

## Automation Approach

The project follows the **Page Object Model (POM)** approach.

The main objective of using POM is to separate:

* **Test logic**
* **Page locators**
* **Page actions**
* **Test data**

This makes the automation suite easier to:

* Maintain
* Reuse
* Debug
* Extend
* Understand

For example, instead of writing login locators directly inside every test, the login functionality is handled through:

```javascript
await loginPage.login(email, password);
```

This keeps the test cases clean and focused on the actual test scenario.

---

## Locator Strategy

The automation primarily uses reliable Playwright locators and application-specific attributes such as:

```javascript
getByRole()
```

and:

```javascript
[data-qa="..."]
```

Examples:

```javascript
page.getByRole('link', { name: 'Signup / Login' });
```

```javascript
page.locator('input[data-qa="login-email"]');
```

```javascript
page.locator('button[data-qa="login-button"]');
```

This helps reduce dependency on fragile CSS selectors.

---

## Test Execution

The test suite is configured to run with:

```text
Browser: Chromium
Execution Mode: Headed
Reporter: HTML
Screenshot: On failure
Video: On failure
```

---

## Application Under Test

**Automation Exercise**

https://www.automationexercise.com/

---

## Author

**Emdad Hossain**

QA / SQA Engineer | Manual Testing | API Testing | Playwright Automation

GitHub:
https://github.com/DevEmdad588

LinkedIn:
https://www.linkedin.com/in/emdad-hossain-a9b851280/

---
