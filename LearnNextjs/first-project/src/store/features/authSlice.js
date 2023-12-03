import { createSlice } from "@reduxjs/toolkit";

const initialState = { userLogined: false };

export const authSlice = createSlice({
  name: "auth slice",
  initialState,
  reducers: {
    login: (state) => {
      //   let user = state.userLogined;
      let user = true;
      const updatedState = {
        ...state,
        userLogined: true,
      };
      console.log("value of login", updatedState);
      return updatedState;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
