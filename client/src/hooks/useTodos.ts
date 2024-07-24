import type React from 'react';
import { useEffect } from 'react';
import {
  addTodoThunk,
  deleteTodoThunk,
  editTodoThunk,
  getTodosThunk,
  toggleTodoStateThunk,
} from '../redux/todos/todoAsyncActions';
import { clearEditingTodo, setEditingTodo } from '../redux/todos/todosSlice';
import type { EditTodoPayload, TodoDataType, TodoType } from '../types/TodoTypes';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export default function useTodos(): {
  todos: TodoType[];
  editingTodo: TodoType | null;
  todoSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteTodoHandler: (id: TodoType['id']) => void;
  editTodoHandler: (payload: EditTodoPayload) => void;
  handleTextChange: (id: TodoType['id'], text: string) => void;
  handleToggleTodoState: (id: TodoType['id']) => void;
  handleSaveClick: (id: TodoType['id']) => void;
  handleCancelClick: () => void;
}{ 
  const todos = useAppSelector((state) => state.todos.data || []);
  const editingTodo = useAppSelector((state) => state.todos.editingTodo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getTodosThunk());
  }, [dispatch]);

  const todoSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as unknown as TodoDataType;
    void dispatch(addTodoThunk(data));
  };

  const deleteTodoHandler = (id: TodoType['id']): void => {
    void dispatch(deleteTodoThunk(id));
  };

  const editTodoHandler = ({ id, updates }: EditTodoPayload): void => {
    void dispatch(editTodoThunk({ id, updates }));
  };

  const handleTextChange = (id: TodoType['id'], text: string): void => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      dispatch(
        setEditingTodo({
          ...todo,
          todo: text,
        }),
      );
    }
  };


  const handleSaveClick = (id: TodoType['id']): void => {
    if (editingTodo && editingTodo.id === id) {
      const updates: Partial<TodoType> = {
        todo: editingTodo.todo || '',
        done: editingTodo.done || false,
      };
      void dispatch(editTodoThunk({ id, updates }));
    }
  };

  const handleCancelClick = (): void => {
    dispatch(clearEditingTodo());
  };

  const handleToggleTodoState = (id: TodoType['id']): void => {
    void dispatch(toggleTodoStateThunk(id));
  };

  return {
    todos,
    editingTodo, // Добавлено в возвращаемое значение
    todoSubmitHandler,
    deleteTodoHandler,
    editTodoHandler,
    handleTextChange,
    handleSaveClick,
    handleCancelClick, // Добавлено в возвращаемое значение
    handleToggleTodoState,
  };
}
