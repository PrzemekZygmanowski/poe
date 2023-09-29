import type { Meta, StoryObj } from "@storybook/react";

import { ChatContent } from "../domains/chat/components/ChatContent";
import { conversationsArray } from "../data/mocks/conversation";

const meta: Meta<typeof ChatContent> = {
  title: "components/ChatContent",
  component: ChatContent,
};

export default meta;
type Story = StoryObj<typeof ChatContent>;

export const ChatContentStoris: Story = {
  args: {
    conversations: conversationsArray.conversations,
  },
};
