import { Button } from "@/shared/ui";
import "../../app/styles/index.css";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        content: "Small",
        size: "sm",
    },
    render: (args) => (
        <div style={{ margin: "auto" }}>
            <Button {...args} />
        </div>
    ),
};

export const Middle: Story = {
    args: {
        content: "Middle",
        size: "md",
    },
    render: (args) => (
        <div style={{ margin: "auto" }}>
            <Button {...args} />
        </div>
    ),
};

export const Large: Story = {
    args: {
        content: "Large",
        size: "lg",
    },
    render: (args) => (
        <div style={{ margin: "auto" }}>
            <Button {...args} />
        </div>
    ),
};
