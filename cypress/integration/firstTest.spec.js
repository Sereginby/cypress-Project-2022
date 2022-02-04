///<reference types="Cypress" />

// describe('Mobile phone replenichment',() => {

//    context("Replenishment less than the allowed amount"), () => {
//        it("Show error: Minimum amount of the replenishment 1 UAH", () => {});
//    });

// });

it('By ID', () => {
    cy.visit('https://facebook.com')
    cy.get('#email')
});

it('By Class', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    cy.get('.DocSearch-Button-Placeholder')
});

it('By Tag', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    cy.get('nav')
});

it('By Tag value', () => {
    cy.visit('http://www.facebook.com/')
    cy.get('[name="pass"]')
});

it('By Diffent Tag ', () => {
    cy.visit('http://www.facebook.com/')
    cy.get('[role="button"][data-testid="open-registration-form-button"]')
});

it('By Different Types ', () => {
    cy.visit('https://yandex.by/yandsearch?clid=2121024&win=144&from=chromesearch&text=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA+%D0%B3%D1%83%D0%B3%D0%BB&rdrnd=614060&lr=10274&redircnt=1500380228.1')
    cy.get('span[class="input__clear mini-suggest__input-clear input__clear_visibility_visible"][aria-hidden="true"]')
});

it('By Contains name ', () => {
    cy.visit('https://next.privat24.ua/')
    cy.get('*[class^="card"]')
});


it('Using Get With Find and Eq', () => {
    cy.visit('https://next.privat24.ua/deposit')
    cy.wait(8000)
    cy.get('tbody').find('td').find('div').find('button').eq('0')
});

it.only('Using Get With Find and Eq', () => {
    cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
    cy.viewport(1800,700)
    cy.get('main').find('nav').find('ul').find('li').find('a').eq(0)
});

it('Odno;lassniki', () => {
    cy.visit ('http://ok.ru/');
    cy.get ("input [type='text']"). type ('diana_zhilinskaya_3494@mail.ru');
    cy.get ("input [type='password']"). type ('123456');
    cy.get (".button-pro __wide"). click ()

});

it('Facebook', () => {
    cy.visit('https://www.facebook.com/');
    cy.get("input[type='email']"). type ('Seregin_by@mail.ru');
    cy.get("input[type='password']"). type ('123456');
    cy.get("input[type='submit']"). click ()

});

it('user', () => {
    cy.visit('https://unsplash.com/');
    cy.contains('Log in').click();
    cy.get("input[type='email']"). type ('Seregin_by@mail.ru');
    cy.get("input[type='password']"). type ('123456');
    cy.get("input[type='submit']"). click ()
    cy.get(".btn-facebook").click()

});

it("By", () => {
    cy.visit("https://rozetka.com.ua/ua/")
    cy.viewport(1920,1080)
    cy.contains('RU').click()
    cy.get("input[type='text']").type('iphone 12')
    cy.contains('Найти').click()
    cy.wait(6000)
    cy.contains('Мобильный телефон Apple iPhone 12 64GB Purple Официальная гарантия').click()
    cy.wait(6000)
    cy.contains('Купить').click()
})

it("By ID Diana", () => {
    cy.visit("https://www.facebook.com/")
    cy.get("#email")
})

it("By class Diana", () => {
    cy.visit("https://docs.cypress.io/api/commands/setcookie")
    cy.get(".DocSearch-Button-Placeholder")
})

it("By tag Diana", () => {
    cy.visit("https://docs.cypress.io/api/commands/setcookie")
    cy.get("nav")
})

it("By tag value Diana", () => {
    cy.visit("https://www.facebook.com/")
    cy.get('[data-testid="royal_pass"]')
})

it("By different tag Diana", () => {
    cy.visit("https://www.facebook.com/")
    cy.get('[href="/r.php?locale=ru_RU"][role="button"]')
})

it("By different types Diana", () => {
    cy.visit("https://www.facebook.com/")
    cy.get('a._sv4[title="Portuguese (Brazil)"]')
})

it("By contains name Diana", () => {
    cy.visit("https://next.privat24.ua/")
    cy.get('*[class^="card"]')
})

it("By contains name Diana", () => {
    cy.visit("https://next.privat24.ua/")
    cy.get('*[class^="heading"]')
})

it("Using get with find and eq Diana", () => {
        cy.visit("https://next.privat24.ua/deposit/open")
        cy.get('tbody').find('td').eq(7)
})

it("Using get with find and eq Diana", () => {
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get('tbody').find('td').find('div').find('button').eq(0)
})

it("Using get with find and eq Diana", () => {
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get('tbody').find('td').find('div').find('button').eq(0)
})

it("Using get with find and eq Diana", () => {
    cy.visit("https://docs.cypress.io/api/commands/and")
    cy.viewport(1800,1000)
    cy.get('div').find('nav').find('ul').find('li').find('a').eq(0)
})



