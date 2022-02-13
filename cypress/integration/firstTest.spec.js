/// <reference types="Cypress" />
import { SereginbyTest1 } from "../support/pages2/SereginbyTest1";

it.only('SereginbyMobile', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    SereginbyTest1.typePhoneNumber('686979712')
    SereginbyTest1.typeAmount('1000')
    SereginbyTest1.typeDebitCardData('4552331448138217', '0524', '111')
    cy.wait(3000)
    SereginbyTest1.typeFirstLastNameCard('RUTH', 'MONTAIVO')
    cy.wait(3000)
    SereginbyTest1.submitPayment()
    SereginbyTest1.checkDebitCard('4552 **** **** 8217')
    SereginbyTest1.checkDebitAmount('UAH')
    SereginbyTest1.checkDebitAmount('1')
    SereginbyTest1.checkDebitComission('4')
    SereginbyTest1.checkPaymentCurrency('UAH')
});



it('fgkxdn', ()=> {
    cy.visit('https://next.privat24.ua/money-transfer/card')
      .get('[data-qa-node="numberdebitSource"]')
      .type('4552331448138217')
      .get('[data-qa-node="expiredebitSource"]')
      .type('0524')
      .get('[data-qa-node="cvvdebitSource"]')
      .type('111')
      .wait(3000)
      .get('[data-qa-node="firstNamedebitSource"]')
      .type('RUTH')
      .get('[data-qa-node="lastNamedebitSource"]')
      .type('MONTAIVO')
      .wait(3000)
      .get('[data-qa-node="numberreceiver"]')
      .type('5309233034765085')
      .get('[data-qa-node="firstNamereceiver"]')
      .wait(3000)
      .type('Juliana')
      .get('[data-qa-node="lastNamereceiver"]')
      .type('Janssen')
      .get('[data-qa-node="amount"]')
      .type('350')
      .get('[data-qa-node="toggle-comment"]')
      .click()
      .get('[data-qa-node="comment"]')
      .type('Cypress test')
      .get('button[type="submit"]')
      .click()
      .wait(3000)
      .get('[data-qa-node="payer-card"]')
      .wait(3000)
      .should('have.text', '4552 3314 4813 8217')
      .get('[data-qa-node="receiver-card"]')
      .should('have.text', '5309 2330 3476 5085')
      .get('[data-qa-node="payer-amount"]')
      .should('have.text', '350 UAH')
      .get('[data-qa-node="payer-currency"]')
      .should('have.text', '89.63 UAH')
      .get('[data-qa-node="total"]')
      .find('div')
      .should('contain.text', '439.63')

})

it('Replenishment of Ukraine mobile phone number Diana', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    mobileReplenishment.typePhoneNumber('686979712')
    mobileReplenishment.typeAmount('1')
    mobileReplenishment.typeDebitCardData('4552331448138217', '0524', '111')
    cy.wait(5000)
    mobileReplenishment.submitPayment
    mobileReplenishment.checkDebitCard('4552 **** **** 8217')
    mobileReplenishment.checkDebitAmount('1')
    mobileReplenishment.checkDebitAmount('UAH')
    
    

    .get('[data-qa-node="commission"]')
    .eq(1)
    .should('have.text', '2')

    .get('[data-qa-node="commission-currency"]')
    .eq(0)
    .should('contain.text', 'UAH')
})

