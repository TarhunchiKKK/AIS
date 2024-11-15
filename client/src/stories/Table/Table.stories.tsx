import { Meta, StoryObj } from "@storybook/react";
import { mockItems, mockRenderItem, mockRenerHeaders } from "./mocks";
import { Table } from "@/shared/ui";
import { TMockItem } from "./types";
import "../../app/styles/index.css";

const meta: Meta<typeof Table<TMockItem>> = {
    title: "Components/Table",
    component: Table,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: mockItems,
        renderItem: mockRenderItem,
        renderHeaders: mockRenerHeaders,
    },
    render: (args) => <Table {...args} />,
};
