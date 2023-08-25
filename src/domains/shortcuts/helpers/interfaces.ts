import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IShortcut {
  shortcutText: string;
  iconText: IconProp;
  status: "active" | "inactive";
}
