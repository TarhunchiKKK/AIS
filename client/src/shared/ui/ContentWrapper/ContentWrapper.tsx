import { TContentWrapperProps } from "./types";

export function ContentWrapper({ children }: TContentWrapperProps) {
    return (
        <div className="px-4 md:px-6 py-2 md:py-4 rounded-xl bg-white shadow-md border-[0.5px] border-gray">
            {children}
        </div>
    );
}
