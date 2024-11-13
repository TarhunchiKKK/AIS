import { buttonSizeStyles } from "./constants";
import { TButtonProps } from "./types";

export function Button({ size, disabled, content, onClick }: TButtonProps) {
    const sizeStyles = buttonSizeStyles[size];

    const colorStyles = disabled
        ? "border-gray text-gray cursor-not-allowed"
        : "border-black hover:border-blue hover:text-blue cursor-pointer";

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`rounded-md border-[0.5px] ${colorStyles} ${sizeStyles} `}
        >
            {content}
        </button>
    );
}
