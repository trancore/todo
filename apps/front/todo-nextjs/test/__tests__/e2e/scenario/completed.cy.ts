describe('TODO完了画面にアクセスする。', () => {
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

  it('メニューを開く。', () => {
    cy.get('#Menu').click();

    cy.get('a[href*="completed"]').should('have.text', '完了済TODO');
    cy.get('#PersonOff').should('have.length', 1);
  });

  it('TODO完了画面に遷移する。', () => {
    // APIを呼び出す際のinterceptを準備
    cy.intercept(`${Cypress.env('API_SERVER_URL')}/todos?status=DONE`).as(
      'get_todos',
    );
    cy.get('a[href*="completed"]').click();

    // APIを取得する
    cy.wait('@get_todos').its('response.statusCode').should('eq', 304);
  });

  it('TODO完了画面を表示する。', () => {
    cy.url().should('eq', `${Cypress.env('BASE_URL')}/completed`);
    cy.get('h1').should('have.text', '完了済み');
  });
});
