import { alphaBeticSymbols } from "../constants";
import { TValidator } from "../types";

export class AlphaBeticSymbolsValidator implements TValidator<string> {
    private errorMessage: string;

    constructor(errorMessage: string) {
        this.errorMessage = errorMessage;
    }

    public validate(value: string) {
        for (const symbol of value) {
            if (!alphaBeticSymbols.includes(symbol.toLowerCase())) {
                return {
                    valid: false as const,
                    error: this.errorMessage,
                };
            }
        }

        return {
            valid: true as const,
        };
    }
}
