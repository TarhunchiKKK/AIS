import { TValidator } from "../types";

export class IncludesLowerCaseValidator implements TValidator<string> {
    private errorMessage: string;

    constructor(errorMessage: string) {
        this.errorMessage = errorMessage;
    }

    public validate(value: string) {
        for (const symbol of value) {
            if (symbol === symbol.toLowerCase()) {
                return {
                    valid: true as const,
                };
            }
        }

        return {
            valid: false as const,
            error: this.errorMessage,
        };
    }
}
