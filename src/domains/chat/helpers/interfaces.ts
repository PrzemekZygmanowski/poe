export interface IConversation {
  question: string;
  answer: string;
}

export interface IConversations {
  conversations: IConversation[];
}

export interface IChatForm {
  sendMessage: (message: string) => void;
}
