import { Chat } from "../containers/Chat";
import { Avatar } from "../components/Avatar";
import { MenuComponent } from "../containers/Menu";
import { ShortCuts } from "../containers/ShortCuts";

export const Layout = () => {
  return (
    <div className='w-[90%]'>
      <ShortCuts />
      <MenuComponent>
        <Avatar />
        <Chat />
      </MenuComponent>
    </div>
  );
};
