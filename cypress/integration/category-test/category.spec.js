describe('Category E2E Testing', () => {
    beforeEach(() => {
        //login
        const phoneNumber = '+251900000000';
        const password = 'password';

        cy.login(phoneNumber, password, false)
    });

    afterEach(() => {
        // logout
        cy.visit('http://localhost:3000/logout');
    });

    it('create categories from DOM', () => {
        const catName = 'cat 1';
        const catDescription = 'cat 1 description';

        cy.visit('http://localhost:3000/category/create-category');

        cy.get('[data-cy=category-name-input]').type(catName);
        cy.get('[data-cy=category-description-input]').type(catDescription);

        cy.get('[data-cy=category-create-button]').click();
        cy.wait(5000);
    });

    it('create category using post request', () => {

        const catName = 'cat 2';
        const catDescription = 'cat 2 description';

        const CREATE_CATEGORY = `
      mutation ($input: CategoryInput!) {
        createCategory(input: $input) {
          id
          description
          name
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
                query: CREATE_CATEGORY,
                variables: {
                    'input':
                        {
                            'name': catName,
                            'description': catDescription
                        }
                }
            }
        }).then(response => {
            const data = response.body.data.createCategory;

            expect(data.name).to.be.eq(catName);
            expect(data.description).to.be.eq(catDescription);
        });
    });

    it('displays display list of categories', () => {
        cy.visit('http://localhost:3000/category/category-list');
        cy.wait(5000);
        cy.get('[data-cy=category-list-row]').should("have.length.at.least", 2);
    });

    it('delete the first category item', () => {
        cy.visit('http://localhost:3000/category/category-list');
        cy.get('[data-cy=delete-category]').first()
            .click();
    });

    it('delete all categories', () => {
        cy.visit('http://localhost:3000/category/category-list');
        cy.get('[data-cy=delete-category]')
            .click({multiple: true});
        cy.get('[data-cy=category-list-row]').should("have.length", 0);
    });
});
