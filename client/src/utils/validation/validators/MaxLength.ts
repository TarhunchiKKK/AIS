import { TValidator } from "../types";

export class MaxLengthVaidator implements TValidator<string> {
    private errorMessage: string;

    private maxLength: number;

    constructor(maxLength: number, errorMessage: string) {
        this.maxLength = maxLength;
        this.errorMessage = errorMessage;
    }

    public validate(value: string) {
        if (value.length <= this.maxLength) {
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
