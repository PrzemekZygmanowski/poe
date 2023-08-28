import { ChatContent } from "../components/ChatContent";
import { ChatForm } from "../components/ChatForm";
import { SmallTitle } from "../../../components/typography/SmallTitle";

const conversations = [
  { message: "cześć", answer: "Cześć Przemek" },
  {
    message: "Jak masz na imię",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ex officiis placeat cupiditate fugiat iusto fugit id quam ipsam aspernatur vitae blanditiis voluptas incidunt explicabo, dolor similique sed asperiores animi?",
  },
];

export const Chat = () => {
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
