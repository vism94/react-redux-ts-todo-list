// todosSlice.ts
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { TodoType } from '../../types/TodoTypes';
import { addTodoThunk, deleteTodoThunk, editTodoThunk, getTodosThunk, toggleTodoStateThunk } from './todoAsyncActions';

type InitialStateType = {
  data: TodoType[];
  editingTodo: TodoType | null; // Для хранения редактируемого todo
};

const initialState: InitialStateType = {
  data: [],
  editingTodo: null, // Начальное значение для редактирования
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Устанавливаем редактируемую задачу
    setEditingTodo: (state, action: PayloadAction<TodoType>) => {
      state.editingTodo = action.payload;
    },
    // Очищаем редактируемую задачу
    clearEditingTodo: (state) => {
      state.editingTodo = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodosThunk.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
    builder.addCase(addTodoThunk.fulfilled, (state, { payload }) => {
      state.data.push(payload);
    });
    builder.addCase(deleteTodoThunk.fulfilled, (state, { payload }) => {
      state.data = state.data.filter((todo) => todo.id !== payload);
    });
    builder.addCase(editTodoThunk.fulfilled, (state, { payload }) => {
      state.data = state.data.map((todo) => (todo.id === payload.id ? payload : todo));
    });
    builder.addCase(toggleTodoStateThunk.fulfilled, (state, { payload }) => {
      state.data = state.data.map((todo) =>
        todo.id === payload.id ? payload : todo
      );
    });
  },
});

export const { setEditingTodo, clearEditingTodo } = todosSlice.actions;
export default todosSlice.reducer;
