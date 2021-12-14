describe('it test user lists and details in reqres.in', () => {
    it('validate 200 response for list users', () => {
        cy.request('https://reqres.in/api/users?page=2').then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('validate that the email is eq to lindsay.ferguson@reqres.in', () => {
        cy.request('https://reqres.in/api/users?page=2').then((response) => {
            expect(response.body.data[1].email).to.eq('lindsay.ferguson@reqres.in');
        });
    });

    it('validate 201 response for create and print id and jobs', () => {
        const userData = { 'name': 'morpheus', 'job': 'leader'}
        cy.request('POST', 'https://reqres.in/api/users', userData).then((response) => {
            expect(response.status).to.eq(201);
            const id = response.body.id;
            const job = response.body.job
            console.log(id);
            console.log(job);
        });
    });
});