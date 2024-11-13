export type TSignInDto = {
    email: string;

    password: string;
};

export type TSignInResponse = {
    user: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
    };

    access: string;
};

export type TSignUpDto = {
    firstName: string;

    lastName: string;

    email: string;

    password: string;
};

export type TSignUpResponse = {
    user: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
    };

    access: string;
};
