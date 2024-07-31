describe('アプリケーションに初期アクセスする。', () => {
  it('トップ画面へ遷移するとサインイン画面にリダイレクトする', () => {
    cy.clearAllCookies();
    cy.visit('/');

    cy.url().should(
      'equal',
      Cypress.env('BASE_URL') + `/signin?callbackUrl=%2F`,
    );
  });
});
