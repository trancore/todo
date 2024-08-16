export {};

describe('トップ画面からTODOを削除する。', () => {
  let todoTitle: string;
  let todoDescription: string;
  let todoDeadline: string;

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

  it('TODO削除ボタンを押下する。', () => {
    cy.get('div#todo')
      .first()
      .find('[test-id="todo-title"]')
      .then((heading) => {
        todoTitle = heading.text();
      });
    cy.get('div#todo')
      .first()
      .find('[test-id="todo-description"]')
      .then((paragraph) => {
        todoDescription = paragraph.text();
      });
    cy.get('div#todo')
      .first()
      .find('[test-id="todo-deadline"]')
      .then((deadline) => {
        todoDeadline = deadline.text();
      });
    cy.get('svg#TrashCan').first().click();
  });

  it('トーストが表示される。', () => {
    cy.get('div#toast').find('p').should('have.text', 'TODOを削除しました');
    cy.wait(5000);
    cy.get('div#toast').should('not.exist');
  });

  it('削除したTODOが存在しない。', () => {
    cy.get('div#todo')
      .first()
      .find('[test-id="todo-title"]')
      .should('not.contain.text', todoTitle);
    cy.get('div#todo')
      .first()
      .find('[test-id="todo-description"]')
      .should('not.contain.text', todoDescription);
    cy.get('div#todo')
      .first()
      .find('[test-id="todo-deadline"]')
      .should('not.contain.text', todoDeadline);
  });
});

describe('TODO詳細モーダルからTODOを削除する。', () => {
  let todoTitle: string;
  let todoDescription: string;
  let todoDeadline: string;

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
    cy.get('div#todo')
      .first()
      .find('[test-id="todo-title"]')
      .then((paragraph) => {
        todoTitle = paragraph.text();
      });
    cy.get('div#todo')
      .first()
      .find('[test-id="todo-description"]')
      .then((paragraph) => {
        todoDescription = paragraph.text();
      });
    cy.get('div#todo')
      .first()
      .find('[test-id="todo-deadline"]')
      .then((paragraph) => {
        todoDeadline = paragraph.text();
      });
    cy.get('div#todo').first().click();

    cy.get('div#modal')
      .should('contain.text', '詳細')
      .and('contain.text', 'タイトル')
      .and('contain.text', '説明')
      .and('contain.text', '期限');
    cy.get('button').should('have.length', 3);
  });

  it('TODO削除ボタンを押下する。', () => {
    cy.get('button').contains('削除').click();
  });

  it('トーストが表示される。', () => {
    cy.get('div#toast').find('p').should('have.text', 'TODOを削除しました');
    cy.wait(5000);
    cy.get('div#toast').should('not.exist');
  });

  it('削除したTODOが存在しない。', () => {
    cy.get('div#todo')
      .first()
      .find('[test-id="todo-title"]')
      .should('not.contain.text', todoTitle);
    cy.get('div#todo')
      .first()
      .find('[test-id="todo-description"]')
      .should('not.contain.text', todoDescription);
    cy.get('div#todo')
      .first()
      .find('[test-id="todo-deadline"]')
      .should('not.contain.text', todoDeadline);
  });
});
