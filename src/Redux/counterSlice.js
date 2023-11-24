import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      console.log(action.payload);
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
