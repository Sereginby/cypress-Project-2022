export class Transfers {

    

typeReceiverCard(numberReceiver){
        cy.get('[data-qa-node="numberreceiver"]')
          .type(numberReceiver)
}

typeComment(comment){
   cy.get('[data-qa-node="toggle-comment"]')
     .click()
     .get('[data-qa-node="comment"]')
     .type(comment)
}

checkPayerAndReceiverCard(payerCard, receiverCard){
    cy.get('[data-qa-node="payer-card"]')
      .should('have.text', payerCard)
      .get('[data-qa-node="receiver-card"]')
      .should('have.text', receiverCard)

}

checkPayerAmountAndTotalAmount(payerAmount, totalAmount){
    cy.get('[data-qa-node="payer-amount"]')
      .should('have.text', payerAmount)
      .get('[data-qa-node="total"]')
      .find('div')
      .should('contain.text', totalAmount)
      .should('contain.text', totalAmount)
}

checkPayerCurrency(payerCurrency){
    cy.get('[data-qa-node="payer-currency"]')
      .should('have.text', payerCurrency)
}

checkComment(comment){
    cy.get('[data-qa-node="comment"]')
      .should('have.text', comment)
}

}
    export const transfers = new Transfers()