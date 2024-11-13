export type TQueryError = {
    data: {
        message: string;

        error: string;

        statusCode: number;
    };

    status: number;
};
