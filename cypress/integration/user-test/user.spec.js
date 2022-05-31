describe('User E2E Testing', () => {
  beforeEach(() => {
    // login
  });

  afterEach(() => {
    // logout
  });

  it.skip('create user from DOM', () => {
    const firstName = 'Nathanael';
    const lastName = 'Akale';
    const email = 'nati@gmail.com';
    const phoneNumber = '+2519466252649';
    const role = 'USER';

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
    cy.wait(5000);
  });

  it.skip('create user using post request', () => {

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

  it.skip('displays display list of users', () => {
    cy.visit('http://localhost:3000/user/user-list');
    cy.wait(5000);
    cy.get('[data-cy=user-list-element]').should("have.length.at.least", 2);
  });

  it("search users by ID", () => {
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

  })

  it.skip('delete the first user', () => {
    cy.get('[data-cy=user-delete-element]').first()
      .click();
  });

  it.skip('delete all users', () => {
    cy.get('[data-cy=user-delete-element]')
      .click({multiple: true});
    cy.get('[data-cy=user-list-element]').should("have.length", 0);
  });
});
