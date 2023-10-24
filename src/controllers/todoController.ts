import { Todo } from '@prisma/client';
import express, { Request, Response } from 'express';

import { todoService } from '../services/todoService';
import { ExpressRequest, ExpressResponse } from '../types/express';
import { PostTodo } from '../types/typescript-node/api';

const app = express;

export const todoController = app.Router();

const { getTodo, getTodos, postTodo } = await todoService();

/**
 * TODO-001 Todo一覧取得
 */
todoController.get(
  '/todos',
  async (
    req: ExpressRequest<undefined, Todo[], undefined, undefined, undefined>,
    res: ExpressResponse<Todo[], any>,
  ) => {
    const todos = await getTodos();
    res.json(todos);
  },
);

/**
 * TODO-003 Todo作成
 */
todoController.post(
  '/todos',
  async (
    req: ExpressRequest<undefined, undefined, PostTodo, undefined, undefined>,
    res: ExpressResponse<undefined, any>,
  ) => {
    const requestTodo = req.body;
    await postTodo(requestTodo);
    res.end();
  },
);

/**
 * TODO-002 Todo詳細取得
 */
todoController.get(
  '/todos/:todo_id',
  async (
    req: ExpressRequest<
      { todo_id: string },
      Todo,
      undefined,
      undefined,
      undefined
    >,
    res: ExpressResponse<Todo, any>,
  ) => {
    const todoId = req.params.todo_id;
    const todo = await getTodo(todoId);
    res.json(todo);
  },
);
