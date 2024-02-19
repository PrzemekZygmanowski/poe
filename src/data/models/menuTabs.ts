import { IMenuTab } from "../../domains/mainMenu/helpers/interfaces";
import { KeyList } from "../../domains/mainMenu/containers/KeyList";
import { ShortcutList } from "../../domains/mainMenu/containers/ShortcutList";
import { About } from "../../domains/mainMenu/containers/About";

export const menuTabs: IMenuTab[] = [
    { id: 1, tab: "Shortcuts", component: ShortcutList },
    { id: 2, tab: "Keys", component: KeyList },
    { id: 3, tab: "About", component: About },
];
