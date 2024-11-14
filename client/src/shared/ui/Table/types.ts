export type TTableProps<TItem> = {
    items: TItem[];

    renderItem: (item: TItem) => JSX.Element;

    renderHeaders: () => JSX.Element;
};
