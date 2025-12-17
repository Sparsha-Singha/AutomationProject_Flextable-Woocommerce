    
class ContactInfo {
    

    contactGmail() {
    const email = Cypress.env("WP_EMAIL");
    cy.get('#contact label').click();
    cy.get('#email').type(email);
  }

  shippingAddress() {
    const country = Cypress.env("WP_COUNTRY");
    const district = Cypress.env("WP_DISTRICT");
    const firstName = Cypress.env("WP_FIRST_NAME");
    const lastName = Cypress.env("WP_LAST_NAME");
    const address = Cypress.env("WP_ADDRESS");
    const city = Cypress.env("WP_CITY");
    const postCode = Cypress.env("WP_POSTCODE");
    const phone = Cypress.env("WP_PHONE");
    cy.get('#shipping-country')
      .should('be.visible')
      .invoke('val', country)
      .trigger('change');
    cy.get('#shipping-state option')
      .should('have.length.greaterThan', 1);
    cy.get('#shipping-state')
      .should('be.visible')
      .select(district);
    cy.get('#shipping-first_name').type(firstName);
    cy.get('#shipping-last_name').type(lastName);
    cy.get('#shipping-address_1').type(address);
    cy.get('#shipping-city').type(city);
    cy.get('#shipping-postcode')
    .type(postCode, { force: true });
    cy.get('#shipping-phone')
    .type(phone, { force: true });
  }

  billingAddress() {
    cy.get('#checkbox-control-0').uncheck();
    cy.get('#checkbox-control-0').check();
  }

  placeOrder() {
    cy.get('#radio-control-wc-payment-method-options-cod', { timeout: 20000 })
    .should('exist')
    .should('be.enabled')
    .check({ force: true });
    cy.get('#radio-control-wc-payment-method-options-cod').check();
    cy.get('#wp--skip-link--target div.wc-block-components-checkout-place-order-button__text').click();
  }

  
  



}

module.exports = new ContactInfo();
