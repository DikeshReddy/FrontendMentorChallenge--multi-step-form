import type {Meta, StoryObj} from "@storybook/react";
import {PlanCard} from "./plan-card";
import {store} from "../../store/store";
import {Provider} from "react-redux";

const meta: Meta<typeof PlanCard> = {
  component: PlanCard,
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

type Story = StoryObj<typeof PlanCard>;

export const Arcade: Story = {
  args: {
    image: "arcade",
    title: "Arcade",
    price: 9,
  },
};

export const Advanced: Story = {
  args: {
    image: "advanced",
    title: "Advanced",
    price: 12,
  },
};
export const Pro: Story = {
  args: {
    image: "pro",
    title: "Pro",
    price: 15,
  },
};
