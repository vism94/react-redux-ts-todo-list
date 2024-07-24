import type { z } from 'zod';
import type { TodoSchema } from '../utils/validators';

export type TodoType = z.infer<typeof TodoSchema>;

export type TodoDataType = Pick<TodoType, 'todo' | 'done' >

export type EditTodoPayload = {
  id: TodoType['id'];
  updates: Partial<TodoDataType>;
};

export type ApiResponse = TodoType[];

export type TodoActionTypes =
  | { type: 'ADD_TODOS'; payload: ApiResponse }
  | { type: 'ADD_TODO'; payload: TodoType }
  | { type: 'DELETE_TODO'; payload: TodoType['id'] }
  | { type: 'EDIT_TODO'; payload: EditTodoPayload };
