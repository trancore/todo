import express from 'express';

const app = express;

export const todoController = app.Router();

/**
 * TODO-001 Todo一覧取得
 */
todoController.get('/todos', (req, res) => {
  console.log('GET /todos');
});

/**
 * TODO-003 Todo作成
 */
todoController.post('/todos', (req, res) => {
  console.log('GET /todos');
});
