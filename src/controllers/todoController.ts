import express from 'express';

import { todoService } from '../services/todoService';

const app = express;

export const todoController = app.Router();

const { getTodos } = await todoService();

/**
 * TODO-001 Todo一覧取得
 */
todoController.get('/todos', async (req, res) => {
  console.log('GET /todos');
  const todos = await getTodos();
  return res.json(todos);
});

/**
 * TODO-003 Todo作成
 */
todoController.post('/todos', (req, res) => {
  console.log('GET /todos');
});
