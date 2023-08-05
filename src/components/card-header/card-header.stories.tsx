import type {CardHeaderProps} from "./card-header";
import type {Meta, StoryObj} from "@storybook/react";
import {CardHeader} from "./card-header";

const meta: Meta<CardHeaderProps> = {
  component: CardHeader,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<CardHeaderProps>;

export const personaInfoHeader: Story = {
  args: {
    title: "Personal info",
    children: "Please provide your name, email address, and phone number.",
  },
};
