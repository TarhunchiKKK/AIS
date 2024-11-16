import { useEffect } from "react";
import { TDocumentStylesProps } from "./types";
import { documentClasses } from "./constants";

export function DocumentStyles({ children }: TDocumentStylesProps) {
    useEffect(() => {
        documentClasses.forEach((style) => document.documentElement.classList.add(style));

        return () => {
            documentClasses.forEach((style) => document.documentElement.classList.remove(style));
        };
    }, []);

    return <>{children}</>;
}