it('Money transfer between foreign cards Diana', ()=>{
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')
    .get('[data-qa-node="numberdebitSource"]')
    .type('4552331448138217')
    .get('[data-qa-node="expiredebitSource"]')
    .type('0524')
    .get('[data-qa-node="cvvdebitSource"]')
    .type('111')
    .get('[data-qa-node="firstNamedebitSource"]')
    .type('Shayne')
    .get('[data-qa-node="lastNamedebitSource"]')
    .type('McConell')
    .get('[data-qa-node="numberreceiver"]')
    .type('5309233034765085')
    .get('[data-qa-node="amount"]')
    .type('300')
    .get('[data-qa-node="toggle-comment"]')
    .click()
    .get('[data-qa-node="comment"]')
    .type('Cypress test')
    .get('button[type="submit"]')
    .wait(2000)
    .click()
    .get('[data-qa-node="payer-card"]')
    .should('have.text', '4552 3314 4813 8217')
    .get('[data-qa-node="receiver-card"]')
    .should('have.text', '5309 2330 3476 5085')
    .get('[data-qa-node="payer-amount"]')
    .should('have.text', '300 UAH')
    .get('[data-qa-node="payer-currency"]')
    .should('have.text', '88.63 UAH')
    .get('[data-qa-node="payer-currency"]')
    .should('have.text', '88.63 UAH')
    .get('[data-qa-node="total"]')
    .find('div')
    .should('contain.text', '388.63')
    .should('contain.text', 'UAH')
    .get('[data-qa-node="comment"]')
    .should('have.text', 'Cypress test')

})



it('Replenishmnt of mobile phone number', ()=> {
    cy.visit('https://next.privat24.ua/')
    .wait(6000)
    cy.get('[autocomplete="cc-number"]').type('1234')
    })

    it('type Diana',  ()=>{
        cy.visit('https://next.privat24.ua/mobile?lang=en')
        cy.get('[placeholder="000000000"]')
        .type(11223344)
    })

    it('focus Diana',  ()=>{
        cy.visit('https://next.privat24.ua/mobile?lang=en')
        cy.get('[data-qa-node="amount"]')
        .focus()
    })
 
    it('blur Diana',  ()=>{
        cy.visit('https://next.privat24.ua/mobile?lang=en')
        cy.get('[data-qa-node="amount"]')
        .focus()
        .blur()
    })

    it('clear Diana',  ()=>{
        cy.visit('https://next.privat24.ua/mobile?lang=en')
        cy.get('[data-qa-node="amount"]')
        .type(999)
        .clear()
    })

    it('submit Diana',  ()=>{
        cy.visit('https://next.privat24.ua/mobile?lang=en')
        cy.get('form[method="post"]')
        .submit()
    })

    it('click Diana',  ()=>{
        cy.visit('https://next.privat24.ua/mobile?lang=en')
        cy.get('[data-qa-value="manual"]')
        .click()
    })
 
    it('rightclick Diana',  ()=>{
        cy.visit('https://example.cypress.io/commands/actions')
        cy.contains('Right click to edit')
        .rightclick()
    })

    it('dblclick Diana',  ()=>{
        cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html')
        cy.contains('My Card')
        .dblclick()
    })

    it('check Diana',  ()=>{
        cy.visit('http://178.124.149.231:8080/4DACTION/TalonyWeb_SelectKontD')
        cy.get('input[value="2"]')
        .check()
    })

    it('uncheck Diana',  ()=>{
        cy.visit('https://en.privatbank.ua/')
        cy.get('#switch-input')
        .check({force: true})
        .wait(2000)
        .uncheck({force: true})
    })

    it('uncheck Diana',  ()=>{
        cy.visit('http://178.124.149.231:8080/4DACTION/TalonyWeb_WriteTalony')
        cy.get('[name="Check37"]')
        .uncheck()
        .click()
    })

    it('select Diana',  ()=>{
        cy.visit('http://178.124.149.231:8080/4DACTION/TalonyWeb_WriteTalony')
        .get('[name="select"]')
        .select('2')
    })

    it('scroll Diana',  ()=>{
        cy.visit('https://next.privat24.ua/?lang=en')
        .get('[data-qa-node="lang"]')
        .wait(2000)
        .scrollIntoView()
    })

    it('scroll To Diana',  ()=>{
        cy.visit('https://next.privat24.ua/?lang=en')
        .wait(2000)
        cy.scrollTo(0, 500)
    })

    it('trigger Diana',  ()=>{
        cy.visit('https://next.privat24.ua/?lang=en')
        .contains('Services')
        .wait(2000)
        .trigger('mouseover')
    })
       


    
