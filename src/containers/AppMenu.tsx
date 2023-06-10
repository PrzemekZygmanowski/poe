import { LinkIcon } from "../components/LinkIcon";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

export const AppMenu = () => {
  const chatGptUrl = "https://chat.openai.com/";
  const playgroundUrl = "https://platform.openai.com/playground";

  return (
    <div className='flex flex-row justify-end my-4'>
      <LinkIcon url={chatGptUrl} iconText={faComments} />
      <LinkIcon url={playgroundUrl} iconText={faFutbol} />
    </div>
  );
};
