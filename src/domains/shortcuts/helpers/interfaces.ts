import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IShortcutProps {
  shortcutText: string;
  iconText: IconProp;
  status: "active" | "inactive";
}
