import type { AxiosInstance, AxiosResponse } from 'axios';
import type { ApiResponse, EditTodoPayload, TodoDataType, TodoType } from '../types/TodoTypes';
import { TodoSchema, TodosSchema } from '../utils/validators';
import apiInstance from './apiInstance';

class TodoService {
  constructor(private readonly api: AxiosInstance) {}

  async getTodos(): Promise<ApiResponse> {
    const { data } = await this.api.get<ApiResponse>('/todos');
    return TodosSchema.parse(data);
  }

  async addTodo(todo: TodoDataType): Promise<TodoType> {
    const { data } = await this.api.post<TodoType>('/todos', todo);
    return TodoSchema.parse(data);
  }

  async deleteTodo(id: TodoType['id']): Promise<AxiosResponse> {
    return this.api.delete(`/todos/${id}`);
  }

  async editTodo({ id, updates }: EditTodoPayload): Promise<TodoType> {
    const { data } = await this.api.patch<TodoType>(`/todos/${id}`, updates);
    return TodoSchema.parse(data);
  }

  async toggleTodoState(id: TodoType['id']): Promise<TodoType> {
    const { data } = await this.api.patch<TodoType>(`/todos/${id}/toggle`);
    return TodoSchema.parse(data);
  }
}

export default new TodoService(apiInstance);
