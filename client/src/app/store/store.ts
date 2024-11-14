import { usersApi } from "@/entities/users";
import { authApi } from "@/features/auth";
import { rolesApi } from "@/features/roles";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [rolesApi.reducerPath]: rolesApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
            .concat(authApi.middleware)
            .concat(rolesApi.middleware)
            .concat(usersApi.middleware),
});
