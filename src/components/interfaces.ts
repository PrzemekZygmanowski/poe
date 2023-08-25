import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { MouseEventHandler, ReactElement } from "react";

export interface linkIcon {
  url: string;
  iconText: IconProp;
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
