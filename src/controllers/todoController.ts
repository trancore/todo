import express, { Request, Response } from 'express';

import { todoService } from '../services/todoService';
import { PostTodo } from '../types/typescript-node/api';

const app = express;

export const todoController = app.Router();

const { getTodos, postTodo } = await todoService();

/**
 * TODO-001 Todo一覧取得
 */
todoController.get('/todos', async (req, res) => {
  console.log('GET /todos');
  const todos = await getTodos();
  res.json(todos);
});

/**
 * TODO-003 Todo作成
 */
todoController.post(
  '/todos',
  async (
    req: Request<undefined, undefined, PostTodo, undefined>,
    res: Response<undefined, any>,
  ) => {
    console.log('post /todos');
    const requestTodo = req.body;
    await postTodo(requestTodo);
    res.end();
  },
);
