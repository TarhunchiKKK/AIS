import { useState } from "react";
import { TModalContextProps } from "./types";
import { ModalContext } from "./constants";
import { createPortal } from "react-dom";

export function ModalContextProvider({ children }: TModalContextProps) {
    const [element, setElement] = useState<JSX.Element | null>();

    const open = (modal: JSX.Element) => {
        setElement(modal);
    };

    const close = () => {
        setElement(null);
    };

    return (
        <ModalContext.Provider value={{ open, close }}>
            {children}

            {element !== null &&
                createPortal(
                    <>
                        <div
                            onClick={close}
                            className="fixed top-0 left-0 z-40 w-screen h-screen bg-black opacity-15"
                        ></div>

                        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg shadow-md bg-white px-3 md:px-6 py-2 md:py-4">
                            {element}
                        </div>
                    </>,
                    document.body,
                )}
        </ModalContext.Provider>
    );
}
