---
title: "Async await in Cypress.io"
description: "Short tutorial on how to use async await in Cypress.io"
publishDate: "10 Feb 2024"
tags: ["test", "toc"]
---

Cypress.io is a popular framework used for automated end-to-end (e2e) testing. One of the tricky parts of creating tests in modern JS front-ends is handling asynchronous code. By following (some) best practices ensures that your tests are reliable and maintainable.

First off, contrary to other automation frameworks Cypress.io is async out of the box. Or as the Cypress guide states: “Each Cypress command (and chain of commands) returns immediately, having only been appended to a queue to be executed at a later time.
You purposefully cannot do anything useful with the return value from a command. Commands are enqueued and managed entirely behind the scenes.”

With that in mind, an overview of some best practices:

## Use `cy.wait` judiciously

Cypress automatically waits for commands to finish, but there are cases where explicit waits using `cy.wait()` may be necessary. However, overusing `cy.wait()` can lead to flaky tests. Instead, try to structure your tests to wait for specific elements or conditions using Cypress commands like `cy.get` with appropriate assertions.
Avoid mixing synchronous and asynchronous code: Since Cypress commands are asynchronous, using `await` with them can lead to unexpected behavior. Ensure that Cypress commands are used within the `cy.wrap()` or `cy.then()` to maintain proper command chaining, without `await` and only use `await` with native JavaScript promises or Cypress custom commands.

```javascript
// Correct
cy.get(".element").click();

// Incorrect
await cy.get(".element").click(); // Avoid using await with Cypress commands
```

## Use `cy.wrap` to return promises

When working with promises or async/await, use `cy.wrap` to make sure Cypress can correctly wait for the resolution of the promise.

```javascript
cy.wrap(new Promise((resolve) => resolve("some value"))).should("equal", "some value");
```

On the other hand; If you have non-Promise values that need to be used with `await`, you can use `cy.wrap()` to convert them into a Cypress promise.

```javascript
const nonPromiseValue = "some value";
const wrappedValue = cy.wrap(nonPromiseValue);
await wrappedValue.then((value) => {
	// Handle the value
});
```

## Handle retries with custom assertions

Cypress automatically retries commands, but when working with async/await, make sure to handle retries appropriately by creating custom assertions that account for asynchronous behavior.

```javascript
function customAssertion(value) {
	return cy.wrap(value).should("satisfy", (result) => {
		// Custom assertion logic here
		return result === expectedValue;
	});
}

// Usage
cy.get(".some-element").invoke("text").then(customAssertion);
```

## Error handling with try-catch

Properly handle errors that may occur during asynchronous operations. Use try-catch blocks or Cypress' `.should()` command to assert that the expected state is reached. This helps in providing more informative error messages and improves test robustness.

```javascript
try {
	await cy.get(".element").should("exist");
} catch (error) {
	// Handle the error
	cy.log(`Error: ${error.message}`);
}
```

## Utilize Cypress custom commands for reusable logic

If you have reusable async logic, consider encapsulating it in a custom command to keep your tests clean and maintainable.

```javascript
Cypress.Commands.add("customCommand", () => {
	// Your async logic here
});

// Usage
cy.customCommand();
```

## Mocking or Stubbing APIs

For handling asynchronous calls like API requests, consider using Cypress commands like `cy.route()` or `cy.intercept()` to mock or stub the network requests, ensuring predictable test behavior.

```javascript
cy.intercept("GET", "/api/data", { fixture: "exampleData.json" }).as("getData");
cy.visit("/your-page");
cy.wait("@getData");
```

By following these best practices, you can create more reliable and maintainable Cypress tests that effectively handle asynchronous code using `async/await`.
