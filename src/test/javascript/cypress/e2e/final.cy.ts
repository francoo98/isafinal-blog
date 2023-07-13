describe('Final', () => {

  const username = Cypress.env('E2E_USERNAME') ?? 'admin';
  const password = Cypress.env('E2E_PASSWORD') ?? 'admin';

  beforeEach(() => {
    cy.login(username, password);
  });

  it('Cambiar nombre de post', () => {
    cy.visit('http://localhost:8080/post');
    cy.get('[ng-reflect-router-link="/post,1,edit"]').click()
    cy.get('[data-cy="title"]').clear().type('Nuevo nombre')
    cy.get("[data-cy=entityCreateSaveButton]").click()
    cy.contains('A Post is updated with identifier 1')
  })

  it('Eliminar un tag', () => {
    cy.visit('/tag')
    cy.get(':nth-child(1) > .text-end > .btn-group > [data-cy="entityDeleteButton"]').click()
    cy.get('[data-cy="entityConfirmDeleteButton"]').click()
    cy.contains('A Tag is deleted')
  })

  it('Crear blog', () => {
    cy.visit('/blog')
    cy.get('[data-cy="entityCreateButton"]').click()
    cy.get('[data-cy="name"]').type("Nuevo blog")
    cy.get('[data-cy="handle"]').type("Un blog nuevo")
    cy.get('[data-cy="entityCreateSaveButton"]').click()
    cy.contains('A new Blog is created')
  })
})