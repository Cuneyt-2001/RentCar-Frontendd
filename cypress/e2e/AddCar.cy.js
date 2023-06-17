describe('Add Car', () => {
    it('Admin can add new  car ', () => {
       
      cy.visit('http://localhost:3000/');
      cy.findByRole('textbox', {
        name: /email address/i
      }).type('cuneyt@gmail.com');
      cy.findByLabelText(/password/i).type('Cuneyt123455');
      cy.findByRole('button', {
        name: /log in/i
      }).click();
   
      cy.visit('http://localhost:3000/AddCar'); 
      cy.get('select[data-testid="selectbrand"]').select('Audi').trigger('change');
    cy.get('select[data-testid="selectbrand"]').should('have.value', 'Audi');
      cy.get('select[data-testid="selecttransmission"]').select('Manual').trigger('change');
      cy.get('select[data-testid="selecttransmission"]').should('have.value', 'Manual');

        cy.get('select[data-testid="selecttype"]').select('Sedan').trigger('change')
        cy.get('select[data-testid="selecttype"]').should('have.value', 'Sedan')
       cy.get('input[data-testid="testmodel"]').type('A3');
       cy.get('input[data-testid="testmodel"]').should('have.value', 'A3')
        cy.get('input[data-testid="testyear"]').type('1990');
        cy.get('input[data-testid="testyear"]').should('have.value', '1990')

       cy.get('button[data-testid="btntest"]').click();



    
  

    

   

    
    
    });
});