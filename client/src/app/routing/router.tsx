import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, SignInPage, SignUpPage } from "@/pages/auth";
import { routes } from "@/shared/constants";
import { BaseLayout } from "@/pages/BaseLayout";
import { AdminPage } from "@/pages/admin";
import { PrivilegentRoute } from "@/features/roles";
import { Operations } from "@/features/roles/types";
import { EditUserPage, UserPage } from "@/pages/users";
import { ModalContextProvider } from "@/shared/ui";
import { HomePage } from "@/pages/home";
import { ProtectedRoute } from "@/features/auth";

export const router = createBrowserRouter([
    {
        path: routes.Home,
        children: [
            {
                element: <BaseLayout />,
                children: [
                    {
                        path: routes.Home,
                        element: (
                            <ProtectedRoute redirectRoute={routes.SignIn}>
                                <HomePage />
                            </ProtectedRoute>
                        ),
                    },
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
                    {
                        path: routes.EditUser,
                        element: (
                            <ModalContextProvider>
                                <EditUserPage />
                            </ModalContextProvider>
                        ),
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
