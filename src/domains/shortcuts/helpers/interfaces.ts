import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IShortCut, IShortCuts } from "../../../interfaces/interfaces";

export interface IShortcutProps {
  shortcutText: string;
  iconText: IconProp;
  status: "active" | "inactive";
}

export interface IShortcutListBox {
  shortcuts: IShortCuts;
  selectShortcut: (shortcut: IShortCut) => void;
  activeShortcut: { id: number | null; title: string };
}