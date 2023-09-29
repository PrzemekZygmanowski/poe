import type { Meta, StoryObj } from "@storybook/react";
import { AppMenu } from "../domains/mainMenu/containers/AppMenu";

const meta: Meta<typeof AppMenu> = {
  title: "containers/AppMenu",
  component: AppMenu,
};

export default meta;
type Story = StoryObj<typeof AppMenu>;

export const ShortcutComponent: Story = {
  render: () => <AppMenu />,
};
