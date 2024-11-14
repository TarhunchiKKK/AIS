import { TValidator } from "../types";

export class ValidationBuilder<T> {
    private value: T;

    private validators: TValidator<T>[] = [];

    constructor(value: T) {
        this.value = value;
    }

    public pipe(validator: TValidator<T>) {
        this.validators.push(validator);
        return this;
    }

    public validate() {
        const errors: string[] = [];

        for (const validator of this.validators) {
            const validationResult = validator.validate(this.value);

            if (!validationResult.valid) {
                errors.push(validationResult.error);
            }
        }

        return {
            valid: errors.length === 0,
            errors,
        };
    }
}
