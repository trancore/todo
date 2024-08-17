describe('トップ画面にアクセスする。', () => {
  it('ログイン状態になる', () => {
    cy.signin();
  });

  it('トップ画面に遷移する。', () => {
    cy.visit('/');

    cy.url().should('equal', `${Cypress.env('BASE_URL')}/`);
  });

  it('トップ画面でAPIをコールする。', () => {
    cy.intercept(`${Cypress.env('API_SERVER_URL')}/todos?status=TODO,WIP`).as(
      'get_todos',
    );

    cy.wait('@get_todos').its('response.statusCode').should('eq', 304);
  });
});
