# GitHub Copilot Code Review Instructions

These instructions apply to **all code reviews** performed by GitHub Copilot on this repository.
Detailed, path-scoped rules live in `.github/instructions/` and are automatically applied to matching files.

---

## Scope: e2e-tests/** (QA Test Files)

When reviewing any file under `e2e-tests/`, enforce every rule from
`.github/instructions/qa-coding-guidelines.instructions.md`. A summary of the **non-negotiable** rules is below.

### 1. Selector Standards
- **BLOCK** any selector that uses a CSS class (`.locator('.myClass')`), CSS id (`#id`), or XPath (`//tag`).
- **REQUIRE** all element lookups to use `data-test-id` attributes:
  ```ts
  // ✅ Correct
  page.locator('[data-test-id="submit-button"]')

  // ❌ Blocked — CSS class selector
  page.locator('.submit-btn')

  // ❌ Blocked — XPath selector
  page.locator('//button[@type="submit"]')
  ```

### 2. Async Handling
- **REQUIRE** every test callback to be declared `async`.
- **REQUIRE** every browser interaction (`click`, `fill`, `goto`, `waitFor*`, etc.) to be preceded by `await`.
- **BLOCK** floating Promises (a browser-API call without `await` on the same line).

### 3. Wait Strategies
- **BLOCK** `setTimeout`, `sleep`, or any fixed numeric delay inside test code.
- **REQUIRE** dynamic waits (`waitForSelector`, `waitForLoadState`, `waitForResponse`, `expect(...).toBeVisible()`, etc.).

### 4. File & Test Naming
- **REQUIRE** test files to end with `.spec.ts` (e.g., `login.spec.ts`).
- **REQUIRE** test descriptions (`test('...')`) to be descriptive sentences that explain the scenario.

### 5. Code Quality
- **BLOCK** magic numbers or magic strings. Extract them to named constants or a config.
- **BLOCK** hardcoded credentials (passwords, tokens, API keys) in any form.
- **REQUIRE** common UI interactions to be extracted into page-object or helper functions rather than repeated inline.

### 6. Test Data Management
- **BLOCK** credentials or PII committed in test files.
- **REQUIRE** environment variables or a secrets vault for any sensitive data.
- **REQUIRE** test data cleanup (teardown steps or `afterEach`/`afterAll` hooks) when tests create persistent state.

### 7. Performance Considerations
- **REQUIRE** tests to be independent so they can run in parallel (`--workers` flag safe).
- Flag any test that creates browser state shared with sibling tests as a **high-severity issue**.

---

## Scope: **/*.{ts,js,tsx,jsx} (All TypeScript / JavaScript Files)

Enforce rules from `.github/instructions/code-quality.instructions.md`:

- **BLOCK** `eval()` and `new Function(...)` — security risk.
- **BLOCK** `var` declarations — use `const` or `let`.
- **BLOCK** the `any` type in TypeScript without an explicit suppression comment explaining why.
- **REQUIRE** return types on all exported functions.
- **REQUIRE** `const` by default; only use `let` when reassignment is necessary.
- **FLAG** functions with more than 5 parameters — suggest an options object pattern.
- **FLAG** deep nesting (> 3 levels) — suggest early returns / guard clauses.

---

## Scope: **/*security*.{ts,js,spec.ts} (Security Test Files)

Enforce rules from `.github/instructions/security-testing.instructions.md`:

- **REQUIRE** tests for SQL injection, XSS, and command injection at input boundaries.
- **REQUIRE** authentication and session management tests to cover invalid/expired tokens.
- **BLOCK** any hardcoded secret, token, or password.
- **REQUIRE** HTTPS-only assertions in network tests.

---

## Scope: **/*performance*.{ts,js,spec.ts} (Performance Test Files)

Enforce rules from `.github/instructions/performance-testing.instructions.md`:

- **REQUIRE** baseline metrics to be defined before asserting thresholds.
- **REQUIRE** 90th/95th/99th percentile measurements (not averages alone).
- **BLOCK** performance tests that share mutable state across concurrent workers.

---

## General Code Review Behaviour

1. **Severity labelling**: Mark violations as `🔴 BLOCKING` (must fix before merge) or `🟡 SUGGESTION` (should fix, not blocking).
2. **Inline comments**: Place review comments on the exact line of the violation, not as a summary-only note.
3. **Explain the rule**: Every comment must reference the specific guideline it enforces (e.g., *"qa-coding-guidelines: No hardcoded delays — use `waitForSelector` instead."*).
4. **Don't duplicate passing checks**: If the existing workflow (`qa-standards-check.yml`) already flags an issue with a CI error, note it but do not re-raise it as a blocking comment.
5. **Praise good patterns**: When a PR correctly uses `data-test-id` selectors, proper `async/await`, or page-object abstraction, acknowledge it with a positive comment.
