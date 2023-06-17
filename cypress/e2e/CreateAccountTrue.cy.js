describe('Create Account', () => {
  it('User can create account ', () => {

    //Click Sign Up
    //Fill inputs
    //Click create account
    //Login

    cy.visit('http://localhost:3000/');
    cy.findByRole('button', {
      name: /Sign up/i
    }).click();

    cy.get('input[data-testid="name"]').type('Tomases');


    cy.findByRole('textbox', {
      name: /surname/i
    }).type('Jerrssa');

    cy.get('input[data-testid="email"]').type('Tom12345@gmail.com');

    cy.get('input[data-testid="password"]').type('Tom123451232');

    cy.findByRole('button', {
      name: /create account/i
    }).click();

    cy.visit('http://localhost:3000/');

    cy.findByRole('textbox', {
      name: /email address/i
    }).type('Tom12@gmail.com');
    cy.findByLabelText(/password/i).type('Tom12345');
    cy.findByRole('button', {
      name: /log in/i
    }).click();
    cy.url().should('eq', "http://localhost:3000/Home");
  });
});
