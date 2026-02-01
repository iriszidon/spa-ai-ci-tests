# Test Plan for spa-ai-ci-tests

## What you chose to automate and why
## What you intentionally didn’t automate and why
## Risks/assumptions
Assuming the 3rd party api and website are up and running.

Assuming that the urls in .env file are valid.

In case of changes, tests might fail.
## How to run locally + in CI
Please see instructions in README.md file
## How you approached stability (timeouts, retries, selectors, test data)
Added slow mode for human convenience.

Added retries in playwright.config.ts when run in CI, but not for local run.

