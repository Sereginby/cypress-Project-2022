///<reference types="Cypress" />

it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Вхід');
})  

it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('div', 'Вхід')
})  

it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Вхід', {matchCase: false});
})  

it.only('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.wait(6000)
    cy.get('div').contains('Read more').click();
})  