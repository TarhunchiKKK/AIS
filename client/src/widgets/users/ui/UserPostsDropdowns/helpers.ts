import { managementsList } from "./constants";

export const findManagements = () => {
    return managementsList.map((management) => management.name);
};

export const findDepartments = (management: string | null) => {
    if (!management) {
        return [];
    }
    return managementsList.find((m) => m.name === management)!.departments.map((department) => department.name);
};

export const findPosts = (management: string | null, department: string | null) => {
    if (!management || !department) {
        return [];
    }
    return managementsList.find((m) => m.name === management)!.departments.find((d) => d.name === department)!.posts;
};
