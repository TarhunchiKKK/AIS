import { TValidator } from "../types";

export class EqualValuesValidator<T> implements TValidator<T> {
    private errorMessage: string;

    private valueToCompare: T;

    constructor(valueToCompare: T, errorMessage: string) {
        this.valueToCompare = valueToCompare;
        this.errorMessage = errorMessage;
    }

    public validate(value: T) {
        if (value === this.valueToCompare) {
            return {
                valid: true as const,
            };
        } else {
            return {
                valid: false as const,
                error: this.errorMessage,
            };
        }
    }
}
