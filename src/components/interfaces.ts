import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { MouseEventHandler, ReactElement } from "react";

export interface ILinkIcon {
  url: string;
  iconText: IconProp;
}

export interface IButtonIcon {
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
  iconText: IconProp;
  status: "active" | "inactive";
}

export interface IBigDialog {
  isModalActive: boolean;
  handleCloseDialog: () => void;
  sendMessage?: (message: string) => void;
  children?: ReactElement | ReactElement[];
  title?: string;
}

export interface IChatDialog extends IBigDialog {
  sendMessage: (message: string) => void;
}

export interface IButtonProps {
  handleClick: () => void;
  text: string;
}
