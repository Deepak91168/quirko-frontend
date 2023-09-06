import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
  loading: false,
  error: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      Cookies.set("user", JSON.stringify(action.payload), { expires: 30 });
      state.loading = false;
      state.error = false;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export const userReducer = userSlice.reducer;
