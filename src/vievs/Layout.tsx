import { Chat } from "../domains/chat/containers/Chat";
import { ShortCuts } from "../domains/shortcuts/containers/ShortCuts";
import { AppMenu } from "../domains/mainMenu/containers/AppMenu";

export const Layout = () => {
  return (
    <div className='w-[90%]'>
      <AppMenu />
      <ShortCuts />
      <Chat />
    </div>
  );
};
