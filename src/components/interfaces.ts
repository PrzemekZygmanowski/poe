import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { MouseEventHandler, ReactElement } from "react";

export interface shortcut {
  shortcutText: string;
  iconText: IconProp;
}

export interface linkIcon {
  url: string;
  iconText: IconProp;
}

export interface message {
  message: string;
}

export interface Answer {
  answer: string;
}

export interface buttonIcon {
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
  iconText: IconProp;
}

export interface bigDialog {
  isModalActive: boolean;
  handleCloseDialog: () => void;
  children?: ReactElement | ReactElement[];
  title?: string;
}
