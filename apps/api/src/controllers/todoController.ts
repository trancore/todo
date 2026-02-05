import express, { type Request, type Response } from 'express';

import type {
  DeleteTodosTodoIdResponse,
  GetTodosParams,
  GetTodosResponse,
  GetTodosTodoIdResponse,
  PostTodoRequest,
  PostTodoResponse,
  PutTodosTodoIdRequest,
  PutTodosTodoIdResponse,
  PutTodosTodoIdStatusParams,
  PutTodosTodoIdStatusRequest,
  PutTodosTodoIdStatusResponse,
  TodosTodoIdParams,
} from '../types/api/todos.ts';

import { todoService } from '../services/todoService.ts';

const app = express;

export const todoController = app.Router();

const todoServicePromise = todoService();

/** Todo一覧取得 */
todoController.get(
  '/todos',
  async (
    req: Request<undefined, GetTodosResponse, undefined, GetTodosParams>,
    res: Response<GetTodosResponse>,
  ) => {
    const { getTodos } = await todoServicePromise;
    const { query } = req;
    const todos = await getTodos(query);
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
    const { postTodo } = await todoServicePromise;
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
    const { getTodo } = await todoServicePromise;
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
    const { putTodo } = await todoServicePromise;
    const todoId = req.params.todo_id;
    const requestTodo = req.body;
    await putTodo(todoId, requestTodo);
    res.status(204).end();
  },
);

/**
 * Todo削除
 */
todoController.delete(
  '/todos/:todo_id',
  async (
    req: Request<
      TodosTodoIdParams,
      undefined,
      DeleteTodosTodoIdResponse,
      undefined
    >,
    res: Response<undefined>,
  ) => {
    const { deleteTodo } = await todoServicePromise;
    const todoId = req.params.todo_id;
    await deleteTodo(todoId);
    res.status(204).end();
  },
);

/**
 * Todo状態更新
 */
todoController.put(
  '/todos/:todo_id/status',
  async (
    req: Request<
      PutTodosTodoIdStatusParams,
      PutTodosTodoIdStatusRequest,
      PutTodosTodoIdStatusResponse,
      undefined
    >,
    res: Response<undefined>,
  ) => {
    const { putTodoStatus } = await todoServicePromise;
    const todoId = req.params.todo_id;
    const status = req.body;
    putTodoStatus(todoId, status);
    res.status(204).end();
  },
);
