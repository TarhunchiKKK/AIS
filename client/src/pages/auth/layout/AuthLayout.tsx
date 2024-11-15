import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[460px] md:w-[600px] rounded-md shadow-lg border-[0.5px] border-gray-100">
            <Outlet />
        </div>
    );
}
