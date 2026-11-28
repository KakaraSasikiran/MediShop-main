# 💊 MediShop | End-to-End Test Automation

<p align="center">
  <strong>Quality is not an accident. It's engineered, tested, and continuously improved.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Automation-Playwright-2EAD33?logo=playwright&logoColor=white" />
  <img src="https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Testing-End--to--End-blue" />
  <img src="https://img.shields.io/badge/Framework-AutomaQA-purple" />
  <img src="https://img.shields.io/badge/Status-In%20Progress-orange" />
</p>

<p align="center">
  <a href="https://github.com/KakaraSasikiran/MediShop-main">Repository</a> •
  <a href="#-overview">Overview</a> •
  <a href="#-test-coverage">Test Coverage</a> •
  <a href="#-getting-started">Getting Started</a>
</p>

---

## 🚀 Overview

**MediShop** is a pharmacy e-commerce application used as the foundation for an end-to-end QA automation project.

This project focuses on validating critical business workflows, identifying functional defects, and improving application reliability through structured test design and automation.

The automation initiative follows a real-world testing approach:

- Understand Business Requirements Specifications (BRS).
- Design functional test scenarios and test cases.
- Identify positive, negative, and boundary test conditions.
- Automate critical business workflows.
- Validate expected application behavior.
- Generate meaningful execution reports.

**The goal:** Build a scalable, maintainable automation solution that demonstrates how QA engineers approach application quality in real-world projects.

## 🎯 Project Objectives

- Translate business requirements into executable test scenarios.
- Automate critical pharmacy e-commerce workflows.
- Implement reusable automation components.
- Validate end-to-end user journeys.
- Improve regression testing efficiency.
- Establish a foundation for continuous testing.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Playwright | Browser automation |
| TypeScript | Programming language |
| Node.js | Runtime environment |
| Playwright Test | Test execution and assertions |
| Git & GitHub | Version control |
| HTML Reports | Test execution analysis |

## 🧪 Test Coverage

The following business workflows are the primary focus of the automation suite.

| Module | Test Scenarios |
|---|---|
| User Authentication | Login, invalid credentials, validation messages |
| Medicine Search | Search medicines, matching results, no-result scenarios |
| Product Filtering | Filter medicines and validate displayed products |
| Product Details | Validate product information and selection |
| Shopping Cart | Add, remove, and update cart items |
| Checkout | Validate checkout workflow and mandatory fields |
| Order History | Validate previously placed orders |

### 🔍 Testing Approach

Each module is validated using a combination of:

- Positive testing
- Negative testing
- Boundary value analysis
- Equivalence partitioning
- Functional testing
- Regression testing
- End-to-end testing

## 🏗️ Automation Architecture

The automation framework is designed around maintainability, reusability, and separation of responsibilities.

**Proposed architecture:**

```text
MediShop-Automation/
│
├── tests/
│   ├── authentication/
│   ├── medicine-search/
│   ├── product/
│   ├── cart/
│   ├── checkout/
│   └── order-history/
│
├── pages/
│   ├── LoginPage.ts
│   ├── HomePage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── fixtures/
│   └── testFixtures.ts
│
├── test-data/
│   └── testData.json
│
├── utils/
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

*Note: This represents the intended automation architecture; adapt the paths to the actual repository structure.*

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (LTS)
- npm
- Visual Studio Code
- Git

### 1. Clone the repository

```bash
git clone https://github.com/KakaraSasikiran/MediShop-main.git
```

### 2. Navigate to the project

```bash
cd MediShop-main
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

### 5. Execute automation tests

```bash
npx playwright test
```

### 6. Run tests in headed mode

```bash
npx playwright test --headed
```

### 7. Execute tests in a specific browser

```bash
npx playwright test --project=chromium
```

### 8. Generate and view the HTML report

```bash
npx playwright show-report
```

*Execution commands assume the Playwright automation project and corresponding configuration have been added to the repository.*

## 📊 Reporting & Debugging

The project uses Playwright's reporting and debugging capabilities to make test execution easier to analyze.

Planned reporting capabilities:

- HTML execution reports
- Screenshots on test failures
- Video recordings when configured
- Trace Viewer for debugging
- Execution logs

## 🌐 Cross-Browser Testing

The automation suite is intended to support multiple browser engines:

| Browser | Engine |
|---|---|
| Chrome / Chromium | Chromium |
| Microsoft Edge | Chromium |
| Firefox | Gecko |
| Safari | WebKit |

## 📈 Project Roadmap

- [x] Identify application workflows.
- [x] Establish business requirement and test case coverage.
- [ ] Initialize Playwright + TypeScript automation framework.
- [ ] Implement reusable Page Object Model.
- [ ] Automate authentication workflows.
- [ ] Automate medicine search and product filtering.
- [ ] Automate cart management.
- [ ] Automate checkout workflows.
- [ ] Automate order history validation.
- [ ] Implement cross-browser execution.
- [ ] Configure reporting and failure debugging.
- [ ] Integrate GitHub Actions CI/CD.

## 💡 What This Project Demonstrates

This project is intended to demonstrate practical QA engineering skills:

- Converting business requirements into test cases.
- Designing structured test coverage.
- Building maintainable Playwright automation.
- Applying Page Object Model principles.
- Writing reliable assertions.
- Handling dynamic web elements.
- Debugging failed automation tests.
- Thinking beyond test execution towards product quality.

## 🤝 Contributions

Suggestions, improvements, and constructive feedback are welcome!

If you are interested in QA Automation, Playwright, and TypeScript, feel free to explore the project and contribute.

1. Fork the repository.
2. Create a feature branch.
3. Implement your changes.
4. Submit a Pull Request.

## 👨‍💻 Author

**Sasikiran Kakara**

QA Automation Engineer | Playwright | TypeScript | Selenium | Java

Building practical automation solutions and sharing knowledge through **AutomaQA**.

<p align="center">
  <strong>Let's make software quality everyone's responsibility! 🚀</strong>
</p>

<p align="center">
  ⭐ If you find this project useful, consider giving it a star!
</p>

---

**Built with ❤️ as part of the AutomaQA initiative.**