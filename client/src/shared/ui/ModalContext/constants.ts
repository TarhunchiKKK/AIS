import { createContext } from "react";
import { TModalContextState } from "./types";

const defaultState: TModalContextState = {
    open: (_: JSX.Element) => {},
    close: () => {},
};

export const ModalContext = createContext(defaultState);
