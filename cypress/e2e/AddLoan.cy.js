describe('Loan', () => {
    it('User can loan ', () => {


        cy.visit('http://localhost:3000/');
        cy.findByRole('textbox', {
            name: /email address/i
        }).type('emir2001@gmail.com');
        cy.findByLabelText(/password/i).type('Emir20015454');
        cy.findByRole('button', {
            name: /log in/i
        }).click();
        cy.visit('http://localhost:3000/Loan');
        cy.get('button').eq(1).click();
        cy.get('input[data-testid="date1"]').type('2023-06-08');
        cy.get('input[data-testid="date2"]').type('2023-06-10');
        cy.get('button').eq(1).click();
        



    

       
    });
});
