export type TModalContextProps = {
    children: JSX.Element | JSX.Element[];
};

export type TModalContextState = {
    open: (_: JSX.Element) => void;

    close: () => void;
};
