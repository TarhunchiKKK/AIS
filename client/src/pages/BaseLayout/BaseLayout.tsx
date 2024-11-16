import { Header } from "@/widgets/other";
import { Outlet } from "react-router-dom";

export function BaseLayout() {
    return (
        <>
            <Header />

            <main className="px-4 md:px-0">
                <div className="container mx-auto">
                    <Outlet />
                </div>
            </main>
        </>
    );
}
