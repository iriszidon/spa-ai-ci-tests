## Test Plan for spa-ai-ci-tests
This test suite contains UI tests and api tests.
- UI website is ``https://the-internet.herokuapp.com``
- API URL is ``https://jsonplaceholder.typicode.com/``
### Automated the following features
The following pages were automates in the UI tests:

- Dropdown
- Add elements
- Remove elements
- Change of state

All of those features are sucessful candidates for UI test and have measurable outcomes.

### Intentionally didn’t automate the following features
Due to time limitations the rest of the featurtes were not automated.

### Risks/assumptions
- Assuming the 3rd party api and website are up and running.
- Assuming that the urls in .env file are valid.
- In case of changes, tests might fail.
### How to run locally + in CI
Please see instructions in README.md file
### How you approached stability (timeouts, retries, selectors, test data)
- Added slow mode for human convenience.
- Added retries in playwright.config.ts when run in CI, but not for local run.
- Added an api test driven test since it is a good practice when testing a data oriented features.

