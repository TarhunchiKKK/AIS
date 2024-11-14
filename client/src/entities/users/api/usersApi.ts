import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TFullUser } from "../models";
import { QueryHeadersBuilder } from "@/shared/utils";
import { TChangeUserStatusDto, TFullUserResponse } from "./types";
import { TAuthorizedRequest } from "@/shared/types";
import { transformFullUser } from "./helpers";

export const usersApi = createApi({
    reducerPath: "users/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/users`,
    }),

    tagTypes: ["Users"],

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
            transformResponse: transformFullUser,
        }),
        changeUserStatus: builder.mutation<void, TAuthorizedRequest<TChangeUserStatusDto>>({
            query: (dto: TAuthorizedRequest<TChangeUserStatusDto>) => ({
                url: "/status",
                method: "PATCH",
                body: dto.data,
                headers: new QueryHeadersBuilder().setBearerToken(dto.access).build(),
            }),
        }),
    }),
});
