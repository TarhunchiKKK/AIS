import { ContentWrapper } from "@/shared/ui";
import { Meta, StoryObj } from "@storybook/react";
import "../../app/styles/index.css";

const meta: Meta<typeof ContentWrapper> = {
    title: "Components/ContentWrapper",
    component: ContentWrapper,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <ContentWrapper>
            <div
                style={{
                    height: "100px",
                    border: "1px solid black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                Content
            </div>
        </ContentWrapper>
    ),
};
