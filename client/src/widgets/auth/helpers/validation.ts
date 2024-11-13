import {
    AlphaBeticSymbolsValidator,
    EmailValidator,
    EqualValuesValidator,
    IncludesLowerCaseValidator,
    IncludesNumberValidator,
    IncludesSpecialSymbolsValidator,
    IncludesUpperCaseValidator,
    MaxLengthVaidator,
    MinLengthValidator,
    ValidationBuilder,
} from "@/utils/validation";

export function validateFirstName(firstName: string) {
    return new ValidationBuilder(firstName)
        .pipe(new MinLengthValidator(3, "Имя должно быть не менее 3 символов."))
        .pipe(new MaxLengthVaidator(12, "Имя не может быть более 12 символов"))
        .pipe(new AlphaBeticSymbolsValidator("Имя должно содержать только буквы."))
        .validate();
}

export function validateLastName(lastName: string) {
    return new ValidationBuilder(lastName)
        .pipe(new MinLengthValidator(3, "Фамилия должно быть не менее 3 символов."))
        .pipe(new MaxLengthVaidator(12, "Фамилия не может быть более 12 символов"))
        .pipe(new AlphaBeticSymbolsValidator("Фамилия должно содержать только буквы."))
        .validate();
}

export function validateEmail(email: string) {
    return new ValidationBuilder(email).pipe(new EmailValidator("Некорректный email.")).validate();
}

export function validatePassword(password: string, confirmPassword: string | null) {
    let validationBuilder = new ValidationBuilder(password)
        .pipe(new MinLengthValidator(8, "Пароль должен быть не менее 8 символов."))
        .pipe(new IncludesUpperCaseValidator("Пароль должен содержать хотя бы 1 заглавную букву."))
        .pipe(new IncludesLowerCaseValidator("Пароль должен содержать хотя бы 1 строчную букву."))
        .pipe(new IncludesNumberValidator("Пароль должен содержать хотя бы 1 цифру."))
        .pipe(new IncludesSpecialSymbolsValidator("Пароль должен содержать хотя бы 1 спец. символ."));

    if (confirmPassword !== null) {
        validationBuilder = validationBuilder.pipe(
            new EqualValuesValidator(confirmPassword, "Пароли должны совпадать."),
        );
    }

    return validationBuilder.validate();
}
