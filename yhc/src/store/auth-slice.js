import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isLogin: false,
  count: -1,
};

const authSlice = createSlice({
  name: "signin",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLogin = true;
      state.count = 1;
    },
    logout(state) {
      state.isLogin = false;
      state.count = -1;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
