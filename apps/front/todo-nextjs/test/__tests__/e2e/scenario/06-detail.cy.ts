describe('詳細なTODOを確認する。', () => {
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

  it('詳細なTODOを表示する。', () => {
    cy.get('div#todo').first().click();

    cy.get('div#modal')
      .should('contain.text', '詳細')
      .and('contain.text', 'タイトル')
      .and('contain.text', '説明')
      .and('contain.text', '期限');
    cy.get('button').should('have.length', 3);
  });

  it('モーダルを閉じる。', () => {
    cy.get('#Close').click();

    cy.get('div#modal').should('have.length', 0);
  });
});
