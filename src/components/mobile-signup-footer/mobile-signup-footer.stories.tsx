import type {Meta, StoryObj} from "@storybook/react";
import {MobileSignupFooter} from "./mobile-signup-footer";
import {Provider} from "react-redux";
import {store} from "../../store/store";

const meta: Meta<typeof MobileSignupFooter> = {
  component: MobileSignupFooter,
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

type Story = StoryObj<typeof MobileSignupFooter>;

export const MobileFooter: Story = {};
