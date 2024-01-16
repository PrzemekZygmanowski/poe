export interface IConversation {
  question: string;
  answer: string;
}

export interface IConversations {
  conversations: IConversation[];
}

export interface IChatContent extends IConversations {
  heightValue: "big" | "small"
}

export interface IChatForm {
  sendMessage: (message: string) => void;
}
