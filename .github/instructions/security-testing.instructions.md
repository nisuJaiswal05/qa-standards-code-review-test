---
applyTo: "**/*security*.{ts,js,spec.ts}"
---

# Security Testing Guidelines

## Authentication Testing
- **Login flows**: Test all login scenarios including valid and invalid credentials
- **Session management**: Test session timeout, expiration, and cleanup
- **Multi-factor authentication**: Test MFA flows and backup authentication methods
- **Password policies**: Verify password complexity, reset, and change functionality

## Authorization Testing
- **Role-based access**: Test that users can only access authorized resources
- **Permission escalation**: Test for potential permission escalation vulnerabilities
- **API authorization**: Test API endpoints for proper authorization checks
- **Resource isolation**: Ensure users cannot access other users' resources

## Input Validation Testing
- **SQL injection**: Test for SQL injection vulnerabilities in all input fields
- **XSS prevention**: Test for Cross-Site Scripting vulnerabilities
- **Command injection**: Test for command injection in system calls
- **File upload security**: Test file upload functionality for malicious files

## Data Protection Testing
- **Sensitive data exposure**: Ensure no sensitive data is exposed in responses
- **Data encryption**: Verify sensitive data is encrypted at rest and in transit
- **PII handling**: Test proper handling of personally identifiable information
- **Data retention**: Test data retention and deletion policies

## API Security Testing
- **Rate limiting**: Test API rate limiting and throttling mechanisms
- **Input sanitization**: Test API input validation and sanitization
- **Authentication tokens**: Test token generation, validation, and revocation
- **CORS policies**: Test Cross-Origin Resource Sharing policies

## Session Security Testing
- **Session fixation**: Test for session fixation vulnerabilities
- **Session hijacking**: Test session hijacking prevention mechanisms
- **Cookie security**: Test cookie security flags (HttpOnly, Secure, SameSite)
- **Logout functionality**: Test complete session cleanup on logout

## Error Handling Testing
- **Information disclosure**: Ensure error messages don't reveal sensitive information
- **Stack traces**: Verify stack traces are not exposed in production
- **Generic errors**: Use generic error messages for security-sensitive operations
- **Logging security**: Ensure sensitive data is not logged

## Cryptography Testing
- **Hashing algorithms**: Verify strong hashing algorithms are used for passwords
- **Encryption standards**: Test use of industry-standard encryption algorithms
- **Key management**: Test proper key generation, storage, and rotation
- **Random number generation**: Test use of cryptographically secure random numbers

## Network Security Testing
- **HTTPS enforcement**: Test that all connections use HTTPS
- **Certificate validation**: Test SSL/TLS certificate validation
- **Network timeouts**: Test appropriate network timeouts to prevent DoS
- **Firewall rules**: Test firewall configurations and restrictions

## Security Headers Testing
- **Security headers**: Verify presence of security headers (CSP, HSTS, X-Frame-Options)
- **Content Security Policy**: Test CSP policies for proper enforcement
- **XSS protection**: Test XSS protection headers and mechanisms
- **Clickjacking prevention**: Test clickjacking prevention measures

## Vulnerability Scanning
- **Automated scanning**: Include automated vulnerability scanning in test suite
- **Dependency scanning**: Test for known vulnerabilities in dependencies
- **Code analysis**: Use static code analysis for security issues
- **Penetration testing**: Conduct regular penetration testing assessments
