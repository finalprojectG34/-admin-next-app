describe('Login E2E Testing', () => {
    let inputs;

    beforeEach(() => {
        // logout
        // cy.visit('http://localhost:3000/logout');
        cy.removeFromLocalStorage();

        //load login data
        cy.fixture("login-data").then(val => {
            inputs = val;
        })
    });

    it('Check logout', () => {
        expect(localStorage.getItem('store')).to.eq(null);
    });

    it('login from DOM', () => {
        const phoneNumber = inputs["allValid"].phoneNumber;
        const password = inputs["allValid"].password;

        cy.visit('http://localhost:3000/login');

        cy.get('[data-cy=login-error-container]').should("not.exist");
        cy.get('[data-cy=login-phone-input]').type(phoneNumber);
        cy.get('[data-cy=login-password-input]').type(password);
        cy.get('[data-cy=login-phone-button]').click();
        cy.wait(5000);
        cy.get('[data-cy=login-error-container]').should("exist");
    });

    it('check login with valid phoneNumber and valid password', () => {
        const phoneNumber = inputs["allValid"].phoneNumber;
        const password = inputs["allValid"].password;

        cy.login(phoneNumber, password, (body) => {
            console.log(body)
            expect(body.data?.login).to.not.eq(null);
            cy.storeToLocalStorage(body?.data?.login.token)
        })
    });

    it('check login with invalid phoneNumber and valid password', () => {
        const phoneNumber = inputs["invalidPhone"].phoneNumber;
        const password = inputs["invalidPhone"].password;

        cy.login(phoneNumber, password, (body) => {
            console.log(body)
            expect(body?.data?.login).to.eq(null);
            expect(body?.errors[0].message).to.eq("User does not exist");
        })
    });

    it('check login with valid phoneNumber and invalid password', () => {
        const phoneNumber = inputs["invalidPassword"].phoneNumber;
        const password = inputs["invalidPassword"].password;

        cy.login(phoneNumber, password, (body) => {
            console.log(body)
            expect(body?.data?.login).to.eq(null);
            expect(body?.errors[0].message).to.eq("User credentials not correct");
        })
    });

    it('check login with invalid phoneNumber and invalid password', () => {
        const phoneNumber = inputs["bothInvalid"].phoneNumber;
        const password = inputs["bothInvalid"].password;

        cy.login(phoneNumber, password, (body) => {
            console.log(body)
            expect(body?.data?.login).to.eq(null);
            expect(body?.errors[0].message).to.eq("User does not exist");
        })
    });

    it('check login with empty phoneNumber and empty password', () => {
        const phoneNumber = inputs["bothEmpty"].phoneNumber;
        const password = inputs["bothEmpty"].password;

        cy.login(phoneNumber, password, (body) => {
            console.log(body)
            expect(body?.data?.login).to.eq(null);
            expect(body?.errors[0].message).to.eq("User does not exist");
        })
    });
});
