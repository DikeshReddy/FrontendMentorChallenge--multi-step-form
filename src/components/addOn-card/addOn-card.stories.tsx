import {Provider} from "react-redux";
import {AddOnCard} from "./addOn-card";
import type {Meta, StoryObj} from "@storybook/react";
import {store} from "../../store/store";

const meta: Meta<typeof AddOnCard> = {
  component: AddOnCard,
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

type Story = StoryObj<typeof AddOnCard>;

export const Default: Story = {
  args: {
    children: "Access to multiplayer games",
    price: 1,
    title: "Online Services",
  },
};
