Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName') .type('Leonardo')
    cy.get('#lastName') .type('Silva')
    cy.get('#email') .type('teste@email.com')
    cy.get('#open-text-area') .type('teste')
    cy.contains('.button', 'Enviar').click()

})
