describe('Login E2E Testing', () => {
  beforeEach(() => {
    // logout
    // cy.visit('http://localhost:3000/logout');
  });

  it('Check logout', () => {
    expect(localStorage.getItem('store')).to.eq(null);
  });

  it.skip('login from DOM', () => {
    const phoneNumber = '+251900000000';
    const password = 'password';

    cy.visit('http://localhost:3000/login');

    cy.get('[data-cy=login-error-container]').should("not.exist");
    cy.get('[data-cy=login-phone-input]').type(phoneNumber);
    cy.get('[data-cy=login-password-input]').type(password);
    cy.get('[data-cy=login-phone-button]').click();
    cy.wait(5000);
    cy.get('[data-cy=login-error-container]').should("exist");
  });

  it.skip('login using post request', () => {
    const phoneNumber = '+251900000000';
    const password = 'password';

    const LOGIN = `
      mutation Login($input: loginInput!) {
        login(input: $input) {
          user {
            phone
            id
            firstName
            lastName
            password
            email
          }
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
        query: LOGIN,
        variables: {
          "input": {
            "info": '+251' + phoneNumber.toString().substr(phoneNumber.length - 9),
            "info_type": "phone",
            "password": password
          }
        }
      }
    }).then(response => {
      const data = response.body.data.login;
      console.log(data)
      expect(data).to.be.eq(null);
    });
  });

  it('register from DOM', () => {
    const firstName = "Bereket";
    const lastName = "Zemed";
    const phoneNumber = '+251900000000';
    const password = 'password';
    const email = 'email@gmail.com';
    const verificationCode = "000000";

    cy.visit('http://localhost:3000/register');

    cy.get('[data-cy=register-firstName-input]').type(firstName);
    cy.get('[data-cy=register-lastName-input]').type(lastName);
    cy.get('[data-cy=register-phoneNumber-input]').type(phoneNumber);
    cy.get('[data-cy=register-password-input]').type(password);
    cy.get('[data-cy=register-email-input]').type(email);
    cy.get('[data-cy=register-button]').click();
    cy.wait(25000);
    cy.get('[data-cy=register-verificationCode-input]').type(verificationCode);
    cy.get('[data-cy=register-verification-button]').click();
    cy.wait(5000);
    expect(localStorage.getItem('store')).to.not.eq(null);
  });

  it.skip('login using post request', () => {
    const firstName = "Yonatan";
    const lastName = "Endale";
    const phoneNumber = '+251900000000';
    const password = 'password';
    const verificationCode = "000000";

    const SIGN_UP = `
      mutation Mutation($token: PhoneSignupInput) {
        authPhoneAndRegister(token: $token) {
          user {
            id
            firstName
            lastName
            phone
            password
            email
          }
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
        query: SIGN_UP,
        variables:  {
          "token": {
            "firstName": firstName,
            "lastName": lastName,
            "phone": phoneNumber,
            "password": password,
            "idToken": result._tokenResponse.idToken,
            "confirmPassword": password
          }
        }
      }
    }).then(response => {
      const data = response.body.data.login;
      console.log(data)
      expect(data).to.be.eq(null);
    });
  });

});
