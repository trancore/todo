describe('サインインする。', () => {
  // CIでソーシャル認証に依存すると、bot検出の可能性が高く、
  // 場合によってはプロバイダの利用規約違反によりアカウント停止になります。
  // https://docs.cypress.io/guides/end-to-end-testing/social-authentication
  it('サインイン画面からGitHubログインを行い、トップ画面にリダイレクトする。', () => {
    cy.visit('/signin');
    cy.get('button').click();
    cy.get('button').click();

    cy.origin('https://github.com', () => {
      const username = (Cypress.env('GITHUB_USERNAME') as string) || '';
      const password = (Cypress.env('GITHUB_PASSWORD') as string) || '';

      cy.get('input[name="login"]').type(username);
      cy.get('input[name="password"]').type(password, { log: false });
      cy.get('input[name="commit"]').click();

      cy.get('a[data-test-selector="gh-mobile-link"]').click();
    });

    cy.wait(20000);

    cy.url().should('equal', `${Cypress.env('BASE_URL')}/`);
  });
});
