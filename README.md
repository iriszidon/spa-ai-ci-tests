# spa-ai-ci-tests
README must include:
● Prerequisites
● Install
● How to run UI tests
run all the tessts in a file
# npx playwright test tests/ui/ui-herokuapp.spec.ts --headed
run the tests using a tag. i.e. tagname is @dropdown
npx playwright test --grep @dropdown --headed
● How to run API tests
npx playwright test tests/api/api-herokuapp.spec.ts 
● How to generate/view report