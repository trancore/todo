describe('TODO完了画面にアクセスする。', () => {
  it('ログイン状態になる', () => {
    cy.getAllCookies().then((cookies) => {
      if (!cookies || (cookies && cookies.length < 3)) {
        cy.signin();
      }
    });
  });

  it('トップ画面に遷移する。', () => {
    cy.visit('/completed');

    cy.url().should('equal', `${Cypress.env('BASE_URL')}/completed`);
  });

  it('トップ画面でAPIをコールする。', () => {
    cy.intercept(`${Cypress.env('API_SERVER_URL')}/todos?status=DONE`).as(
      'get_todos',
    );

    cy.wait('@get_todos').its('response.statusCode').should('eq', 304);
  });
});
