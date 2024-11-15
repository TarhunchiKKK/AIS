// this object defines the routing in the application
export const routes = {
    Home: "/",

    SignIn: "/auth/sign-in",

    SignUp: "/auth/sign-up",

    Admin: "/admin",

    User: "/user/:userId",

    EditUser: "/user/:userId/edit",

    createUserRoute: (userId: string) => `/user/${userId}`,

    createEditUserRoute: (userId: string) => `/user/${userId}/edit`,
};
