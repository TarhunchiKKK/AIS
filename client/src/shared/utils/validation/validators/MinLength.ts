import { TValidator } from "../types";

export class MinLengthValidator implements TValidator<string> {
    private errorMessage: string;

    private minLength: number;

    constructor(minLength: number, errorMessage: string) {
        this.minLength = minLength;
        this.errorMessage = errorMessage;
    }

    public validate(value: string) {
        if (value.length >= this.minLength) {
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
