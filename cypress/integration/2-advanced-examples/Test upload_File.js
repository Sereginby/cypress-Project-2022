

//Example HTTP the Get request
it.skip('Example  Get request', () => {
    cy.request('https://social-network.samuraijs.com/api/1.0/users')
        .then((responce) => {
            console.log(responce.body.items);
        })
})
 
it('Example  Get request 2', () => {
    cy.request('https://queuev4.vk.com/im1576')
        .then((responce) => {
            console.log(responce);
        })
})