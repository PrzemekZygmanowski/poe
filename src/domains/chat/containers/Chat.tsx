import { ChatContent } from "../components/ChatContent";
import { ChatForm } from "../components/ChatForm";
import { SmallTitle } from "../../../components/typography/SmallTitle";
import { conversationsArray } from "../../../data/mocks/conversation.ts";
import { useState } from "react";
import { ButtonIcon } from "../../../components/ButtonIcon.tsx";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { BigChat } from "./BigChat.tsx";

export const Chat = () => {
  const [isModalActive, setModalActive] = useState(false);

  const { conversations } = conversationsArray;

  const toggleChatModal = () => {
    setModalActive(!isModalActive);
  };

  const sendMessage = (message: string) => {
    console.log(message);
  };

  return (
    <>
      <div className='flex flex-col '>
        <div className=' mt-6 mb-2 flex justify-center'>
          <SmallTitle smallTitleText='Chat' />
        </div>
        <div className='flex flex-row justify-end my-2'>
          <ButtonIcon
            handleClick={toggleChatModal}
            iconText={faGear}
            status={isModalActive ? "active" : "inactive"}
          />
        </div>
        <div className='flex flex-col justify-center items-center '>
          <ChatContent conversations={conversations} heightValue='small' />
          <ChatForm sendMessage={sendMessage} />
        </div>
      </div>
      <BigChat
        isModalActive={isModalActive}
        handleCloseDialog={toggleChatModal}
        sendMessage={sendMessage}
      />
    </>
  );
};
