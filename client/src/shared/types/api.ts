export type TQueryError = {
    data: {
        message: string;

        error: string;

        statusCode: number;
    };

    status: number;
};

export type TAuthorizedRequest<T> = {
    data: T;

    access: string;
};
