describe('User E2E Testing', () => {
    let inputs, logInInputs;

    before(() => {
        //load company data
        cy.fixture("user-data").then(val => {
            inputs = val;
        });
        cy.fixture("login-data").then(val => {
            logInInputs = val;

            //login
            const phoneNumber = logInInputs["allValid"].phoneNumber;
            const password = logInInputs["allValid"].password;

            // cy.intercept("POST", "http://localhost:8000/graphql").as("login");
            cy.login(phoneNumber, password, (body) => {
                expect(body.data?.login).to.not.eq(null);
                // cy.wait("@login").then(() => {
                    cy.storeToLocalStorage(body?.data?.login.token);
                // });
            });
        });
    });

    // after(() => {
    //     // logout
    //     cy.removeFromLocalStorage();
    // });

    it('create user from DOM', () => {
        const firstName = 'Nathanael';
        const lastName = 'Akale';
        const email = 'nati@gmail.com';
        const phoneNumber = '+2519466252649';
        const role = 'USER';

        cy.intercept("POST", "http://localhost:8000/graphql").as("create-user")

        cy.visit('http://localhost:3000/user/create-user');

        cy.get('[data-cy=user-firstName-input]').type(firstName);
        cy.get('[data-cy=user-lastName-input]').type(lastName);
        cy.get('[data-cy=user-email-input]').type(email);
        cy.get('[data-cy=user-phoneNumber-input]').type(phoneNumber);
        cy.get('#role-select')
            .parent()
            .click()
            .get("ul")
            .contains(role)
            .click();

        cy.get('[data-cy=user-create-button]').click();
        cy.wait("@create-user");
    });

    it('create user using post request', () => {

        const firstName = 'Moti';
        const lastName = 'Dinsa';
        const phone = '+251912788989';
        const role = 'user';

        const CREATE_USER = `
          mutation Mutation($input: UserCreateInput!) {
            createUser(input: $input) {
              id
              firstName
              lastName
              phone
              password
              email
            }
          }
        `;

        cy.request({
            url: '/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                query: CREATE_USER,
                variables: {
                    'input':
                        {
                            firstName,
                            lastName,
                            phone,
                            role
                        }
                }
            }
        }).then(response => {
            const data = response.body.data.createUser;

            expect(data.firstName).to.be.eq(firstName);
            expect(data.lastName).to.be.eq(lastName);
            expect(data.phone).to.be.eq(phone);
        });
    });

    it('displays display list of users', () => {
        cy.intercept("POST", "http://localhost:8000/graphql").as("create-user")
        cy.visit('http://localhost:3000/user/user-list');
        cy.wait("@create-user").then(() => {
            cy.get('[data-cy=user-list-element]').should("have.length.at.least", 2);
        });
    });

    it("check get user by a valid user field", () => {
        const GET_ALL_USER = `
          query {
            getAllUsers {
              id
              firstName
              lastName
              email
              phone
            }
          }
        `;

        let id;

        cy.visit('http://localhost:3000/user/search-user');

        cy.request({
            url: '/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                query: GET_ALL_USER,
            }
        }).then(response => {
            id = response.body.data?.getAllUsers[0]?.id;
            cy.get('[data-cy=user-id-search-input]').type(id);
            cy.get('[data-cy=user-id-search-button]').click();
            cy.wait(10000);

            cy.get('[data-cy=user-id-search-result]').should("contain", id);
        });

    });

    it("check get user by an invalid user field", () => {
        cy.visit('http://localhost:3000/user/search-user');

        const id = "507f1f77bcf86cd799439011";
        cy.get('[data-cy=user-id-search-input]').type(id);
        cy.get('[data-cy=user-id-search-button]').click();
        cy.wait(2000);

        cy.get('[data-cy=user-id-search-result]').should("not.exist");

    });

    it("check get user by empty user field", () => {
        cy.visit('http://localhost:3000/user/search-user');

        const id = "";
        // cy.get('[data-cy=user-id-search-input]').type(id);
        cy.get('[data-cy=user-id-search-button]').click();
        cy.wait(2000);

        cy.get('[data-cy=user-id-search-result]').should("not.exist");
    });

    it('delete the first user', () => {
        cy.visit('http://localhost:3000/user/user-list');
        cy.get('[data-cy=user-delete-element]').first()
            .click();
    });

    it('delete all users', () => {
        cy.visit('http://localhost:3000/user/user-list');
        cy.get('[data-cy=user-delete-element]')
            .click({multiple: true});
        cy.get('[data-cy=user-list-element]').should("have.length", 0);
    });
});
