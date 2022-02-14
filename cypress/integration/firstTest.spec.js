/// <reference types="Cypress" />
import {mobileReplenishment} from "../support/pages/mobileReplenishment";
import {transfers} from "../support/pages/transfers";
import {basePage} from "../support/pages/basePage";

it('Replenishment of Ukraine mobile phone number Diana', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')

    mobileReplenishment.typePhoneNumber('686979712')
    basePage.typeAmount('1')
    basePage.typeDebitCardData('4552331448138217', '0524', '111')
    basePage.typeFirstLastNameCard('RUTH', 'MONTAIVO')
    cy.wait(5000)
    basePage.submitPayment()
    cy.wait(5000)
    mobileReplenishment.checkDebitCard('4552 **** **** 8217')
    mobileReplenishment.checkDebitAmount('1')
    mobileReplenishment.checkDebitAmount('UAH')
    mobileReplenishment.checkComission('2')
    mobileReplenishment.checkComissionCurrency('UAH')
})

it('Money transfer between foreign cards Diana', ()=>{
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')
    basePage.typeDebitCardData('4552331448138217', '0524', '111')
    basePage.typeFirstLastNameCard('Shayne', 'McConell')
    transfers.typeReceiverCard('5309233034765085')
    basePage.typeAmount('300')
    transfers.typeComment('Cypress test')
    cy.wait(2000)
    basePage.submitPayment()
    transfers.checkPayerAndReceiverCard('4552 3314 4813 8217', '5309 2330 3476 5085')
    transfers.checkPayerAmountAndTotalAmount('300 UAH', '390.77', 'UAH')
    transfers.checkPayerCurrency('90.77 UAH')
    transfers.checkComment('Cypress test')
})

