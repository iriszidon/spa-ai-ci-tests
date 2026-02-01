# Welcome to spa-ai-ci-tests repository :)
This test suite contains UI tests and api tests.
- UI website is ``https://the-internet.herokuapp.com``
- API URL is ``https://jsonplaceholder.typicode.com/``
- Videos and screenshots are produces in case of a failure.
## Prerequisites
Install node

Install playwright by 
``npm init playwright@latest``

## Install the following npm packages
``npm install dotenv``
# How to run UI tests
## Run all the tests in a file
``npx playwright test tests/ui/ui-herokuapp.spec.ts --headed``

## Run the tests using a tag
i.e. tagname is @dropdown

``npx playwright test --grep @dropdown --headed``
# How to run API tests

## Run the tests by file name 

``npx playwright test tests/api/api-herokuapp.spec.ts ``

## Run the tests by tag 

``npx playwright test --grep @api-sample``

## How to generate/view report
To open last HTML report run in the terminal:
``npx playwright show-report``

### Run tests in parallel locally
In file playwright.config.ts, edit the workers line to be

``workers: process.env.CI ? 1 : undefined,``


instead of

``workers: process.env.CI ? 1 : 1,``