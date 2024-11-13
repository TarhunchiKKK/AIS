import { authApi } from "@/features/auth";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
