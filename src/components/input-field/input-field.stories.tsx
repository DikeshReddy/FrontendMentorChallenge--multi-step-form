import type {Meta, StoryObj} from "@storybook/react";
import {InputField} from "./input-field";
import {Provider} from "react-redux";
import {store} from "../../store/store";

const meta: Meta<typeof InputField> = {
  component: InputField,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story></Story>
      </Provider>
    ),
  ],
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
