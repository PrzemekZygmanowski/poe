import { Chat } from "../containers/Chat";
import { ShortCuts } from "../containers/ShortCuts";
import { AppMenu } from "../containers/AppMenu";

export const Layout = () => {
  return (
    <div className='w-[90%]'>
      <AppMenu />
      <ShortCuts />
      <Chat />
    </div>
  );
};
