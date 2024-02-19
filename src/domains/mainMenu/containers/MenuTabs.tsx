import React from "react";
import { MenuTabs as MenuTabsComponent } from "../components/MenuTabs";
import { menuTabs } from "../../../data/models/menuTabs";

export const MenuTabs = () => {
  return <MenuTabsComponent tabsCategory={menuTabs} />;
};
