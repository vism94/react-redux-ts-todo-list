import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type CounterType = {
  value: number;
};

const initialState: CounterType = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBy: (state, { payload }: PayloadAction<number>) => {
      state.value += payload;
    },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;

export default counterSlice;
