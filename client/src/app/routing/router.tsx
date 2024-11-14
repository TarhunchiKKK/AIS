import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, SignInPage, SignUpPage } from "@/pages/auth";
import { routes } from "@/shared/constants";
import { BaseLayout } from "@/pages/BaseLayout";
import { AdminPage } from "@/pages/admin";
import { PrivilegentRoute } from "@/features/roles";
import { Operations } from "@/features/roles/types";
import { EditUserPage, UserPage } from "@/pages/users";

export const router = createBrowserRouter([
    {
        path: routes.Home,
        children: [
            {
                index: true,
                element: <EditUserPage />,
            },
            {
                element: <BaseLayout />,
                children: [
                    {
                        path: routes.Admin,
                        element: (
                            <PrivilegentRoute operation={Operations.SEE_USERS}>
                                <AdminPage />
                            </PrivilegentRoute>
                        ),
                    },
                    {
                        path: routes.User,
                        element: <UserPage />,
                    },
                ],
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
