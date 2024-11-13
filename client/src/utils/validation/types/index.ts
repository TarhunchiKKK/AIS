type TSuccessValidation = {
    valid: true;
};

type TFailedValidation = {
    valid: false;
    error: string;
};

type TValidationResult = TSuccessValidation | TFailedValidation;

export type TValidator<T> = {
    validate: (value: T) => TValidationResult;
};
