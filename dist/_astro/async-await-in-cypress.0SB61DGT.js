import{c as a,r as n,m as t}from"./render-template.BOxlgGHo.js";import{u as p}from"./hoisted.DGrdnjdy.js";const e=`<p>Cypress.io is a popular framework used for automated end-to-end (e2e) testing. One of the tricky parts of creating tests in modern JS front-ends is handling asynchronous code. By following (some) best practices ensures that your tests are reliable and maintainable.</p>
<p>First off, contrary to other automation frameworks Cypress.io is async out of the box. Or as the Cypress guide states: “Each Cypress command (and chain of commands) returns immediately, having only been appended to a queue to be executed at a later time.
You purposefully cannot do anything useful with the return value from a command. Commands are enqueued and managed entirely behind the scenes.”</p>
<p>With that in mind, an overview of some best practices:</p>
<h2 id="use-cywait-judiciously">Use <code>cy.wait</code> judiciously</h2>
<p>Cypress automatically waits for commands to finish, but there are cases where explicit waits using <code>cy.wait()</code> may be necessary. However, overusing <code>cy.wait()</code> can lead to flaky tests. Instead, try to structure your tests to wait for specific elements or conditions using Cypress commands like <code>cy.get</code> with appropriate assertions.
Avoid mixing synchronous and asynchronous code: Since Cypress commands are asynchronous, using <code>await</code> with them can lead to unexpected behavior. Ensure that Cypress commands are used within the <code>cy.wrap()</code> or <code>cy.then()</code> to maintain proper command chaining, without <code>await</code> and only use <code>await</code> with native JavaScript promises or Cypress custom commands.</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.500gk.css"><script type="module" src="/_astro/ec.sgewm.js"><\/script><figure class="frame"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><span style="--0:#96A1C2;--1:#616972">// Correct</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">cy.</span><span style="--0:#50FA7B;--1:#6F42C1">get</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">.element</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">).</span><span style="--0:#50FA7B;--1:#6F42C1">click</span><span style="--0:#F8F8F2;--1:#24292E">();</span></div><div class="ec-line">
</div><div class="ec-line"><span style="--0:#96A1C2;--1:#616972">// Incorrect</span></div><div class="ec-line"><span style="--0:#FF79C6;--1:#BF3441">await</span><span style="--0:#F8F8F2;--1:#24292E"> cy.</span><span style="--0:#50FA7B;--1:#6F42C1">get</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">.element</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">).</span><span style="--0:#50FA7B;--1:#6F42C1">click</span><span style="--0:#F8F8F2;--1:#24292E">(); </span><span style="--0:#96A1C2;--1:#616972">// Avoid using await with Cypress commands</span></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// Correctcy.get(&#x22;.element&#x22;).click();// Incorrectawait cy.get(&#x22;.element&#x22;).click(); // Avoid using await with Cypress commands"><div></div></button></div></figure></div>
<h2 id="use-cywrap-to-return-promises">Use <code>cy.wrap</code> to return promises</h2>
<p>When working with promises or async/await, use <code>cy.wrap</code> to make sure Cypress can correctly wait for the resolution of the promise.</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">cy.</span><span style="--0:#50FA7B;--1:#6F42C1">wrap</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--0:#FF79C6;--0fw:bold;--1:#BF3441">new</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#8BE9FD;--0fs:italic;--1:#005CC5">Promise</span><span style="--0:#F8F8F2;--1:#24292E">((</span><span style="--0:#FFB86C;--0fs:italic;--1:#AE4B07">resolve</span><span style="--0:#F8F8F2;--1:#24292E">) </span><span style="--0:#FF79C6;--1:#BF3441">=></span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#50FA7B;--1:#6F42C1">resolve</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">some value</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">))).</span><span style="--0:#50FA7B;--1:#6F42C1">should</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">equal</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">, </span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">some value</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">);</span></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="cy.wrap(new Promise((resolve) => resolve(&#x22;some value&#x22;))).should(&#x22;equal&#x22;, &#x22;some value&#x22;);"><div></div></button></div></figure></div>
<p>On the other hand; If you have non-Promise values that need to be used with <code>await</code>, you can use <code>cy.wrap()</code> to convert them into a Cypress promise.</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><span style="--0:#FF79C6;--1:#BF3441">const</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#F8F8F2;--1:#005CC5">nonPromiseValue</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#FF79C6;--1:#BF3441">=</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">some value</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">;</span></div><div class="ec-line"><span style="--0:#FF79C6;--1:#BF3441">const</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#F8F8F2;--1:#005CC5">wrappedValue</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#FF79C6;--1:#BF3441">=</span><span style="--0:#F8F8F2;--1:#24292E"> cy.</span><span style="--0:#50FA7B;--1:#6F42C1">wrap</span><span style="--0:#F8F8F2;--1:#24292E">(nonPromiseValue);</span></div><div class="ec-line"><span style="--0:#FF79C6;--1:#BF3441">await</span><span style="--0:#F8F8F2;--1:#24292E"> wrappedValue.</span><span style="--0:#50FA7B;--1:#6F42C1">then</span><span style="--0:#F8F8F2;--1:#24292E">((</span><span style="--0:#FFB86C;--0fs:italic;--1:#AE4B07">value</span><span style="--0:#F8F8F2;--1:#24292E">) </span><span style="--0:#FF79C6;--1:#BF3441">=></span><span style="--0:#F8F8F2;--1:#24292E"> {</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">  </span><span style="--0:#96A1C2;--1:#616972">// Handle the value</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">});</span></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="const nonPromiseValue = &#x22;some value&#x22;;const wrappedValue = cy.wrap(nonPromiseValue);await wrappedValue.then((value) => {  // Handle the value});"><div></div></button></div></figure></div>
<h2 id="handle-retries-with-custom-assertions">Handle retries with custom assertions</h2>
<p>Cypress automatically retries commands, but when working with async/await, make sure to handle retries appropriately by creating custom assertions that account for asynchronous behavior.</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><span style="--0:#FF79C6;--1:#BF3441">function</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#50FA7B;--1:#6F42C1">customAssertion</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--0:#FFB86C;--0fs:italic;--1:#AE4B07">value</span><span style="--0:#F8F8F2;--1:#24292E">) {</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">  </span><span style="--0:#FF79C6;--1:#BF3441">return</span><span style="--0:#F8F8F2;--1:#24292E"> cy.</span><span style="--0:#50FA7B;--1:#6F42C1">wrap</span><span style="--0:#F8F8F2;--1:#24292E">(value).</span><span style="--0:#50FA7B;--1:#6F42C1">should</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">satisfy</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">, (</span><span style="--0:#FFB86C;--0fs:italic;--1:#AE4B07">result</span><span style="--0:#F8F8F2;--1:#24292E">) </span><span style="--0:#FF79C6;--1:#BF3441">=></span><span style="--0:#F8F8F2;--1:#24292E"> {</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">    </span><span style="--0:#96A1C2;--1:#616972">// Custom assertion logic here</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">    </span><span style="--0:#FF79C6;--1:#BF3441">return</span><span style="--0:#F8F8F2;--1:#24292E"> result </span><span style="--0:#FF79C6;--1:#BF3441">===</span><span style="--0:#F8F8F2;--1:#24292E"> expectedValue;</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">  });</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">}</span></div><div class="ec-line">
</div><div class="ec-line"><span style="--0:#96A1C2;--1:#616972">// Usage</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">cy.</span><span style="--0:#50FA7B;--1:#6F42C1">get</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">.some-element</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">).</span><span style="--0:#50FA7B;--1:#6F42C1">invoke</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">text</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">).</span><span style="--0:#50FA7B;--1:#6F42C1">then</span><span style="--0:#F8F8F2;--1:#24292E">(customAssertion);</span></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="function customAssertion(value) {  return cy.wrap(value).should(&#x22;satisfy&#x22;, (result) => {    // Custom assertion logic here    return result === expectedValue;  });}// Usagecy.get(&#x22;.some-element&#x22;).invoke(&#x22;text&#x22;).then(customAssertion);"><div></div></button></div></figure></div>
<h2 id="error-handling-with-try-catch">Error handling with try-catch</h2>
<p>Properly handle errors that may occur during asynchronous operations. Use try-catch blocks or Cypress’ <code>.should()</code> command to assert that the expected state is reached. This helps in providing more informative error messages and improves test robustness.</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><span style="--0:#FF79C6;--1:#BF3441">try</span><span style="--0:#F8F8F2;--1:#24292E"> {</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">  </span><span style="--0:#FF79C6;--1:#BF3441">await</span><span style="--0:#F8F8F2;--1:#24292E"> cy.</span><span style="--0:#50FA7B;--1:#6F42C1">get</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">.element</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">).</span><span style="--0:#50FA7B;--1:#6F42C1">should</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">exist</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">);</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">} </span><span style="--0:#FF79C6;--1:#BF3441">catch</span><span style="--0:#F8F8F2;--1:#24292E"> (error) {</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">  </span><span style="--0:#96A1C2;--1:#616972">// Handle the error</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">  cy.</span><span style="--0:#50FA7B;--1:#6F42C1">log</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#F1FA8C">\`Error: </span><span style="--0:#FF79C6">\${</span></span><span style="--0:#F8F8F2;--1:#24292E">error</span><span style="--0:#F8F8F2;--1:#032F62">.</span><span style="--0:#F8F8F2;--1:#24292E">message</span><span style="--1:#032F62"><span style="--0:#FF79C6">}</span><span style="--0:#F1FA8C">\`</span></span><span style="--0:#F8F8F2;--1:#24292E">);</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">}</span></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="try {  await cy.get(&#x22;.element&#x22;).should(&#x22;exist&#x22;);} catch (error) {  // Handle the error  cy.log(&#x60;Error: \${error.message}&#x60;);}"><div></div></button></div></figure></div>
<h2 id="utilize-cypress-custom-commands-for-reusable-logic">Utilize Cypress custom commands for reusable logic</h2>
<p>If you have reusable async logic, consider encapsulating it in a custom command to keep your tests clean and maintainable.</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">Cypress.Commands.</span><span style="--0:#50FA7B;--1:#6F42C1">add</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">customCommand</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">, () </span><span style="--0:#FF79C6;--1:#BF3441">=></span><span style="--0:#F8F8F2;--1:#24292E"> {</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">  </span><span style="--0:#96A1C2;--1:#616972">// Your async logic here</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">});</span></div><div class="ec-line">
</div><div class="ec-line"><span style="--0:#96A1C2;--1:#616972">// Usage</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">cy.</span><span style="--0:#50FA7B;--1:#6F42C1">customCommand</span><span style="--0:#F8F8F2;--1:#24292E">();</span></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Cypress.Commands.add(&#x22;customCommand&#x22;, () => {  // Your async logic here});// Usagecy.customCommand();"><div></div></button></div></figure></div>
<h2 id="mocking-or-stubbing-apis">Mocking or Stubbing APIs</h2>
<p>For handling asynchronous calls like API requests, consider using Cypress commands like <code>cy.route()</code> or <code>cy.intercept()</code> to mock or stub the network requests, ensuring predictable test behavior.</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">cy.</span><span style="--0:#50FA7B;--1:#6F42C1">intercept</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">GET</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">, </span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">/api/data</span><span style="--0:#E9F284">"</span></span><span style="--1:#24292E"><span style="--0:#F8F8F2">, { fixture</span><span style="--0:#FF79C6">:</span><span style="--0:#F8F8F2"> </span></span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">exampleData.json</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E"> }).</span><span style="--0:#50FA7B;--1:#6F42C1">as</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">getData</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">);</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">cy.</span><span style="--0:#50FA7B;--1:#6F42C1">visit</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">/your-page</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">);</span></div><div class="ec-line"><span style="--0:#F8F8F2;--1:#24292E">cy.</span><span style="--0:#50FA7B;--1:#6F42C1">wait</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">@getData</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">);</span></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="cy.intercept(&#x22;GET&#x22;, &#x22;/api/data&#x22;, { fixture: &#x22;exampleData.json&#x22; }).as(&#x22;getData&#x22;);cy.visit(&#x22;/your-page&#x22;);cy.wait(&#x22;@getData&#x22;);"><div></div></button></div></figure></div>
<p>By following these best practices, you can create more reliable and maintainable Cypress tests that effectively handle asynchronous code using <code>async/await</code>.</p>`,i={title:"Async await in Cypress",description:"Short tutorial on how to use async await in Cypress",publishDate:"10 Feb 2024",tags:["test","toc"],minutesRead:"3 min read"},o="/Users/erikvandeursen/Dev/own/evd.gh.io/src/content/post/async-await-in-cypress.md",r=void 0;function m(){return`
Cypress.io is a popular framework used for automated end-to-end (e2e) testing. One of the tricky parts of creating tests in modern JS front-ends is handling asynchronous code. By following (some) best practices ensures that your tests are reliable and maintainable.

First off, contrary to other automation frameworks Cypress.io is async out of the box. Or as the Cypress guide states: “Each Cypress command (and chain of commands) returns immediately, having only been appended to a queue to be executed at a later time.
You purposefully cannot do anything useful with the return value from a command. Commands are enqueued and managed entirely behind the scenes.”

With that in mind, an overview of some best practices:

## Use \`cy.wait\` judiciously

Cypress automatically waits for commands to finish, but there are cases where explicit waits using \`cy.wait()\` may be necessary. However, overusing \`cy.wait()\` can lead to flaky tests. Instead, try to structure your tests to wait for specific elements or conditions using Cypress commands like \`cy.get\` with appropriate assertions.
Avoid mixing synchronous and asynchronous code: Since Cypress commands are asynchronous, using \`await\` with them can lead to unexpected behavior. Ensure that Cypress commands are used within the \`cy.wrap()\` or \`cy.then()\` to maintain proper command chaining, without \`await\` and only use \`await\` with native JavaScript promises or Cypress custom commands.

\`\`\`javascript
// Correct
cy.get(".element").click();

// Incorrect
await cy.get(".element").click(); // Avoid using await with Cypress commands
\`\`\`

## Use \`cy.wrap\` to return promises

When working with promises or async/await, use \`cy.wrap\` to make sure Cypress can correctly wait for the resolution of the promise.

\`\`\`javascript
cy.wrap(new Promise((resolve) => resolve("some value"))).should("equal", "some value");
\`\`\`

On the other hand; If you have non-Promise values that need to be used with \`await\`, you can use \`cy.wrap()\` to convert them into a Cypress promise.

\`\`\`javascript
const nonPromiseValue = "some value";
const wrappedValue = cy.wrap(nonPromiseValue);
await wrappedValue.then((value) => {
	// Handle the value
});
\`\`\`

## Handle retries with custom assertions

Cypress automatically retries commands, but when working with async/await, make sure to handle retries appropriately by creating custom assertions that account for asynchronous behavior.

\`\`\`javascript
function customAssertion(value) {
	return cy.wrap(value).should("satisfy", (result) => {
		// Custom assertion logic here
		return result === expectedValue;
	});
}

// Usage
cy.get(".some-element").invoke("text").then(customAssertion);
\`\`\`

## Error handling with try-catch

Properly handle errors that may occur during asynchronous operations. Use try-catch blocks or Cypress' \`.should()\` command to assert that the expected state is reached. This helps in providing more informative error messages and improves test robustness.

\`\`\`javascript
try {
	await cy.get(".element").should("exist");
} catch (error) {
	// Handle the error
	cy.log(\`Error: \${error.message}\`);
}
\`\`\`

## Utilize Cypress custom commands for reusable logic

If you have reusable async logic, consider encapsulating it in a custom command to keep your tests clean and maintainable.

\`\`\`javascript
Cypress.Commands.add("customCommand", () => {
	// Your async logic here
});

// Usage
cy.customCommand();
\`\`\`

## Mocking or Stubbing APIs

For handling asynchronous calls like API requests, consider using Cypress commands like \`cy.route()\` or \`cy.intercept()\` to mock or stub the network requests, ensuring predictable test behavior.

\`\`\`javascript
cy.intercept("GET", "/api/data", { fixture: "exampleData.json" }).as("getData");
cy.visit("/your-page");
cy.wait("@getData");
\`\`\`

By following these best practices, you can create more reliable and maintainable Cypress tests that effectively handle asynchronous code using \`async/await\`.
`}function h(){return e}function v(){return[{depth:2,slug:"use-cywait-judiciously",text:"Use cy.wait judiciously"},{depth:2,slug:"use-cywrap-to-return-promises",text:"Use cy.wrap to return promises"},{depth:2,slug:"handle-retries-with-custom-assertions",text:"Handle retries with custom assertions"},{depth:2,slug:"error-handling-with-try-catch",text:"Error handling with try-catch"},{depth:2,slug:"utilize-cypress-custom-commands-for-reusable-logic",text:"Utilize Cypress custom commands for reusable logic"},{depth:2,slug:"mocking-or-stubbing-apis",text:"Mocking or Stubbing APIs"}]}const C=a((l,c,F)=>{const{layout:y,...s}=i;return s.file=o,s.url=r,n`${t()}${p(e)}`});export{C as Content,h as compiledContent,C as default,o as file,i as frontmatter,v as getHeadings,m as rawContent,r as url};
