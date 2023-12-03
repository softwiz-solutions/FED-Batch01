import { createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0, counterUpdated: false };
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      //   console.log("action", action.payload);
      state.counter += action.payload;
      state.counterUpdated = true;
      console.log("increment", state.counter);
    },
    decrement: (state, action) => {
      state.counterUpdated = true;
      state.counter -= action.payload;
      console.log("decrement", state.counter);
      console.log("counter updated", state.counterUpdated);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
