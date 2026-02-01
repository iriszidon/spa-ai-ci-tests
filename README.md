# spa-ai-ci-tests
README must include:
● Prerequisites
● Install
● How to run UI tests
# run all the tessts in a file
npx playwright test tests/ui/ui-herokuapp.spec.ts --headed
run the tests using a tag. i.e. tagname is @dropdown
npx playwright test --grep @dropdown --headed
● How to run API tests
run the tests by file name - npx playwright test tests/api/api-herokuapp.spec.ts 
run the tests by tag - npx playwright test --grep @api-sample
● How to generate/view report
# To open last HTML report run in the terminal:
npx playwright show-report