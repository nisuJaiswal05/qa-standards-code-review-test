---
applyTo: "**/*performance*.{ts,js,spec.ts}"
---

# Performance Testing Guidelines

## Test Design
- **Realistic scenarios**: Test performance with realistic user scenarios and data volumes
- **Baseline metrics**: Establish performance baselines before optimization
- **Multiple runs**: Run tests multiple times to get consistent results
- **Environment consistency**: Test in consistent environments to ensure reliable results

## Load Testing Standards
- **Gradual ramp-up**: Use gradual load ramp-up to simulate real traffic patterns
- **Peak load testing**: Test system behavior under peak expected loads
- **Stress testing**: Test beyond expected limits to find breaking points
- **Spike testing**: Test sudden traffic spikes to check system resilience

## Response Time Standards
- **Acceptable thresholds**: Define acceptable response time thresholds for different operations
- **Percentile measurements**: Measure 90th, 95th, and 99th percentiles, not just averages
- **Network conditions**: Test under various network conditions (slow, fast, unstable)
- **Geographic testing**: Test performance from different geographic locations

## Resource Monitoring
- **CPU usage**: Monitor CPU utilization during performance tests
- **Memory usage**: Track memory consumption and potential leaks
- **Database performance**: Monitor database query performance and connection pools
- **Network bandwidth**: Measure network bandwidth utilization and latency

## Frontend Performance
- **Page load time**: Measure full page load times including all resources
- **Time to interactive**: Measure when users can actually interact with the page
- **Core Web Vitals**: Track LCP, FID, and CLS metrics
- **Bundle size**: Monitor JavaScript bundle sizes and loading strategies

## Backend Performance
- **API response times**: Measure API endpoint response times under load
- **Database queries**: Optimize and test database query performance
- **Caching strategies**: Test effectiveness of caching mechanisms
- **Concurrency handling**: Test system behavior under concurrent user load

## Performance Regression Testing
- **Automated benchmarks**: Include automated performance benchmarks in CI/CD
- **Regression detection**: Set up alerts for performance regressions
- **Trend analysis**: Track performance trends over time
- **Comparison testing**: Compare performance between different versions

## Test Data Management
- **Realistic data volumes**: Use realistic data volumes that match production
- **Data variety**: Test with various data patterns and edge cases
- **Test data isolation**: Ensure performance tests don't interfere with each other
- **Data cleanup**: Clean up test data after performance tests complete

## Reporting and Analysis
- **Comprehensive reports**: Generate detailed performance reports with metrics
- **Visualizations**: Use charts and graphs to visualize performance data
- **Bottleneck identification**: Identify and document performance bottlenecks
- **Recommendations**: Provide actionable recommendations for performance improvements
