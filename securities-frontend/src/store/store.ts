import { configureStore } from "@reduxjs/toolkit";
import { securitiesApi } from "./queries/securitiesApi";

export const store = configureStore({
  reducer: {
    [securitiesApi.reducerPath]: securitiesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(securitiesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
