// import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import React, { ComponentType } from "react"

export interface IMenuTab {
    id: number
    tab: string
    component: ComponentType
}

export interface IMenuTabs {
    tabsCategory: IMenuTab[]
}
// export interface IShortCutElement {
//     id: number;
//     title: string;
//     icon: IconDefinition;
//     model: string;
//     category: string;
//     context: string;
// }

// export type IShortCutElements = IShortCutElement[]
