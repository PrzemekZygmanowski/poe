import { LinkIcon } from "../components/LinkIcon";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { ButtonIcon } from "../components/ButtonIcon";
import { AppMenuDialog } from "./AppMenuDialog";
import { useState } from "react";

export const AppMenu = () => {
  const [isModalActive, setModalActive] = useState(false);

  const chatGptUrl = "https://chat.openai.com/";
  const playgroundUrl = "https://platform.openai.com/playground";

  const toggleSettingsModal = () => {
    setModalActive(!isModalActive);
  };

  return (
    <>
      <div className='flex flex-row justify-end my-4'>
        <LinkIcon url={chatGptUrl} iconText={faComments} />
        <LinkIcon url={playgroundUrl} iconText={faFutbol} />
        <ButtonIcon handleClick={toggleSettingsModal} iconText={faGear} />
      </div>
      <AppMenuDialog
        isModalActive={isModalActive}
        handleCloseDialog={toggleSettingsModal}
      />
    </>
  );
};
