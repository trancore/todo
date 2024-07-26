describe('アプリケーションに初期アクセスする。', () => {
  // cypressは、各テストの前にすべての Cookie を自動的にクリアし、
  // テスト間で状態が共有されるのを防ぐ。そのため、初期アクセスのための
  // アクセストークンを削除すす処理は不要。
  it('トップ画面へ遷移するとサインイン画面にリダイレクトする', () => {
    cy.visit('/');

    cy.url().should(
      'equal',
      Cypress.env('BASE_URL') + `/signin?callbackUrl=%2F`,
    );
  });
});
