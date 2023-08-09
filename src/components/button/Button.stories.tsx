import type {Meta, StoryObj} from "@storybook/react";
import {Button} from "./Button";
import {Provider} from "react-redux";
import {store} from "../../store/store";

const meta: Meta<typeof Button> = {
  component: Button,
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

type Story = StoryObj<typeof Button>;

export const intermediate: Story = {
  args: {
    bgColor: "dark-blue",
    title: "Next Step",
  },
};

export const final: Story = {
  args: {
    bgColor: "blue",
    title: "Confirm",
  },
};

export const goBackButton: Story = {
  args: {
    bgColor: "transparent",
    title: "Go Back",
  },
};
