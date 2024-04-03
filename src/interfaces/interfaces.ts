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

export type ModelNames = "gpt-4" | "gpt-3.5-turbo" | "text-embedding-3-small" | "dall-e-3";

export interface Model {
  id: number;
  name: ModelNames;
}

export interface IListBox {
  data: Model[];
  listBoxPosition: 'above' | 'below';
  value?: ModelNames;
  handleChange?: () => void;
}