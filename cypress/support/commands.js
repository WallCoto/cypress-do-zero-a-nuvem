Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@wp.pl',
    message: 'Teste.'
}) => {
    cy.get('#firstName')
      .type(data.firstName)
    cy.get('#lastName')
      .type(data.lastName)
    cy.get('#email')
      .type(data.email)
    cy.get('#open-text-area')
      .type(data.message)
    cy.contains('button', 'Enviar').click()
})