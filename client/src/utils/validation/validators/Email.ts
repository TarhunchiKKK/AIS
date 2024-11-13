import { emailRegexp } from "../constants";
import { TValidator } from "../types";

export class EmailValidator implements TValidator<string> {
    private errorMessage: string;

    constructor(errorMessage: string) {
        this.errorMessage = errorMessage;
    }

    public validate(value: string) {
        const isMatching = emailRegexp.test(value);

        if (isMatching) {
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
