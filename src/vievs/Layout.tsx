import { Chat } from "../containers/Chat";
import { Avatar } from "../components/Avatar";
import { MenuComponent } from "../containers/Menu";

export const Layout = () => {
  return (
    <div className='w-[90%]'>
      <MenuComponent>
        <Avatar />
        <Chat />
      </MenuComponent>
    </div>
  );
};
