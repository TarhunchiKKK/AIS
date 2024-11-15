import { ErrorMessage } from "@/shared/ui";
import { Meta, StoryObj } from "@storybook/react";
import "../../app/styles/index.css";

const meta: Meta<typeof ErrorMessage> = {
    title: "Components/ErrorMessage",
    component: ErrorMessage,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: "This is an error message.",
    },
    render: (args) => <ErrorMessage {...args} />,
};
