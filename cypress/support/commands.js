// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (phoneNumber, password, caller) => {
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
          token
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
        const data = response.body;
        console.log(data)
        localStorage.setItem("store", JSON.stringify({token: data?.data?.login?.token}));
        localStorage.setItem("roles", JSON.stringify(["ADMIN"]));
        caller(data)
    });
})

// -- This is a child command --
Cypress.Commands.add('storeToLocalStorage', (token) => {
    console.log(token)
    localStorage.setItem("store", JSON.stringify({token}));
    localStorage.setItem("roles", JSON.stringify(["ADMIN"]));
})

Cypress.Commands.add('removeFromLocalStorage', () => {
    localStorage.clear();
})

Cypress.Commands.add('signUpFromDom', (
    {firstName, lastName, phoneNumber, password, email, verificationCode, inValidPhone},
    caller
) => {
    cy.intercept('POST', 'http://localhost:8000/graphql').as('register-user')
    cy.visit('http://localhost:3000/register');

    if(firstName){
        cy.get('[data-cy=register-firstName-input]').type(firstName);
        cy.get('[data-cy=register-lastName-input]').type(lastName);
        cy.get('[data-cy=register-phoneNumber-input]').type(phoneNumber);
        cy.get('[data-cy=register-password-input]').type(password);
        cy.get('[data-cy=register-email-input]').type(email);
    }
    cy.get('[data-cy=register-button]').click();
    cy.wait(25000);
    if(firstName && !inValidPhone){
        cy.get('[data-cy=register-verificationCode-input]').type(verificationCode);
        cy.get('[data-cy=register-verification-button]').click();

        cy.wait('@register-user').then(({response}) => {
            console.log("res", response)
            caller(response.body)
        })
    } else {
        cy.get('[data-cy=register-verificationCode-input]').should("not.exist");
        cy.get('[data-cy=register-verification-button]').should("not.exist");
    }
})


// -- This is a dual command --
Cypress.Commands.add('createShop', ({
                                        name, description, city, subCity, addressName, tinNumber, phoneNumber
                                    }, caller) => {

    const CREATE_COMPANY = `
      mutation Mutation($input: CompanyCreateInput!) {
        createCompany(input: $input) {
          id
          name
          ownerId
          address {
            location {
              type
              coordinates
            }
            subCity
            city
            addressName
          }
          description
          tinNumber
          image {
            images
            imageCover
            bgImage
            suffix
            imagePath
          }
          status
        }
      }
    `;

    cy.request({
        url: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "authorization": `Bearer ${localStorage.getItem("store")?.token}`
        },
        body: {
            query: CREATE_COMPANY,
            variables: {
                "input": {
                    "name": name,
                    "description": description,
                    "ownerID": "6293bb9598be04cb9f7df319",
                    "phoneNumber": phoneNumber,
                    "address": {
                        "location": {
                            "coordinates": [654.545, 864.64554],
                            "type": "Point"
                        },
                        "subCity": subCity,
                        "city": city,
                        "addressName": addressName
                    },
                    "tinNumber": tinNumber,
                    "image": {
                        "images": ["url"],
                        "bgImage": "bgImage",
                        "imageCover": "null",
                        "suffix": "null",
                        "imagePath": "url"
                    }
                }
            }
        }
    }).then(response => {
        caller(response.body)
    });
})

//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
