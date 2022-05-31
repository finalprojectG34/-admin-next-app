describe('Shop E2E Testing', () => {
  beforeEach(() => {
    // login
  });

  afterEach(() => {
    // logout
  });

  it('create shop from DOM', () => {
    const name = 'My new Shop';
    const description = 'all in one';
    const city = 'Addis Ababa';
    const subCity = 'bole';
    const addressName = 'rwanda';
    const tinNumber = "9874532156";

    cy.visit('http://localhost:3000/shop/create');

    cy.get('[data-cy=company-name-input]').type(name);
    cy.get('[data-cy=company-description-input]').type(description);
    cy.get('[data-cy=company-city-input]').type(city);
    cy.get('[data-cy=company-sub-city-input]').type(subCity);
    cy.get('[data-cy=company-address-name-input]').type(addressName);
    cy.get('[data-cy=company-tin-number-input]').type(tinNumber);

    cy.get('[data-cy=company-create-button]').click();
    cy.wait(5000);
  });

  it('create shop using post request', () => {

    const name = 'clothes shop';
    const description = 'yr turkey clothes';
    const city = 'Addis Ababa';
    const subCity = 'piyassa';
    const addressName = 'mahmud musika';
    const tinNumber = "874894512";

    const CREATE_USER = `
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
        'Content-Type': 'application/json'
      },
      body: {
        query: CREATE_USER,
        variables: {
          "input": {
            "name": name,
            "description": description,
            "ownerID": "6293bb9598be04cb9f7df319",
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
      const data = response.body.data.createCompany;

      expect(data.name).to.be.eq(name);
      expect(data.description).to.be.eq(description);
      expect(data.address.city).to.be.eq(city);
      expect(data.address.subCity).to.be.eq(subCity);
      expect(data.address.addressName).to.be.eq(addressName);
      expect(data.tinNumber).to.be.eq(tinNumber);
    });
  });

  it('displays display list of shops', () => {
    cy.visit('http://localhost:3000/shop/list');
    cy.wait(5000);
    cy.get('[data-cy=shop-list-element]').should("have.length.at.least", 2);
  });

  it.skip("search shop by ID", () => {
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
      cy.get('[data-cy=shop-id-search-input]').type(id);
      cy.get('[data-cy=shop-id-search-button]').click();
      cy.wait(10000);

      cy.get('[data-cy=shop-id-search-result]').should("contain", id);
    });

  })

  it('delete the first shop', () => {
    cy.visit('http://localhost:3000/shop/list');
    cy.get('[data-cy=shop-delete-element]').first()
      .click();
  });

  it('delete all shop', () => {
    cy.get('[data-cy=shop-delete-element]')
      .click({multiple: true});
    cy.get('[data-cy=shop-list-element]').should("have.length", 0);
  });
});
