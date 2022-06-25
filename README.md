# Saucedemo automated tests

![SaucedemoLogoo](https://gitlab.com/maxchislov/saucedemo-automated-tests/-/raw/main/Saucedemo.png)

This is a demo project to show the advantages of using Cypress automated tests for https://www.saucedemo.com eCommerce demo website


## Overview
This is a small DEMO of cypress tests for Saucedemo

## Contents

- [Prerequisites](#prerequisites)
- [Get started](#get-started)
- [How to run tests](#how-to-run-tests)
- [Test reports](#test-reports)
- [Remove test report and artifacts](#remove-test-report-and-artifacts)
---


## Prerequisites

This documentation does not cover installing Node.js and assumes that node 12 or 14 and above is already installed on your machine. For more information, please refer to [how to install node](https://nodejs.dev/learn/how-to-install-nodejs)



## Get started

- Clone the current project to your computer
- From the project's directory run `npm install` to install all required dependencies icluding Cypress.


## How to run tests
 Run one of the following commands of your choice:

- `npx cypress run` - _Headless with Electron browser_
- `npx cypress run --browser chrome` - _Run with Chrome browser_
- `npx cypress run --browser firefox` - _Run with Firefox browser_
- `npx cypress run --headed` - _Run with Electron browser_
- To run a **specific test** spec, simply append the name of the spec to the end. Example: 
`npx cypress run --browser chrome --spec "cypress/e2e/purchase_flow.cy.ts"`

for more options please visit [cypress documentation](https://docs.cypress.io/guides/guides/launching-browsers#Browsers)

*Please make sure the selected ***browser is installed*** on your machine.



## Test reports

After a test run, you can find the recorded videos in `cypress/videos`\
To generate a test report, please run: `npm run cy:report`\
This should generate and automatically open the generated report in the default browser.

![Report Example](https://gitlab.com/maxchislov/saucedemo-automated-tests/-/raw/main/report_example.png)



## Remove test report and artifacts

Remove old test reports before a new test execution:  `npm run cy:clearReport`