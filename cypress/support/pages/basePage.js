export class BasePage{

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

typeFirstLastNameCard(firstName, lastName){
    cy.get('[data-qa-node="firstNamedebitSource"]')
      .type(firstName)
      .get('[data-qa-node="lastNamedebitSource"]')
      .type(lastName)
}

submitPayment(){
    cy.get('button[type="submit"]')
      .click()
  }
}
export const basePage = new BasePage()