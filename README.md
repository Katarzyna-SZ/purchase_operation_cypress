# E-commerce purchase automation 🛒🌿💰

#### Table of contents:
1. [About the project](#subtask1)
2. [Environment setup](#subtask2)
3. [Test script used in Cypress](#subtask3)  

<hr>

## <a name='subtask1'>🎯 About the project</a>

The aim of this repository is to present an example of an automated test that showcases a complete purchase operation on an e-commerce website.

👉🏼 **Test enviroment:** [https://practice.automationtesting.in](https://practice.automationtesting.in)

![main_page](https://github.com/Katarzyna-SZ/purchase_operation_cypress/assets/140599598/c6ffdcf5-693e-4c89-be5c-2c14f2690717)

📌 **Steps to reproduce:**

1️⃣ Add a book to the cart

2️⃣ Proceed to checkout

3️⃣ Fill the billing details form

4️⃣ Choose payment details

5️⃣ Place order

## <a name='subtask2'>🛠️ Environment setup</a>

📌 **To do list before writing a script:**

✅ Download & install nodejs

✅ Download & install Visual Studio Code

✅ Crate a new folder for project and open it in VS Code

✅ Open terminal and execute bellow command  **npm - init**. It creates packge.json file

✅ Install Cypress

✅ Start Cypress -> Open terminal and execute bellow command **npx cypress open**

✅ Within Cypress choose option *Start E2E Testing in Chrome* (As this is the browser I use.)

✅ Create new spec file - which  I can use to start testing the application - **purcaseoperation.cy.js**

✅ Use a template for your first E2E test and adjust it to your purpose. Describe the aim of the test and the user flow/steps the test should cover.

## <a name='subtask3'>👩🏻‍💻Test script used in Cypress </a>
  
Before writing each test for individual elements, I first use developer tools (DevTools) to inspect elements of the webpage in order to identify unique identifiers such as CSS classes or attributes that will help me locate the elements of interest. Then, I use these identifiers in my Cypress script to simulate user interactions, such as button clicks, typing text into form fields, or navigating through the page.

📌 **Test Script for all the steps**

```js
/// <reference types="cypress" />

describe('E-commerce purchase automation', () => {
	it('Adds a book to the cart, proceeds to checkout, and completes the purchase', () => {
		//Visit the website below
		cy.visit('https://practice.automationtesting.in/')

		//Wait for the page to load
		cy.url().should('include', 'practice.automationtesting.in/')

		//Find and click on the book 'Mastering JavaScript" and add it to your cart.
		cy.get('a[data-product_id="165"]').click()

		// Wait for the cart icon to update
		cy.get('.wpmenucart-contents').should('contain', '1')

		//Go to the cart. The solution with 'force: true' works but it is not recommended.
		cy.get('.wpmenucart-contents').click({ force: true })

		// Wait for the page to load
		cy.url().should('include', '/basket/')

		// Proceed to checkout
		cy.get('a.checkout-button').click()

		//Fill in the checkout details
		cy.get('#billing_first_name').type('Kate')
		cy.get('#billing_last_name').type('Smith')
		cy.get('#billing_email').type('kate.smith@test.com')
		cy.get('#billing_phone').type('0048123456789')
		cy.get('#billing_address_1').type('123 Main Street')
		cy.get('#billing_city').type('London')
		cy.get('#billing_postcode').type('SW1A 1AA')

		//When I choose indicator with span atribute it does not work.
		//cy.get('span.select2-chosen').click()
		//cy.contains('India').click()

		//Check if after typing 'United Kingdom (UK)' there is country's name on the list.
		//cy.get('#select2-results-1').should('contain', 'United Kingdom (UK)') <- It does not work.

		// Type 'United Kingdom (UK)' to the field.
		//cy.get('.select2-input').type('United Kingdom (UK)')
		//Nope, it does not work.

		//Okay, I'll leave the default setting: India and Telangana State.

		//Change payment method from the default setting 'Direct Bank Transfer' to 'Cash on Delivery'
		cy.get('#payment_method_cod').check()

		//Click 'Place Order' button
		cy.get('#place_order').click()
	})
})
```

📌 **Test results:**

![Test1](https://github.com/Katarzyna-SZ/purchase_operation_cypress/assets/140599598/c23e9abb-1076-4a22-975e-9d4e9ed49509)
![Test2](https://github.com/Katarzyna-SZ/purchase_operation_cypress/assets/140599598/8d3dc4f6-43c3-4814-8a61-3eb4261f90bc)
