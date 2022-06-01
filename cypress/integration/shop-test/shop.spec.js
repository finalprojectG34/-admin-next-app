describe('Shop E2E Testing', () => {
    let inputs, logInInputs;

    before(() => {
        //load company data
        cy.fixture("company-data").then(val => {
            inputs = val;
        });
        cy.fixture("login-data").then(val => {
            logInInputs = val;

            //login
            const phoneNumber = logInInputs["allValid"].phoneNumber;
            const password = logInInputs["allValid"].password;

            cy.login(phoneNumber, password, (body) => {
                expect(body.data?.login).to.not.eq(null);
                cy.storeToLocalStorage(body?.data?.login.token)
            });
        });
    });

    it('create shop from DOM', () => {
        const name = inputs["allValid"].name;
        const description = inputs["allValid"].description;
        const city = inputs["allValid"].city;
        const phoneNumber = inputs["allValid"].phoneNumber;
        const subCity = inputs["allValid"].subCity;
        const addressName = inputs["allValid"].addressName;
        const tinNumber = inputs["allValid"].tinNumber;

        cy.intercept('POST', 'http://localhost:8000/graphql').as('create-shop')

        cy.visit('http://localhost:3000/shop/create');

        cy.get('[data-cy=company-name-input]').type(name);
        cy.get('[data-cy=company-description-input]').type(description);
        cy.get('[data-cy=company-city-input]').type(city);
        cy.get('[data-cy=company-sub-city-input]').type(subCity);
        cy.get('[data-cy=company-phoneNumber-input]').type(phoneNumber);
        cy.get('[data-cy=company-address-name-input]').type(addressName);
        cy.get('[data-cy=company-tin-number-input]').type(tinNumber);

        cy.get('[data-cy=company-create-button]').click();
        cy.wait(5000);

        cy.wait('@create-shop').then(({response}) => {
            console.log("res", response.body)
            const data = response.body.data.createCompany;

            expect(data.name).to.be.eq(name);
            expect(data.description).to.be.eq(description);
            expect(data.address.city).to.be.eq(city);
            expect(data.address.subCity).to.be.eq(subCity);
            expect(data.address.addressName).to.be.eq(addressName);
            expect(data.tinNumber).to.be.eq(tinNumber);
        })
    });

    it('create company with a valid info, and valid auth token', () => {

        const name = inputs["allValid"].name;
        const description = inputs["allValid"].description;
        const city = inputs["allValid"].city;
        const subCity = inputs["allValid"].subCity;
        const phoneNumber = inputs["allValid"].phoneNumber;
        const addressName = inputs["allValid"].addressName;
        const tinNumber = inputs["allValid"].tinNumber;

        cy.createShop({
            name, description, city, subCity, addressName, tinNumber, phoneNumber
        }, (body) => {
            const data = body.data.createCompany;

            expect(data.name).to.be.eq(name);
            expect(data.description).to.be.eq(description);
            expect(data.address.city).to.be.eq(city);
            expect(data.address.subCity).to.be.eq(subCity);
            expect(data.address.addressName).to.be.eq(addressName);
            expect(data.tinNumber).to.be.eq(tinNumber);
        });
    });

    it.skip('create company with invalid phone number', () => {

        const name = inputs["inValidPhoneNumber"].name;
        const description = inputs["inValidPhoneNumber"].description;
        const city = inputs["inValidPhoneNumber"].city;
        const subCity = inputs["inValidPhoneNumber"].subCity;
        const phoneNumber = inputs["inValidPhoneNumber"].phoneNumber;
        const addressName = inputs["inValidPhoneNumber"].addressName;
        const tinNumber = inputs["inValidPhoneNumber"].tinNumber;

        cy.createShop({
            name, description, city, subCity, addressName, tinNumber, phoneNumber
        }, (body) => {
            console.log(body)
            expect(body?.data?.createCompany).to.eq(null);
            expect(body?.errors[0].message).to.eq("Invalid PhoneNumber!");
        });
    });

    it('create company with missing info', () => {

        const name = inputs["missingInfo"].name;
        const description = inputs["missingInfo"].description;
        const city = inputs["missingInfo"].city;
        const subCity = inputs["missingInfo"].subCity;
        const phoneNumber = inputs["missingInfo"].phoneNumber;
        const addressName = inputs["missingInfo"].addressName;
        const tinNumber = inputs["missingInfo"].tinNumber;

        cy.createShop({
            name, description, city, subCity, addressName, tinNumber, phoneNumber
        }, (body) => {
            console.log(body)
            expect(body?.data?.createCompany).to.eq(null);
            expect(body?.errors[0].message).to.eq("");
        });
    });

    it.skip('create company with empty phone', () => {

        const name = inputs["emptyPhone"].name;
        const description = inputs["emptyPhone"].description;
        const city = inputs["emptyPhone"].city;
        const subCity = inputs["emptyPhone"].subCity;
        const phoneNumber = inputs["emptyPhone"].phoneNumber;
        const addressName = inputs["emptyPhone"].addressName;
        const tinNumber = inputs["emptyPhone"].tinNumber;

        cy.createShop({
            name, description, city, subCity, addressName, tinNumber, phoneNumber
        }, (body) => {
            console.log(body)
            expect(body?.data?.createCompany).to.eq(null);
            expect(body?.errors[0].message).to.eq("Invalid PhoneNumber");
        });
    });

    it('displays list of shops', () => {
        cy.intercept('POST', 'http://localhost:8000/graphql').as('shop-list')
        cy.visit('http://localhost:3000/shop/list');
        cy.wait("@shop-list").then(() => {
            cy.get('[data-cy=shop-list-element]').should("have.length.at.least", 2);
        });
    });

    it("check get company by a valid id field", () => {
        const GET_ALL_SHOP = `
          query GetAllCompanies {
            getAllCompanies {
              id
              name
            }
          }
        `;

        let id;

        cy.visit('http://localhost:3000/shop/search');

        cy.request({
            url: '/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                query: GET_ALL_SHOP,
            }
        }).then(response => {
            id = response.body.data?.getAllCompanies[0]?.id;
            cy.intercept('POST', 'http://localhost:8000/graphql').as('valid-field')
            cy.get('[data-cy=shop-id-search-input]').type(id);
            cy.get('[data-cy=shop-id-search-button]').click();
            cy.wait("@valid-field").then(() => {
                cy.get('[data-cy=shop-id-search-result]').should("contain", id);
            });
        });
    });

    it("check get company by a invalid id field", () => {
        const id = "507f1f77bcf86cd799439011";
        cy.intercept('POST', 'http://localhost:8000/graphql').as('invalid-field')
        cy.visit('http://localhost:3000/shop/search');

        cy.get('[data-cy=shop-id-search-input]').type(id);
        cy.get('[data-cy=shop-id-search-button]').click();
        cy.wait("@invalid-field").then(() => {
            cy.get('[data-cy=shop-id-search-result]').should("not.exist");
        });
    });

    it.skip("check get company by a empty id field", () => {
        const id = "";

        cy.visit('http://localhost:3000/shop/search');

        // cy.get('[data-cy=shop-id-search-input]').type(id);
        cy.get('[data-cy=shop-id-search-button]').click();
        cy.wait(10000);

        cy.get('[data-cy=shop-id-search-result]').should("not.exist");
    });

    it('delete the first shop', () => {
        cy.intercept('POST', 'http://localhost:8000/graphql').as('shop-list')
        cy.visit('http://localhost:3000/shop/list');
        cy.wait("@shop-list").then(() => {
            cy.get('[data-cy=shop-delete-element]').first()
                .click();
        });
    });

    it.skip('delete all shop', () => {
        cy.intercept('POST', 'http://localhost:8000/graphql').as('shop-list-all')
        cy.visit('http://localhost:3000/shop/list');
        cy.wait("@shop-list-all").then(() => {
            cy.get('[data-cy=shop-delete-element]')
                .click({multiple: true});
            cy.get('[data-cy=shop-list-element]').should("have.length", 0);
        });
    });
});
