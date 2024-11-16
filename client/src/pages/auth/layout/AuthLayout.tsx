import { ContentWrapper } from "@/shared/ui";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <main className="w-screen h-screen">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[460px] md:w-[600px]">
                <ContentWrapper>
                    <Outlet />
                </ContentWrapper>
            </div>
        </main>
    );
}
