import { Outlet } from "react-router-dom";

export function BaseLayout() {
    return (
        <main className="py-4 px-4 md:px-0">
            <div className="container mx-auto">
                <Outlet />
            </div>
        </main>
    );
}
