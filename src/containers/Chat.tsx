import { ChatContent } from "../components/ChatContent";
import { ChatForm } from "../components/ChatForm";
import { SmallTitle } from "../components/typography/SmallTitle";

export const Chat = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='my-6'>
        <SmallTitle smallTitleText='Chat' />
      </div>
      <ChatContent />
      <ChatForm />
    </div>
  );
};
