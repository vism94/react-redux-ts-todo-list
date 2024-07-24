import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter/counterSlice';
import todosSlice from './todos/todosSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todos: todosSlice
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
