export {};

describe('トップ画面からTODOを完了する。', () => {
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

  it('TODO完了ボタンを押下する。', () => {
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
    cy.get('svg#Check').first().click();
  });

  it('トーストが表示される。', () => {
    cy.get('div#toast').find('p').should('have.text', 'TODOを完了にしました');
    cy.wait(5000);
    cy.get('div#toast').should('not.exist');
  });

  it('ハンバーガーメニューを押下する。', () => {
    cy.get('svg#Menu').first().click();

    cy.get('[test-id="menu-float"]').should('have.length', 1);
    cy.get('[test-id="menu-float"]')
      .find('a')
      .should('have.text', '完了済TODO')
      .should('have.attr', 'href')
      .and('include', '/completed');
  });

  it('TODO完了画面に遷移する。', () => {
    cy.get('[test-id="menu-float"]').find('a').click();

    cy.url().should('equal', `${Cypress.env('BASE_URL')}/completed`);
  });

  it('完了にしたTODOが表示されている。', () => {
    cy.get('div#todo')
      .first()
      .find('[test-id="todo-title"]')
      .should('have.text', todoTitle);
    cy.get('div#todo')
      .first()
      .find('[test-id="todo-description"]')
      .should('have.text', todoDescription);
    cy.get('div#todo')
      .first()
      .find('[test-id="todo-deadline"]')
      .should('have.text', todoDeadline);
  });
});
