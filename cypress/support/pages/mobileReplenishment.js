export class mobilePhoneReplenishment {
    typePhoneNumber(phonenumber){
        cy.get('[data-qa-node="phone-number"]')
          .type(phonenumber)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
          .type(amount)
    }

    typeDebitCardData(cardNumber, expDate, CVV){
        cy.get('[data-qa-node="numberdebitSource"]')
          .type(cardNumber)
          .get('[data-qa-node="expiredebitSource"]')
          .type(expDate)
          .get('[data-qa-node="cvvdebitSource"]')
          .type(CVV)
    
    }

    submitPayment(){
        cy.get('[data-qa-node="submit"]').click()
    }

    checkDebitCard(debitCard){
        cy.get('[data-qa-node="card"]')
          .should('have.text', 'debitCard')
    }

    checkDebitAmount(debitAmount){
        cy.get('[data-qa-node="amount"]')
          .eq(1)
          .should('contain.text', 'debitAmount')
          .should('contain.text', 'debitAmount')
    }

}
