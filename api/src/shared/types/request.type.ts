import { IncomingMessage } from "http";

// incoming request type
export type TRequest = IncomingMessage & {
    query?: any;

    params?: any;

    body?: any;

    [key: string]: unknown;
};
