import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TFullUser } from "../models";
import { QueryHeadersBuilder } from "@/shared/utils";
import { TFullUserResponse, TUpdateUserQueryArgs } from "./types";
import { transformFullUser } from "./helpers";

export const usersApi = createApi({
    reducerPath: "users/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/users`,
    }),

    tagTypes: ["Users", "CurrentUser"],

    endpoints: (builder) => ({
        findAll: builder.query<TFullUser[], string>({
            query: (authToken: string) => ({
                url: "",
                headers: new QueryHeadersBuilder().setBearerToken(authToken).build(),
            }),
            providesTags: ["Users"],
            transformResponse: (response: TFullUserResponse[]) => response.map(transformFullUser),
        }),
        findOne: builder.query<TFullUser, string>({
            query: (userId: string) => ({
                url: `/${userId}`,
            }),
            providesTags: ["CurrentUser"],
            transformResponse: transformFullUser,
        }),
        findMe: builder.query<TFullUser, string>({
            query: (authToken: string) => ({
                url: "/me",
                headers: new QueryHeadersBuilder().setBearerToken(authToken).build(),
            }),
            transformResponse: transformFullUser,
        }),
        update: builder.mutation<void, TUpdateUserQueryArgs>({
            query: (dto: TUpdateUserQueryArgs) => ({
                url: `/${dto.userId}`,
                method: "PATCH",
                body: dto.data,
                headers: new QueryHeadersBuilder().setBearerToken(dto.access).build(),
            }),
            invalidatesTags: ["Users", "CurrentUser"],
        }),
    }),
});
