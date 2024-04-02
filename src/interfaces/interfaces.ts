import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IMessage {
  message: string;
}

export interface Answer {
  answer: string;
}

export interface Bot {
  id: number;
  title: string;
  date: string;
  commentCount: number;
  shareCount: number;
  key?: string;
}

export interface IShortCut {
  id: number;
  title: string;
  icon: IconProp;
  chatParams: {
    model: string;
    context: string;
    category: string;
  };
}

export type IShortCuts = IShortCut[];

export interface Model {
  id: number;
  name: string;
}