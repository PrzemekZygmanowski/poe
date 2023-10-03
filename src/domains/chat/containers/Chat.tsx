import { ChatContent } from "../components/ChatContent";
import { ChatForm } from "../components/ChatForm";
import { SmallTitle } from "../../../components/typography/SmallTitle";
import { conversationsArray } from "../../../data/mocks/conversation.ts";

export const Chat = () => {
  const { conversations } = conversationsArray;

  const sendMessage = (message: string) => {
    console.log(message);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='my-6'>
        <SmallTitle smallTitleText='Chat' />
      </div>
      <ChatContent conversations={conversations} />
      <ChatForm sendMessage={sendMessage} />
    </div>
  );
};
