describe('サインインする。', () => {
  // CIでソーシャル認証に依存すると、bot検出の可能性が高く、
  // 場合によってはプロバイダの利用規約違反によりアカウント停止になります。
  // https://docs.cypress.io/guides/end-to-end-testing/social-authentication
  it('サインイン画面からGitHubログインを行い、トップ画面にリダイレクトする。', () => {
    cy.signin();

    cy.url().should('equal', `${Cypress.env('BASE_URL')}/`);
  });
});
