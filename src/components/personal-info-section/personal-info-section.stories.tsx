import {Provider} from "react-redux";
import {PersonalInfoSection} from "./personal-info-section";
import type {Meta, StoryObj} from "@storybook/react";
import {store} from "../../store/store";

const meta: Meta<typeof PersonalInfoSection> = {
  component: PersonalInfoSection,
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

type Story = StoryObj<typeof PersonalInfoSection>;

export const Default: Story = {};
