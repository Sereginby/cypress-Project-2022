/// reference types="Cypress"

//Example HTTP the Get request
it.skip('Example sending the Get request', () => {
    cy.request('https://next.privat24.ua/mobile')
        .then((responce) => {
            console.log(responce);

        })
})

//Example HTTP POST with EXPECT verification of responce
it.skip("Example sending the POST request", () => {
    const requestBody = {
        action:"add",
        phone:"+380686979712",
        amount:50,
        currency:"UAH",
        cardCvv:"111",
        card:"4552331448138217",
        cardExp:"0524",
        operator:"Kyivstar Ukraine",
        operatorId:"602",
        xref:"c76667fcdf0fa9c4dbb6fb77844d9386",
        nameA:"Ruth montaivo",
        _: 1645181448620,
    };

    const headersData = {
        cookie:
        'cookie: _ga=GA1.2.2105284010.1643412713; pubkey=5386a7cdb444afcac71df6bdee160b9d; _gid=GA1.2.1117828784.1645292528; fp=62; lfp=2/3/2022, 1:25:13 PM; pa=1645292538121.4080.7391048879161175next.privat24.ua0.7104200574202801+1',
    };

    cy.request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: headersData,
    }).then((responce) => {
        expect(responce).to.have.property('status').to.equal(200)
        expect(responce.body).to.have.property('status').to.equal('success')
        expect(responce.headers).to.have.property('content-length').to.equal('137')

        console.log(responce);
    });
});

//Example HTTP POST with SHOULD verification of responce
it("Example sending the POST request", () => {
    const requestBody = {
        action:"add",
        phone:"+380686979712",
        amount:50,
        currency:"UAH",
        cardCvv:"111",
        card:"4552331448138217",
        cardExp:"0524",
        operator:"Kyivstar Ukraine",
        operatorId:"602",
        xref:"c76667fcdf0fa9c4dbb6fb77844d9386",
        nameA:"Ruth montaivo",
        _: 1645181448620,
    };

    const headersData = {
        cookie:
        'cookie: _ga=GA1.2.2105284010.1643412713; pubkey=5386a7cdb444afcac71df6bdee160b9d; _gid=GA1.2.1117828784.1645292528; fp=62; lfp=2/3/2022, 1:25:13 PM; pa=1645292538121.4080.7391048879161175next.privat24.ua0.7104200574202801+1',
    };

    cy.request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: headersData,
    
    }).its('body').should('contain', {
        status: 'success'
    }).its('data').should('contain', {
          
    })
});
