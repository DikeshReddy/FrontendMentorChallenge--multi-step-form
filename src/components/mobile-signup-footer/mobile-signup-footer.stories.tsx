import type {Meta, StoryObj} from "@storybook/react";
import {MobileSignupFooter} from "./mobile-signup-footer";

const meta: Meta<typeof MobileSignupFooter> = {
  component: MobileSignupFooter,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MobileSignupFooter>;

export const MobileFooter: Story = {};
