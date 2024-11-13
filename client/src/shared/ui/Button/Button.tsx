import { buttonSizeStyles } from "./constants";
import { TButtonProps } from "./types";

export function Button({ size, content, onClick }: TButtonProps) {
    const sizeStyles = buttonSizeStyles[size];

    return (
        <button
            onClick={onClick}
            className={`${sizeStyles} rounded-md border-[0.5px] border-black hover:border-blue hover:text-blue cursor-pointer`}
        >
            {content}
        </button>
    );
}
