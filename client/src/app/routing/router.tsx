import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, SignInPage, SignUpPage } from "@/pages/auth";
import { routes } from "@/shared/constants";

export const router = createBrowserRouter([
    {
        path: routes.Home,
        children: [
            {
                index: true,
                element: <>Home</>,
            },
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: routes.SignIn,
                        element: <SignInPage />,
                    },
                    {
                        path: routes.SignUp,
                        element: <SignUpPage />,
                    },
                ],
            },
        ],
    },
]);
