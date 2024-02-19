import React, { ComponentType } from "react"

export interface IMenuTab {
    id: number
    tab: string
    component: ComponentType
}

export interface IMenuTabs {
    tabsCategory: IMenuTab[]
}