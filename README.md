# Cucumber Test Automation

This project demonstrates how to set up and run automated tests using Cucumber with Playwright.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Viewing Reports](#viewing-reports)
- [Conclusion](#conclusion)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12 or higher recommended)

## Installation

Follow these steps to set up your project:

1. **Initialize npm**:
   - Open your terminal and navigate to your project directory.
   - Run the following command to create a `package.json` file:
     ```bash
     npm init -y
     ```

2. **Install Cucumber**:
   - Run the following command to install the necessary Cucumber package:
     ```bash
     npm install @cucumber/cucumber
     ```

## Running Tests

To run your Cucumber tests, follow these steps:

1. **Run a specific feature test**:
   - Use the following command to run a specific feature:
     ```bash
     npx cucumber-js src/test/feature/wptest.feature
     ```

2. **Run all tests**:
   - You can also run all tests specified in your `package.json` under the "test" script:
     ```bash
     npm test
     ```

## Viewing Reports

After running your tests, you can view the generated report. Follow the instructions based on your operating system:

### For Windows:

- Use the following command to open the report:
\
  start "test-results\cucumber-report.html"



  
