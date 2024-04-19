describe('Contact Form Submission ', () => {
  it('should submit data to the contact form', () => {
    cy.visit('https://amakaridoctors.com/contact-us');

    // FIRST NAME 
    cy.get(':nth-child(1) > .input-label').parent().should('be.visible');  //directly checks for the element  in (the label) and asserts its visibility:
    cy.get('[data-cy="text-input-first_name"]').type('MY FIRST NAME') //to select the input field and insert the First name 

    
    // LAST NAME 
    cy.get(':nth-child(2) > .input-label').parent().should('be.visible'); //directly checks for the element  in (the label) and asserts its visibility:
    cy.get('[data-cy="text-input-last_name"]').type('MY LAST NAME ')   //to select the input field and insert the Last name  


    // EMAIL 
    cy.get(':nth-child(3) > .input-label').parent().should('be.visible');  //directly checks for the element  in (the label) and asserts its visibility:
    cy.get('[data-cy="text-input-email"]').type('Myemail@gmail.com')         // to select the input field and insert the Myemail@gmail.com  
   
    // PHONE NUMBER 
    cy.get('.phone > .input-label').parent().should('be.visible');  //directly checks for the element  in (the label) and asserts its visibility
    cy.get('[data-cy="phone-input"]').type('0911704273')

    // MESSAGE 
    cy.get('.textBox > .input-label').parent().should('be.visible');     //directly checks for the element  in (the label) and asserts its visibility
    cy.get('[data-cy="text-box-input"]').type('i hope you will hire me for this position ')     // to select the input field and insert The MESSAGE BODY
   
     //BUTTON 
    cy.get('[data-cy="button"]').parent().should('be.visible'); // checks for the element  in (the label) and asserts its visibility
    cy.get('.contact-us-form > .bottom').click(); // CLILCKING OF THE BUTTON 
  
   cy.screenshot()
  });
});
