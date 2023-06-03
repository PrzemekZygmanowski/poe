import type { Meta, StoryObj } from "@storybook/react";

import { Shortcut } from "../components/Shortcut";

const meta: Meta<typeof Shortcut> = {
  title: "components/Shortcut",
  component: Shortcut,
};

export default meta;
type Story = StoryObj<typeof Shortcut>;

export const ShortcutComponent: Story = {
  render: () => <Shortcut shortcutText='someText' />,
};
