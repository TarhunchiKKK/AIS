export const haveEmptyFields = (obj: object) => {
    return Object.values(obj).some((value) => !value);
};
