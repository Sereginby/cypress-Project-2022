

it('Example  Get intersept', () => {
    cy.intercept({
        method: 'GET',
        url: '/api/boards'
    })
    cy.visit('/')
})