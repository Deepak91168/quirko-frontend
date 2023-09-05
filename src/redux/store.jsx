import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/userSlice";
import {authReducer} from "./user/authSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
