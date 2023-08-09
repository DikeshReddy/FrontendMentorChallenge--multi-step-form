import {configureStore} from "@reduxjs/toolkit";
import functionReducer from "./step-functions-slice";
import userReducer from "./signup-component-slice";

export const store = configureStore({
  reducer: {user: userReducer, stepFunction: functionReducer},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
