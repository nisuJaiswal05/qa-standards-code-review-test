---
applyTo: "**/*.{ts,js,tsx,jsx}"
---

# Code Quality Guidelines

## General Standards
- **Clean code**: Write readable, maintainable code with clear variable and function names
- **Consistent formatting**: Use consistent indentation, spacing, and code structure
- **Comments**: Add meaningful comments for complex logic, avoid obvious comments
- **Error handling**: Implement proper error handling with try-catch blocks where needed

## TypeScript/JavaScript Standards
- **Type safety**: Use proper TypeScript types, avoid `any` type when possible
- **Const vs let**: Use `const` by default, `let` only when reassignment is needed
- **Arrow functions**: Prefer arrow functions for callbacks and short functions
- **Destructuring**: Use destructuring for cleaner code when extracting object properties

## Import/Export Standards
- **Organized imports**: Group imports by type (third-party, internal, relative)
- **Named exports**: Prefer named exports over default exports for better tree-shaking
- **No circular dependencies**: Avoid circular import dependencies
- **Import paths**: Use consistent import path patterns

## Function Standards
- **Single responsibility**: Functions should do one thing well
- **Pure functions**: Prefer pure functions without side effects
- **Parameter limits**: Keep function parameters to a reasonable number (≤ 5)
- **Return types**: Always specify return types for TypeScript functions

## Variable Naming
- **Descriptive names**: Use descriptive variable names that explain their purpose
- **Naming conventions**: Follow consistent naming conventions (camelCase for variables, PascalCase for classes)
- **No abbreviations**: Avoid unclear abbreviations unless widely understood
- **Boolean naming**: Prefix boolean variables with `is`, `has`, `can`, etc.

## Code Structure
- **Small functions**: Keep functions small and focused
- **Avoid deep nesting**: Limit nesting levels to improve readability
- **Early returns**: Use early returns to reduce nesting
- **Guard clauses**: Use guard clauses for edge cases

## Performance Guidelines
- **Avoid unnecessary computations**: Cache expensive computations
- **Efficient loops**: Use appropriate loop types (for, forEach, map, filter)
- **Memory management**: Avoid memory leaks and unnecessary object creation
- **Async efficiency**: Use Promise.all() for parallel async operations

## Security Guidelines
- **Input validation**: Validate all user inputs and external data
- **No eval()**: Never use eval() or similar dangerous functions
- **Sanitize outputs**: Sanitize data before rendering or storing
- **Secure defaults**: Use secure-by-default configurations
