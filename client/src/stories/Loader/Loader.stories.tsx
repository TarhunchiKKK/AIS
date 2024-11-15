import { Loader } from "@/shared/ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Loader> = {
    title: "Components/Loader",
    component: Loader,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div style={{ height: "300px" }}>
            <Loader />
        </div>
    ),
};
