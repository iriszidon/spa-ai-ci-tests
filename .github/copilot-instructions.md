# GitHub Copilot instructions for this repository ✅

**Repository snapshot**
- Only discoverable file: `README.md` which contains the project title (`spa-ai-ci-tests`) and author line (`By Iris Opper`). No source code, tests, CI workflows, or language-specific config files were found.

**Primary goal for an AI coding agent**
- Get the repository to a minimally useful, discoverable state so human contributors can iterate quickly. This means: identify the intended language/stack, propose a minimal scaffold, add CI for tests, and include a small sample test and README additions.

---

## Quick actionable checklist (do these first) 🔧
1. Inspect the repo for language indicators (`package.json`, `pyproject.toml`, `setup.py`, `requirements.txt`, `pom.xml`, `go.mod`, `Cargo.toml`, etc.). Report findings in a short summary comment.
2. If no language files are present (current state), open an issue titled `Clarify language/stack and CI requirements` and ask the repo owner (mention "Iris Opper" from `README.md`) 2 questions:
   - Which language(s) or framework(s) should this repo target?
   - Which CI platform and test command should be used (e.g., `pytest`, `npm test`, `dotnet test`)?
3. Propose one of two minimal scaffolds in a PR (pick the stack based on author's answer):
   - Python scaffold: `src/`, `tests/`, `pyproject.toml` (or `requirements.txt`), sample `tests/test_example.py` using `pytest`.
   - Node scaffold: `src/`, `tests/`, `package.json`, `jest` or `mocha` sample test.
4. Add a CI workflow at `.github/workflows/ci.yml` that runs the chosen test command and fails fast on errors.

## Conventions & patterns to follow (if/when author confirms stack) 📋
- Place production code under `src/` and tests under `tests/`.
- Test files should be named to match test runner expectations (e.g., `test_*.py` for `pytest`, `*.test.js` for Jest).
- Keep PRs small and focused: one feature or scaffold piece per PR.

## Examples (copy into PR templates / commits) ✍️
- Minimal `pytest` test: `tests/test_example.py` containing `def test_placeholder(): assert True`
- Minimal `package.json` script: `"test": "jest --runInBand"`
- Minimal CI step (YAML): run the matrix for the chosen runtime (Python or Node), install deps, run test script, upload test results if possible.

## Communication and discovery rules 🤝
- If an agent is uncertain about any design choice, create an issue instead of guessing implementation details.
- Refer to `README.md` and the author line (`By Iris Opper`) when requesting clarification.
- When proposing scaffolding, include estimated files changed and a short rationale in the PR description.

## What NOT to do ❌
- Do not add large feature implementations without owner approval.
- Do not assume a language or CI provider—ask first.

---

If any part of the repo is ambiguous or you need permission to proceed, add an issue and request explicit confirmation from the repo owner. After acting, leave clear, small commits and a brief PR description describing the intent.

---

Please review and tell me any missing details you'd like included or examples relevant to your preferred language/CI provider.