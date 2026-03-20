---
applyTo: "e2e-tests/**/*.ts"
---

# E2E TypeScript Guidelines (Sample)

- **Selector Standard**: Always use `data-test-id` for element selectors. Do not use fragile CSS classes or XPath.
- **Async Handling**: All browser interactions must be awaited.
- **No Hardcoded Delays**: Use dynamic wait conditions (e.g., `waitForSelector`) instead of `setTimeout` or `sleep`.
- **File Naming**: Test files must named with a `.spec.ts` suffix (e.g., `login.spec.ts`).
- **Test Structure**: Use `describe` blocks to group related tests and `it` blocks for individual test cases.
