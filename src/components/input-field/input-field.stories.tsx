import type {Meta, StoryObj} from "@storybook/react";
import {InputField} from "./input-field";

const meta: Meta<typeof InputField> = {
  component: InputField,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const nameField: Story = {
  args: {
    id: "name",
    type: "text",
    label: "Name",
    placeholder: "e.g.Stephen King",
  },
};

export const missingField: Story = {
  args: {
    ...nameField.args,
    isEmpty: true,
  },
};
