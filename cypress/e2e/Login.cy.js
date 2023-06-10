import { Table } from "reactstrap";

describe('Login', () => {
    it('User can login', () => {
        //Login
        //Click Loan
        //See 

      cy.visit('http://localhost:3000/');
      cy.findByRole('textbox', {
        name: /email address/i
      }).type('emir2001@gmail.com');
      cy.findByLabelText(/password/i).type('Emir20015454');
      cy.findByRole('button', {
        name: /log in/i
      }).click();
     cy.findByRole('link', {
         name: /myloans/i
       }).click();
    
      
       cy.get(Table).should('have.length', 1);



   

     

    
      });
  });
     