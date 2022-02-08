///<reference types="Cypress" />


it('type', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
      .get('[data-qa-node="phone-number"]')
      .type(112233344)
})

it('focus', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.viewport(1550, 800)
      .get('[data-qa-node="amount"]')
      .focus()
})

it('focus', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.viewport(1550, 800)
      .get('[data-qa-node="amount"]')
      .focus()
      .blur()
})

it('clear', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.viewport(1550, 800)
      .get('[data-qa-node="amount"]')
      .type(999)
      .wait(6000)
      .clear()
})

it('submit', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.viewport(1550, 800)
      .get('form[method="post"]')
      .submit()
})

it('click', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
      .get('[data-qa-node="debitSourceSource"]')
      .click()
})

it('righclick', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
      .contains('Right click to edit')
      .rightclick()
})

it('dblclick', ()=>{
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event')
      .contains('My Card')
      .dblclick()
})

it('check', ()=>{
    cy.visit('https://en.privatbank.ua/?')
    cy.wait(6000)
    .get('#switch-input')
    .check({force: true})
    .wait(6000)
    .uncheck({force: true})
})

it('scrollIntoView', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
      .get('[data-qa-node="lang"]')
      .wait(6000)
      .scrollIntoView()
})

it('scrollInto', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
      .wait(6000)
      .scrollTo(0, 900)
})

it.only('trigger', ()=>{
    cy.visit('https://next.privat24.ua/?lang=en')
    cy.contains('Services')
      .wait(6000)
      .trigger('mouseover')
})