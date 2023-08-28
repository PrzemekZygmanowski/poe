import { ChatContent } from "../components/ChatContent";
import { ChatForm } from "../components/ChatForm";
import { SmallTitle } from "../../../components/typography/SmallTitle";
import { IConversations } from "../helpers/interfaces";

const conversationsArray: IConversations = {
  conversations: [
    { question: "cześć", answer: "Cześć Przemek" },
    {
      question: "Jak masz na imię",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ex officiis placeat cupiditate fugiat iusto fugit id quam ipsam aspernatur vitae blanditiis voluptas incidunt explicabo, dolor similique sed asperiores animi?",
    },
    {
      question: "Jak masz na imię",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ex officiis placeat cupiditate fugiat iusto fugit id quam ipsam aspernatur vitae blanditiis voluptas incidunt explicabo, dolor similique sed asperiores animi?",
    },
    {
      question: "Jak masz na imię",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ex officiis placeat cupiditate fugiat iusto fugit id quam ipsam aspernatur vitae blanditiis voluptas incidunt explicabo, dolor similique sed asperiores animi?",
    },
    {
      question: "Jak masz na imię",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ex officiis placeat cupiditate fugiat iusto fugit id quam ipsam aspernatur vitae blanditiis voluptas incidunt explicabo, dolor similique sed asperiores animi?",
    },
    {
      question: "Jak masz na imię",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ex officiis placeat cupiditate fugiat iusto fugit id quam ipsam aspernatur vitae blanditiis voluptas incidunt explicabo, dolor similique sed asperiores animi?",
    },
  ],
};

export const Chat = () => {
  const { conversations } = conversationsArray;
  return (
    <div className='flex flex-col items-center'>
      <div className='my-6'>
        <SmallTitle smallTitleText='Chat' />
      </div>
      <ChatContent conversations={conversations} />
      <ChatForm />
    </div>
  );
};
