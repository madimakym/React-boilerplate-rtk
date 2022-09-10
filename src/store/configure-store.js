import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "../features/home/service/home-api";

export default configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      homeApi.middleware
    ),
});
