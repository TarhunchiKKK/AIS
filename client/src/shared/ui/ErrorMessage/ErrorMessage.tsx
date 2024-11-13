import { TErrorMessageProps } from "./types";

export function ErrorMessage({ content }: TErrorMessageProps) {
    return <p className="mb-4 text-red-400 text-sm">{content}</p>;
}
