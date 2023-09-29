import type { Meta, StoryObj } from "@storybook/react";

import { Shortcut } from "../domains/shortcuts/components/Shortcut";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof Shortcut> = {
  title: "components/Shortcut",
  component: Shortcut,
};

export default meta;
type Story = StoryObj<typeof Shortcut>;

export const ActiveShortcutComponent: Story = {
  render: () => (
    <Shortcut
      shortcutText='active shortcut'
      iconText={faPenToSquare}
      status='active'
    />
  ),
};
export const InactiveShortcutComponent: Story = {
  render: () => (
    <Shortcut
      shortcutText='inactive shortcut'
      iconText={faPenToSquare}
      status='inactive'
    />
  ),
};
