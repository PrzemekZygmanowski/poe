import type { Meta, StoryObj } from "@storybook/react";

import { ShortCuts } from "../containers/ShortCuts";
const meta: Meta<typeof ShortCuts> = {
  title: "containers/Shortcut",
  component: ShortCuts,
};

export default meta;
type Story = StoryObj<typeof ShortCuts>;

export const ShortcutComponent: Story = {
  render: () => <ShortCuts />,
};
