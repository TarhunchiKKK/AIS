import { Meta, StoryObj } from "@storybook/react";
import { ArrowBack } from "@/shared/ui";
import { withRouter } from "storybook-addon-react-router-v6";
import "../../app/styles/index.css";

const meta: Meta<typeof ArrowBack> = {
    title: "Components/ArrowBack",
    component: ArrowBack,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div style={{ width: "min-content" }}>
            <ArrowBack />
        </div>
    ),
    decorators: [withRouter],
};
