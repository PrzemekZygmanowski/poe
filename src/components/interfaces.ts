import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
