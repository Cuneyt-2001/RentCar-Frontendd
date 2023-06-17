describe('Create Account', () => {
    it('User cant create account if the field empty', () => {
        //Login
        //Click Loan
        //See 

      cy.visit('http://localhost:3000/');
      cy.findByRole('button', {
        name: /Sign up/i
      }).click();

    //    cy.findByRole('textbox', {
    //      name: /Name/i
    //    }).type('Tom');

      cy.findByRole('textbox', {
        name: /Surname/i
      }).type('Jerry');

    //   cy.findByRole('textbox', {
    //     name: /email /i
    //   }).type('Tom@gmail.com');

    //   cy.findByRole('textbox', {rd/i
    //     name: /Passwo
    //   }).type('Tom1234.');

      cy.findByRole('button', {
        name: /create account/i
      }).click();
      cy.url().should('eq',"http://localhost:3000/CreateAccount");

    
      });
  });
     