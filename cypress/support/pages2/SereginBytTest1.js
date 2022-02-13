export class SereginbyMobile {
    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
          .type(phoneNumber)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
          .type(amount)
    }

    typeDebitCardData(CardNumber, expDate, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
          .type('CardNumber')
          .get('[data-qa-node="expiredebitSource"]')
          .type(expDate)
          .get('[data-qa-node="cvvdebitSource"]')
          .type(cvv)
    }

    typeFirstLastNameCard(firstName, lastName){
       cy.get('[data-qa-node="firstNamedebitSource"]')
         .type(lastName)
         .get('[data-qa-node="lastNamedebitSource"]')
         .type(lastName)
    }

    submitPayment(){
       cy.get('[data-qa-node="submit"]')
         .click()   

    }

    checkDebitCard(debitCard){
       cy.get('[data-qa-node="card"]')
         .should('contain.text', debitCard)
    }

    checkDebitAmount(debitAmount){
       cy.get('[data-qa-node="amount"]')
         .should('contain.text', debitAmount)
    }

    checkDebitAmount(debitAmount){
       cy.get('[data-qa-node="amount"]')
         .should('contain.text', debitAmount)
    }

    checkDebitComission(debitComission){
       cy.get('[data-qa-node="commission"]')
         .should('contain.text', debitComission)
    }

    checkPaymentCurrency(paymentCurrency){
      cy.get('[data-qa-node="commission-currency"]')
        .should('contain.text', paymentCurrency)
    }
}

export const SereginbyTest1 = new SereginbyMobile()