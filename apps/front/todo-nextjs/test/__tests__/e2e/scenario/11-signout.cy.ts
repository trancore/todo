describe('サインアウトする。', () => {
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

  it('ハンバーガーメニューを押下する。', () => {
    cy.get('svg#Menu').first().click();

    cy.get('svg#PersonOff').first().should('have.length', 1);
  });

  it('サインアウトボタンを押下する', () => {
    cy.get('svg#PersonOff').first().click();

    cy.url().should('eq', `${Cypress.env('BASE_URL')}/signin?callbackUrl=%2F`);
  });
});
