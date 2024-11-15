import { MouseEvent } from "react";

export type TButtonSize = "sm" | "md" | "lg";

export type TButtonProps = {
    size: TButtonSize;

    content: string;

    disabled?: boolean;

    onClick?: (() => void) | ((e: MouseEvent<HTMLButtonElement>) => void);
};
