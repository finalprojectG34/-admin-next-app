describe('Sign Up E2E Testing', () => {
    let inputs;

    before(() => {
        //load login data
        cy.fixture("signup-data").then(val => {
            inputs = val;
        });
    })

    beforeEach(() => {
        // logout
        // cy.visit('http://localhost:3000/logout');
        cy.removeFromLocalStorage();
    });

    it('Check logout', () => {
        expect(localStorage.getItem('store')).to.eq(null);
    });

    it('check signup with valid phoneNumber, valid password, valid fullName, and valid phoneNumber', () => {
        const firstName = inputs["allValid"].firstName;
        const lastName = inputs["allValid"].lastName;
        const phoneNumber = inputs["allValid"].phoneNumber;
        const password = inputs["allValid"].password;
        const email = inputs["allValid"].email;
        const verificationCode = inputs["allValid"].verificationCode;

        cy.signUpFromDom({firstName, lastName, phoneNumber, password, email, verificationCode}, (body) => {
            console.log(body)
            expect(localStorage.getItem('store')).to.not.eq(null);
        });
    });

    it('check signup with invalid phoneNumber', () => {
        const firstName = inputs["inValidPhoneNumber"].firstName;
        const lastName = inputs["inValidPhoneNumber"].lastName;
        const phoneNumber = inputs["inValidPhoneNumber"].phoneNumber;
        const password = inputs["inValidPhoneNumber"].password;
        const email = inputs["inValidPhoneNumber"].email;
        const verificationCode = inputs["inValidPhoneNumber"].verificationCode;

        cy.signUpFromDom({firstName, lastName, phoneNumber, password, email, verificationCode, inValidPhone: true}, (body) => {
            console.log(body)
            expect(body?.data?.authPhoneAndRegister).to.eq(null);
            expect(body?.errors[0].message).to.eq("Invalid PhoneNumber!");
        })
    });

    it('check signup with invalid password', () => {
        const firstName = inputs["invalidPassword"].firstName;
        const lastName = inputs["invalidPassword"].lastName;
        const phoneNumber = inputs["invalidPassword"].phoneNumber;
        const password = inputs["invalidPassword"].password;
        const email = inputs["invalidPassword"].email;
        const verificationCode = inputs["invalidPassword"].verificationCode;

        cy.signUpFromDom({firstName, lastName, phoneNumber, password, email, verificationCode}, (body) => {
            console.log(body)
            expect(body?.data?.authPhoneAndRegister).to.eq(null);
            expect(body?.errors[0].message).to.eq("User validation failed: password: Path `password` (`pas`) is shorter than the minimum allowed length (4).");
        })
    });

    it('check signup with invalid fullName', () => {
        const firstName = inputs["invalidFullName"].firstName;
        const lastName = inputs["invalidFullName"].lastName;
        const phoneNumber = inputs["invalidFullName"].phoneNumber;
        const password = inputs["invalidFullName"].password;
        const email = inputs["invalidFullName"].email;
        const verificationCode = inputs["invalidFullName"].verificationCode;

        cy.signUpFromDom({firstName, lastName, phoneNumber, password, email, verificationCode}, (body) => {
            console.log(body)
            expect(body?.data?.authPhoneAndRegister).to.eq(null);
            expect(body?.errors[0].message).to.eq("\"firstName\" must only contain alpha-numeric characters");
        })
    });

    it('check signup making some inputs empty', () => {
        const firstName = inputs["allEmpty"].firstName;
        const lastName = inputs["allEmpty"].lastName;
        const phoneNumber = inputs["allEmpty"].phoneNumber;
        const password = inputs["allEmpty"].password;
        const email = inputs["allEmpty"].email;
        const verificationCode = inputs["allEmpty"].verificationCode;

        cy.signUpFromDom({firstName, lastName, phoneNumber, password, email, verificationCode}, (body) => {
            console.log(body)
            expect(body?.data?.authPhoneAndRegister).to.eq(null);
            expect(body?.errors[0].message).to.eq("User does not exist");
        })
    });
});
