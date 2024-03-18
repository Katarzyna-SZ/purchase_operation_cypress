/// <reference types="cypress" />
/*
describe('E-commerce purchase automation', () => {
	it('Adds a book to the cart, proceeds to checkout, and completes the purchase', () => {
		//Visit the website below
		cy.visit('https://practice.automationtesting.in/')

		//Wait for the page to load
		cy.url().should('include', 'practice.automationtesting.in/')

		//Find and click on the book 'Mastering JavaScript" and to add it to your cart.
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
		cy.get('#place_order').click()
	})
}) */

describe('E-commerce purchase automation', () => {
	it('Adds a book to the cart', () => {
		//Visit the website below
		cy.visit('https://practice.automationtesting.in/')
		//Wait for the page to load
		cy.url().should('include', 'practice.automationtesting.in/')
		//Find and click on the book 'Mastering JavaScript" and to add it to your cart.
		cy.get('a[data-product_id="165"]').click()
	})

	it('Proceeds to checkout', () => {
		// Wait for the cart icon to update
		cy.get('.wpmenucart-contents').should('contain', '1')
		//Go to the cart. The solution with 'force: true' works but it is not recommended.
		cy.get('.wpmenucart-contents').click({ force: true })
		// Wait for the page to load
		cy.url().should('include', '/basket/')
		// Proceed to checkout
		cy.get('a.checkout-button').click()
	})

	it('Fills in the checkout details', () => {
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
	})

	it('Chooses the payment option', () => {
		cy.get('#payment_method_cod').check()
	})

	it('Confirms and places order', () => {
		cy.get('#place_order').click()
	})
})
