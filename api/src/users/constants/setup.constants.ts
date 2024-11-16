import { UserRoles } from "src/roles/enums/user-roles.enum";
import { UserStatus } from "../enums/user-status.enum";

export const setupUsersData = [
    {
        user: {
            firstName: "Игорь",
            lastName: "Соловьев",
            email: "solovev@gmail.com",
            password: "Password123+",
            role: UserRoles.USER,
        },
        blockingStatus: {
            status: UserStatus.ACTIVE,
            blokingTime: null,
            reason: null,
        },
        post: {
            management: null,
            department: null,
            post: null,
        },
    },
    {
        user: {
            firstName: "Павел",
            lastName: "Майков",
            email: "maikov@gmail.com",
            password: "Password123+",
            role: UserRoles.USER,
        },
        blockingStatus: {
            status: UserStatus.BLOCKED,
            blokingTime: new Date(),
            reason: "Так вышло",
        },
        post: {
            management: null,
            department: null,
            post: null,
        },
    },
    {
        user: {
            firstName: "Светлана",
            lastName: "Воронова",
            email: "voronova@gmail.com",
            password: "Password123+",
            role: UserRoles.USER,
        },
        blockingStatus: {
            status: UserStatus.ACTIVE,
            blokingTime: null,
            reason: null,
        },
        post: {
            management: null,
            department: null,
            post: null,
        },
    },
    {
        user: {
            firstName: "Дмитрий",
            lastName: "Петров",
            email: "admin1@gmail.com",
            password: "Password123+",
            role: UserRoles.ADMIN,
        },
        blockingStatus: {
            status: UserStatus.ACTIVE,
            blokingTime: null,
            reason: null,
        },
        post: {
            management: null,
            department: null,
            post: null,
        },
    },
    {
        user: {
            firstName: "Анна",
            lastName: "Павлова",
            email: "admin2@gmail.com",
            password: "Password123+",
            role: UserRoles.ADMIN,
        },
        blockingStatus: {
            status: UserStatus.ACTIVE,
            blokingTime: null,
            reason: null,
        },
        post: {
            management: null,
            department: null,
            post: null,
        },
    },
];
