import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: Cookies.get("token") ? Cookies.get("token") : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, actions) => {
      state.token = actions.payload;
      Cookies.set("token", actions.payload, { expires: 30 });
    },
    logout: (state) => {
      state.token = null;
      Cookies.remove("token");
      Cookies.remove("user");
    },
  },
});
export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
