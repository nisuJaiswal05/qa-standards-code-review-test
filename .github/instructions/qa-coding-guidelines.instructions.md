---
applyTo: "e2e-tests/**/*.ts"
---

# E2E TypeScript Guidelines

## Selector Standards

- **Use data-test-id**: Always use `data-test-id` attributes for element selectors
- **No CSS classes**: Do not use fragile CSS classes or XPath selectors
- **Semantic selectors**: Use semantic selectors like `getByRole()`, `getByText()`, `getByLabel()` when appropriate

## Async Handling

- **Await all interactions**: All browser interactions must be awaited
- **Proper chaining**: Chain async operations properly to avoid race conditions
- **Error handling**: Include proper error handling for async operations

## Wait Strategies

- **No hardcoded delays**: Never use `setTimeout`, `sleep`, or hardcoded wait times
- **Dynamic waits**: Use `waitForSelector`, `waitForLoadState`, or other dynamic wait conditions
- **Timeout configuration**: Set appropriate timeouts for different operations

## File Organization

- **Naming convention**: Test files must be named with `.spec.ts` suffix (e.g., `login.spec.ts`)
- **Test structure**: Group related tests in logical files
- **Descriptive names**: Use descriptive test names that explain what is being tested

## Code Quality

- **No magic numbers**: Avoid hardcoded values, use constants or configuration
- **Clean selectors**: Keep selectors simple and maintainable
- **Reusable functions**: Extract common operations into reusable functions
- **Proper assertions**: Use specific assertions with clear expectations

## Test Data Management

- **Environment-specific**: Use environment-specific test data
- **No hardcoded credentials**: Never commit actual credentials to test files
- **Data cleanup**: Ensure test data is cleaned up after tests run

## Performance Considerations

- **Parallel execution**: Design tests to run in parallel without conflicts
- **Resource cleanup**: Clean up browser resources properly
- **Optimized selectors**: Use efficient selectors that don't impact performance

## Security Testing

- **Input validation**: Test for proper input validation and sanitization
- **Authentication flows**: Test authentication and authorization properly
- **Sensitive data**: Ensure no sensitive data is exposed in test code
