import type { Meta, StoryObj } from "@storybook/react";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { ButtonIcon } from "../components/ButtonIcon";

const meta: Meta<typeof ButtonIcon> = {
  title: "components/ButtonIcon",
  component: ButtonIcon,
  argTypes: { handleClick: { action: "clicked" } },
};

const click = () => {
  console.log("click");
};

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

export const ButtonIconComponent: Story = {
  args: {
    handleClick: click,
    iconText: faGear,
  },
};
