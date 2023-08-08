import type {Meta, StoryObj} from "@storybook/react";
import {PlanIntervalSwitcher} from "./plan-interval-switcher";
import {Provider} from "react-redux";
import {store} from "../../store/store";

const meta: Meta<typeof PlanIntervalSwitcher> = {
  component: PlanIntervalSwitcher,
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

type Story = StoryObj<typeof PlanIntervalSwitcher>;

export const Default: Story = {};
