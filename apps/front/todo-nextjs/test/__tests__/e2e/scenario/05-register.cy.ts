export {};

const TEST_TITLE = 'etoetesttitle';
const TEST_DESCRIPTION = 'etoetestdescription';
const TEST_DATE = '2024-01-01';

/**
 * TODOを登録するシナリオ内での共通テスト関数をまとめた関数
 * @returns void
 */
function testRegisterTodo() {
  it('正常な値を入力フォームに入力する。', () => {
    cy.get('input#textform').type(TEST_TITLE);
    cy.get('textarea#textarea').type(TEST_DESCRIPTION);
    cy.get('input#date').type(TEST_DATE);

    cy.get('p#textform-error-message').should('have.text', '');
    cy.get('p#textarea-error-message').should('have.text', '');
  });

  it('送信する。', () => {
    cy.intercept(`${Cypress.env('API_SERVER_URL')}/todos`).as('post_todos');
    cy.get('button').click();

    cy.wait('@post_todos').its('response.statusCode').should('eq', 201);
  });

  it('トップ画面にリダイレクトする', () => {
    cy.url().should('equal', `${Cypress.env('BASE_URL')}/`);
  });

  it('トーストが表示される。', () => {
    cy.get('div#toast').find('p').should('have.text', 'TODOが作成されました');
    cy.wait(5000);
    cy.get('div#toast').should('not.exist');
  });

  it('登録したTODOが表示される。', () => {
    cy.get('div#todo')
      .last()
      .find('div')
      .first()
      .find('h3')
      .should('have.text', TEST_TITLE);
    cy.get('div#todo')
      .last()
      .find('div')
      .first()
      .find('p')
      .should('have.text', TEST_DESCRIPTION);
    cy.get('div#todo')
      .last()
      .find('div')
      .first()
      .next()
      .find('p')
      .should('have.text', TEST_DATE.replaceAll('-', '/'));
  });
}

describe('CSRからTODOを登録する。', () => {
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

  it('TODO登録画面に遷移する。', () => {
    cy.get('#Plus').click();

    cy.url().should('eq', `${Cypress.env('BASE_URL')}/register`);
    cy.get('h1').should('have.text', '登録');
  });

  testRegisterTodo();
});

describe('SSRからTODOを登録する。', () => {
  it('ログイン状態になる', () => {
    cy.getAllCookies().then((cookies) => {
      if (!cookies || (cookies && cookies.length < 3)) {
        cy.signin();
      }
    });
  });

  it('TODO登録画面にアクセスする。', () => {
    cy.visit('/register');

    cy.url().should('equal', `${Cypress.env('BASE_URL')}/register`);
  });

  testRegisterTodo();
});
