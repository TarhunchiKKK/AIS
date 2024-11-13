import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TSignInDto, TSignInResponse, TSignUpDto, TSignUpResponse } from "./types";

export const authApi = createApi({
    reducerPath: "auth/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/auth`,
    }),

    endpoints: (builder) => ({
        signUp: builder.mutation<TSignUpResponse, TSignUpDto>({
            query: (signUpDto: TSignUpDto) => ({
                url: "/sign-up",
                method: "POST",
                body: signUpDto,
            }),
        }),

        signIn: builder.mutation<TSignInResponse, TSignInDto>({
            query: (signInDto: TSignInDto) => ({
                url: "/sign-in",
                method: "POST",
                body: signInDto,
            }),
        }),
    }),
});
