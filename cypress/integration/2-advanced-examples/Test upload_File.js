

//Example HTTP the Get request
it('Example  Get request', () => {
    cy.request('https://social-network.samuraijs.com/api/1.0/users')
        .then((responce) => {
            console.log(responce);
        })
})
 