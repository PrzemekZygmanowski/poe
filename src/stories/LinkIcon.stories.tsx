import type { Meta, StoryObj } from "@storybook/react";
import { LinkIcon } from "../components/LinkIcon";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof LinkIcon> = {
  title: "components/LinkIcon",
  component: LinkIcon,
};

export default meta;
type Story = StoryObj<typeof LinkIcon>;

export const LinkIconComponent: Story = {
  render: () => <LinkIcon url='https://google.com' iconText={faFutbol} />,
};
