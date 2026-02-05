export {};

const TEST_TITLE = 'testtitle';
const TEST_DESCRIPTION = 'testdescription';
const TEST_DATE = '2024-01-01';

describe('トップ画面からTODOを編集する。', () => {
  it('ログイン状態になる', () => {
    cy.signin();
  });

  it('トップ画面に遷移する。', () => {
    cy.visit('/');

    cy.url().should('equal', `${Cypress.env('BASE_URL')}/`);
  });

  it('TODO編集モーダルを表示する。', () => {
    cy.get('svg#SquareEdit').first().click();

    cy.get('div#modal')
      .should('contain.text', '編集')
      .and('contain.text', 'タイトル')
      .and('contain.text', '説明')
      .and('contain.text', '期限');
    cy.get('button').should('have.length', 1);
  });

  it('正常な値を入力フォームに入力する。', () => {
    cy.get('input#textform').type(TEST_TITLE);
    cy.get('textarea#textarea').type(TEST_DESCRIPTION);
    cy.get('input#date').type(TEST_DATE);

    cy.get('p#textform-error-message').should('have.text', '');
    cy.get('p#textarea-error-message').should('have.text', '');
  });

  it('送信する。', () => {
    cy.window().then((window) => {
      const state = window.store.getState();
      const selectedTodoId = state.todo.id;

      cy.intercept(
        `${Cypress.env('API_SERVER_URL')}/todos/${selectedTodoId}`,
      ).as('post_todos');
    });
    cy.get('button').click();

    cy.wait('@post_todos').its('response.statusCode').should('eq', 204);
  });

  it('トップ画面にリダイレクトする', () => {
    cy.url().should('equal', `${Cypress.env('BASE_URL')}/`);
  });

  it('トーストが表示される。', () => {
    cy.get('div#toast').find('p').should('have.text', 'TODOが更新されました');
    cy.wait(5000);
    cy.get('div#toast').should('not.exist');
  });

  it('登録したTODOが表示される。', () => {
    cy.get('div#todo')
      .first()
      .find('div')
      .first()
      .find('h3')
      .should('have.text', TEST_TITLE);
    cy.get('div#todo')
      .first()
      .find('div')
      .first()
      .find('p')
      .should('have.text', TEST_DESCRIPTION);
    cy.get('div#todo')
      .first()
      .find('div')
      .first()
      .next()
      .find('p')
      .should('have.text', TEST_DATE.replaceAll('-', '/'));
  });
});

describe('TODO編集モーダルからTODOを編集する。', () => {
  it('ログイン状態になる', () => {
    cy.signin();
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

  it('TODO編集モーダルを表示する。', () => {
    cy.get('button').contains('編集').click();

    cy.get('div#modal')
      .should('contain.text', '編集')
      .and('contain.text', 'タイトル')
      .and('contain.text', '説明')
      .and('contain.text', '期限');
    cy.get('button').should('have.length', 1);
  });

  it('正常な値を入力フォームに入力する。', () => {
    cy.get('input#textform').type(TEST_TITLE);
    cy.get('textarea#textarea').type(TEST_DESCRIPTION);
    cy.get('input#date').type(TEST_DATE);

    cy.get('p#textform-error-message').should('have.text', '');
    cy.get('p#textarea-error-message').should('have.text', '');
  });

  it('送信する。', () => {
    cy.window().then((window) => {
      const state = window.store.getState();
      const selectedTodoId = state.todo.id;

      cy.intercept(
        `${Cypress.env('API_SERVER_URL')}/todos/${selectedTodoId}`,
      ).as('post_todos');
    });
    cy.get('button').click();

    cy.wait('@post_todos').its('response.statusCode').should('eq', 204);
  });

  it('トップ画面にリダイレクトする', () => {
    cy.url().should('equal', `${Cypress.env('BASE_URL')}/`);
  });

  it('トーストが表示される。', () => {
    cy.get('div#toast').find('p').should('have.text', 'TODOが更新されました');
    cy.wait(5000);
    cy.get('div#toast').should('not.exist');
  });

  it('登録したTODOが表示される。', () => {
    cy.get('div#todo')
      .first()
      .find('div')
      .first()
      .find('h3')
      .should('have.text', TEST_TITLE);
    cy.get('div#todo')
      .first()
      .find('div')
      .first()
      .find('p')
      .should('have.text', TEST_DESCRIPTION);
    cy.get('div#todo')
      .first()
      .find('div')
      .first()
      .next()
      .find('p')
      .should('have.text', TEST_DATE.replaceAll('-', '/'));
  });
});
