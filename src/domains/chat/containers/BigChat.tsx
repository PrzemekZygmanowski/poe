import { BigDialog } from "../../../components/BigDialog";
import { chatDialog } from "../../../components/interfaces";
import { conversationsArray } from "../../../data/mocks/conversation";
import { ChatContent } from "../components/ChatContent";
import { ChatForm } from "../components/ChatForm";

export const BigChat = ({
  isModalActive,
  handleCloseDialog,
  sendMessage,
}: chatDialog) => {
  const { conversations } = conversationsArray;

  return (
    <BigDialog
      isModalActive={isModalActive}
      handleCloseDialog={handleCloseDialog}
      title='Chat'>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <ChatContent conversations={conversations} />
        <ChatForm sendMessage={sendMessage} />
      </div>
    </BigDialog>
  );
};
