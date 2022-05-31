describe('Category E2E Testing', () => {
  beforeEach(() => {
    // login
  });

  afterEach(() => {
    // logout
  });

  it('create categories from DOM', () => {
    const catName = 'cat 1';
    const catDescription = 'cat 1 description';
    const catImage = 'cat 1 Image';

    cy.visit('http://localhost:3000/category/create');

    cy.get('[data-cy=category-name-input]').type(catName);
    cy.get('[data-cy=category-description-input]').type(catDescription);
    cy.get('[data-cy=category-image-input]').type(catImage);

    cy.get('[data-cy=create-category-button]').click();
    cy.wait(5000);
  });

  it('create category using post request', () => {

    const catName = 'cat 2';
    const catDescription = 'cat 2 description';
    const catImage = 'cat 2 Image';

    const CREATE_CATEGORY = `
      mutation ($input: CategoryInput!) {
        createCategory(input: $input) {
          id
          description
          facets
          image
          name
          parentId
          parentsPath
          path
          slug
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
              'image': catImage,
              'description': catDescription
            }
        }
      }
    }).then(response => {
      const data = response.body.data.createCategory;

      expect(data.name).to.be.eq(catName);
      expect(data.description).to.be.eq(catDescription);
      expect(data.image).to.be.eq(catImage);
    });
  });

  it('displays display list of categories', () => {
    cy.visit('http://localhost:3000/category/list');
    cy.wait(5000);
    cy.get('[data-cy=category-list-row]').should("have.length.at.least", 2);
  });

  it('delete the first category item', () => {
    cy.get('[data-cy=delete-category]').first()
      .click();
  });
});
