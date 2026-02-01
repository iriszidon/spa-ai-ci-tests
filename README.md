# Welcome to spa-ai-ci-tests repository :)
## Prerequisites
Install node

Install playwright by ``npm init playwright@latest``
# Install the following npm packages
``dotenv``
# How to run UI tests
## Run all the tests in a file
``
npx playwright test tests/ui/ui-herokuapp.spec.ts --headed
``
## Run the tests using a tag
i.e. tagname is @dropdown
``npx playwright test --grep @dropdown --headed``
## How to run API tests
``
run the tests by file name - npx playwright test tests/api/api-herokuapp.spec.ts 
run the tests by tag - npx playwright test --grep @api-sample
``
# How to generate/view report
To open last HTML report run in the terminal:
``npx playwright show-report``