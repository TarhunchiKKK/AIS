import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TCheckRoleResponse } from "./types";
import { TAuthorizedRequest } from "@/shared/types";
import { Operations } from "../types";
import { QueryHeadersBuilder } from "@/shared/utils";

export const rolesApi = createApi({
    reducerPath: "roles/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/roles`,
    }),

    endpoints: (builder) => ({
        checkPrmissions: builder.query<TCheckRoleResponse, TAuthorizedRequest<Operations>>({
            query: (dto: TAuthorizedRequest<Operations>) => ({
                url: "/check",
                params: {
                    operation: dto.data,
                },
                headers: new QueryHeadersBuilder().setBearerToken(dto.access).build(),
            }),
        }),
    }),
});
