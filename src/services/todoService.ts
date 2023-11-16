import {
  GetTodosResponse,
  GetTodosTodoIdResponse,
  PostTodoRequest,
} from '../types/api/todos';
import { PostTodo } from '../types/typescript-node/api';

import { todoRepository } from '../repositories/todoRepository';

export const todoService = async () => {
  const {
    findTodo,
    findAllTodos,
    createTodo,
    updateTodo,
    deleteTodo: deleteTodoRepository,
  } = await todoRepository();

  const getTodo = async (
    todoId: number,
  ): Promise<GetTodosTodoIdResponse | undefined> => {
    try {
      const todo = await findTodo(todoId);

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

  const getTodos = async (): Promise<GetTodosResponse | undefined> => {
    try {
      const todos = await findAllTodos();
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

  const putTodo = async (todoId: string, todo: PostTodo) => {
    const todoIdNum = Number(todoId);
    await updateTodo(todoIdNum, todo);
  };

  const deleteTodo = async (todoId: string) => {
    const todoIdNum = Number(todoId);
    await deleteTodoRepository(todoIdNum);
  };

  return { getTodo, getTodos, postTodo, putTodo, deleteTodo };
};
