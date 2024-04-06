import { $Enums } from '@prisma/client';

import {
  GetTodosParams,
  GetTodosResponse,
  GetTodosTodoIdResponse,
  PostTodoRequest,
  PutTodosTodoIdRequest,
  PutTodosTodoIdStatusRequest,
} from '../types/api/todos';

import { todoRepository } from '../repositories/todoRepository';

export const todoService = async () => {
  const {
    findTodo,
    findAllTodos,
    createTodo,
    updateTodo,
    deleteTodo: deleteTodoRepository,
    putTodoStatus: putTodoStatusRepository,
  } = await todoRepository();

  const getTodo = async (
    todoId: string,
  ): Promise<GetTodosTodoIdResponse | undefined> => {
    try {
      const todoIdNum = Number(todoId);
      if (!todoIdNum) {
        // TODO 一旦適当に定義
        throw Error;
      }
      const todo = await findTodo(todoIdNum);

      if (!todo) {
        // Todoが見つからない場合
        // TODO: 一旦適当にエラーを定義
        throw Error;
      }

      return {
        id: todo.id,
        userId: todo.user_id,
        title: todo.title,
        description: todo.description ?? '',
        deadlineAt: todo.deadline_at ? todo.deadline_at.toLocaleString() : '',
        status: todo.status,
        createdAt: todo.created_at.toLocaleString(),
        updatedAt: todo.updated_at.toLocaleString(),
      };
    } catch (error) {
      // TODO 一旦適当にエラーを定義
    }
  };

  const getTodos = async (
    params: GetTodosParams,
  ): Promise<GetTodosResponse | undefined> => {
    const status = params?.status?.split(',') as $Enums.STATUS[] | undefined;

    try {
      const todos = await findAllTodos(status);
      if (!todos || todos.length < 1) {
        // TODO 一旦適当にエラーを定義
        throw Error;
      }

      return todos.map((todo) => {
        return {
          id: todo.id,
          userId: todo.user_id,
          title: todo.title,
          description: todo.description ?? '',
          deadlineAt: todo.deadline_at ? todo.deadline_at.toLocaleString() : '',
          status: todo.status,
          createdAt: todo.created_at.toLocaleString(),
          updatedAt: todo.updated_at.toLocaleString(),
        };
      });
    } catch (error) {
      // TODO 一旦適当にエラーを定義
    }
  };

  const postTodo = async (todo: PostTodoRequest) => {
    try {
      await createTodo(todo);
    } catch (error) {
      // TODO 一旦適当にエラーを定義
    }
  };

  const putTodo = async (todoId: string, todo: PutTodosTodoIdRequest) => {
    try {
      const todoIdNum = Number(todoId);
      if (!todoIdNum) {
        // TODO 一旦適当に定義
        throw Error;
      }

      await updateTodo(todoIdNum, todo);
    } catch (error) {
      // TODO 一旦適当にエラーを定義
    }
  };

  const deleteTodo = async (todoId: string) => {
    try {
      const todoIdNum = Number(todoId);
      if (!todoIdNum) {
        // TODO 一旦適当に定義
        throw Error;
      }

      await deleteTodoRepository(todoIdNum);
    } catch (error) {
      // TODO 一旦適当にエラーを定義
    }
  };

  const putTodoStatus = async (
    todoId: string,
    status: PutTodosTodoIdStatusRequest,
  ) => {
    try {
      const todoIdNum = Number(todoId);
      if (!todoIdNum) {
        // TODO 一旦適当に定義
        throw Error;
      }

      await putTodoStatusRepository(todoIdNum, status);
    } catch (error) {
      // TODO 一旦適当にエラーを定義
    }
  };

  return { getTodo, getTodos, postTodo, putTodo, deleteTodo, putTodoStatus };
};
