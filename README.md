# QA Standards Code Review System

This project implements an automated code review system using GitHub Copilot Review Action with markdown-based rule files. The system automatically checks pull requests against defined quality standards.

## How It Works

1. **PR Creation**: When a pull request is created or updated, GitHub workflows automatically trigger
2. **Rule Processing**: GitHub Copilot Review Action reads markdown rule files from `.github/instructions/`
3. **Automated Review**: The action reviews changed code against the defined rules
4. **Feedback**: Review comments are automatically posted on the PR with violations and suggestions

## Rule Files

### E2E Testing Standards
- **File**: `.github/instructions/qa-coding-guidelines.instructions.md`
- **Applies to**: `e2e-tests/**/*.ts`
- **Covers**: Selector standards, async handling, wait strategies, file organization, code quality, test data management, performance, and security

### General Code Quality
- **File**: `.github/instructions/code-quality.instructions.md`
- **Applies to**: `**/*.{ts,js,tsx,jsx}`
- **Covers**: Clean code principles, TypeScript standards, imports/exports, function standards, naming conventions, code structure, performance, and security

### Performance Testing
- **File**: `.github/instructions/performance-testing.instructions.md`
- **Applies to**: `**/*performance*.{ts,js,spec.ts}`
- **Covers**: Test design, load testing, response times, resource monitoring, frontend/backend performance, regression testing, data management, and reporting

### Security Testing
- **File**: `.github/instructions/security-testing.instructions.md`
- **Applies to**: `**/*security*.{ts,js,spec.ts}`
- **Covers**: Authentication, authorization, input validation, data protection, API security, session security, error handling, cryptography, network security, security headers, and vulnerability scanning

## Workflows

### E2E QA Check
- **File**: `.github/workflows/e2e-qa-check.yml`
- **Triggers**: On PRs with changes to `e2e-tests/**`
- **Action**: Reviews E2E test files against E2E standards

### Comprehensive QA Check
- **File**: `.github/workflows/comprehensive-qa-check.yml`
- **Triggers**: On all PRs to main/develop branches
- **Actions**: 
  - Always runs E2E and code quality checks
  - Conditionally runs performance checks for performance-related files
  - Conditionally runs security checks for security-related files

## Example Violations

The system will automatically catch violations like:

### E2E Testing Violations
```typescript
// ❌ VIOLATION: Using CSS class instead of data-test-id
const usernameInput = page.locator(".input-field-login");

// ❌ VIOLATION: Using hardcoded delay
await new Promise((resolve) => setTimeout(resolve, 5000));

// ✅ COMPLIANT: Using data-test-id
const usernameInput = page.locator("[data-test-id='username-input']");

// ✅ COMPLIANT: Using dynamic wait
await page.waitForSelector("[data-test-id='dashboard']");
```

### Code Quality Violations
```typescript
// ❌ VIOLATION: Using 'any' type
const data: any = fetchData();

// ❌ VIOLATION: Magic number
if (response.length > 100) { ... }

// ✅ COMPLIANT: Proper typing
interface User { id: number; name: string; }
const data: User[] = fetchData();

// ✅ COMPLIANT: Named constant
const MAX_RESPONSE_SIZE = 100;
if (response.length > MAX_RESPONSE_SIZE) { ... }
```

## Adding New Rules

To add new rules or modify existing ones:

1. **Edit the relevant markdown file** in `.github/instructions/`
2. **Update the `applyTo` pattern** if you want to change which files are checked
3. **Add clear rules** with examples of compliant vs. non-compliant code
4. **Commit the changes** - they'll automatically apply to new PRs

## Rule File Format

Each rule file follows this format:

```markdown
---
applyTo: "pattern/to/files/**"
---

# Rule Title

## Category
- **Rule description**: Clear explanation of the rule
- **Example**: Show what's compliant and what violates the rule
```

## Benefits

- **Automated Enforcement**: No manual code reviews needed for standard violations
- **Consistent Standards**: Everyone follows the same rules
- **Easy Maintenance**: Rules are in readable markdown files
- **PR Integration**: Direct feedback in pull requests
- **Team Alignment**: Clear documentation of quality standards

## Troubleshooting

### Workflow Not Triggering
- Check that the workflow file path is correct
- Verify the `applyTo` pattern matches your file structure
- Ensure the workflow has proper permissions

### Rules Not Applying
- Check the file path in the workflow `instructions-path`
- Verify the `applyTo` pattern in the rule file frontmatter
- Ensure the markdown file has proper YAML frontmatter

### Missing Review Comments
- Check that the workflow has `pull-requests: write` permissions
- Verify the Copilot Review Action version is correct
- Check workflow logs for any errors

## Contributing

To contribute new rule categories:

1. Create a new markdown file in `.github/instructions/`
2. Define the `applyTo` pattern for relevant files
3. Add comprehensive rules with examples
4. Update or create workflows to include the new rule file
5. Test with a sample PR to verify the rules work correctly
