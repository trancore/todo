describe('トップ画面にアクセスする。', () => {
  it('ログイン状態になる', () => {
    cy.getAllCookies().then((cookies) => {
      if (!cookies || (cookies && cookies.length < 3)) {
        cy.signin();
      }
    });
  });

  it('トップ画面に遷移する。', () => {
    cy.visit('/');

    cy.url().should('equal', `${Cypress.env('BASE_URL')}/`);
  });

  it('トップ画面でAPIをコールする。', () => {
    // APIを呼び出す際のinterceptを準備
    cy.intercept(`${Cypress.env('API_SERVER_URL')}/todos?status=TODO,WIP`).as(
      'get_todos',
    );

    // APIを取得する
    cy.wait('@get_todos').its('response.statusCode').should('eq', 304);
  });
});
