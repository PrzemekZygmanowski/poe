import { BigDialog } from "../../../components/BigDialog";
import { IChatDialog } from "../../../components/interfaces";
import { conversationsArray } from "../../../data/mocks/conversation";
import { ChatContent } from "../components/ChatContent";
import { ChatForm } from "../components/ChatForm";

export const BigChat = ({
  isModalActive,
  handleCloseDialog,
  sendMessage,
}: IChatDialog) => {
  const { conversations } = conversationsArray;

  return (
    <BigDialog
      isModalActive={isModalActive}
      handleCloseDialog={handleCloseDialog}
      title='Chat'>
      <div className='flex flex-col justify-center items-center min-h-full max-h-[90%]'>
        <ChatContent conversations={conversations} heightValue='big' />
        <ChatForm sendMessage={sendMessage} />
      </div>
    </BigDialog>
  );
};
