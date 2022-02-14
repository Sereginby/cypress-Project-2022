export class mobilePhoneReplenishment {
    typePhoneNumber(phonenumber){
        cy.get('[data-qa-node="phone-number"]')
          .type(phonenumber)
    }
    
    checkDebitCard(debitCard){
        cy.get('[data-qa-node="card"]')
          .should('have.text', debitCard)
    }

    checkDebitAmount(debitAmount){
        cy.get('[data-qa-node="amount"]')
          .eq(1)
          .should('contain.text', debitAmount)
          .should('contain.text', debitAmount)
    }

    checkComission(comission){
       cy.get('[data-qa-node="commission"]')
      .eq(1)
    .should('have.text', comission)
    }

    checkComissionCurrency(comissionCurrency){
       cy.get('[data-qa-node="commission-currency"]')
        .eq(0)
        .should('contain.text', comissionCurrency)
    }

}

export const mobileReplenishment = new mobilePhoneReplenishment()