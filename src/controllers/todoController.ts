import express, { Request, Response } from 'express';

import {
  GetTodosResponse,
  GetTodosTodoIdResponse,
  PostTodoRequest,
  PostTodoResponse,
  PutTodosTodoIdRequest,
  PutTodosTodoIdResponse,
  TodosTodoIdParams,
} from '../types/api/todos';
import { ExpressRequest, ExpressResponse } from '../types/express';
import { PostTodo } from '../types/typescript-node/api';

import { todoService } from '../services/todoService';

const app = express;

export const todoController = app.Router();

const { getTodo, getTodos, postTodo, putTodo, deleteTodo } =
  await todoService();

/** Todo一覧取得 */
todoController.get(
  '/todos',
  async (
    req: Request<undefined, GetTodosResponse, undefined, undefined>,
    res: Response<GetTodosResponse>,
  ) => {
    const todos = await getTodos();
    res.json(todos);
  },
);

/** Todo作成 */
todoController.post(
  '/todos',
  async (
    req: Request<undefined, PostTodoResponse, PostTodoRequest, undefined>,
    res: Response<PostTodoResponse>,
  ) => {
    const requestTodo = req.body;
    await postTodo(requestTodo);

    res.status(201).end();
  },
);

/** Todo詳細取得 */
todoController.get(
  '/todos/:todo_id',
  async (
    req: Request<
      TodosTodoIdParams,
      GetTodosTodoIdResponse,
      undefined,
      undefined
    >,
    res: Response<GetTodosTodoIdResponse>,
  ) => {
    const todoId = req.params.todo_id;
    const todo = await getTodo(todoId);
    res.json(todo);
  },
);

/** Todo更新 */
todoController.put(
  '/todos/:todo_id',
  async (
    req: Request<
      TodosTodoIdParams,
      PutTodosTodoIdResponse,
      PutTodosTodoIdRequest,
      undefined
    >,
    res: Response<PutTodosTodoIdResponse>,
  ) => {
    const todoId = req.params.todo_id;
    const requestTodo = req.body;
    await putTodo(todoId, requestTodo);
    res.status(204).end();
  },
);

/**
 * TODO-005 Todo削除
 */
todoController.delete(
  '/todos/:todo_id',
  async (
    req: ExpressRequest<
      { todo_id: string },
      undefined,
      PostTodo,
      undefined,
      undefined
    >,
    res: ExpressResponse<undefined, any>,
  ) => {
    const todoId = req.params.todo_id;
    await deleteTodo(todoId);
    res.status(204).end();
  },
);
