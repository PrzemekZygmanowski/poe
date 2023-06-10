import { shortcut } from "./interfaces";

export const ShortcutTitle = ({ shortcutText }: shortcut) => {
  return (
    <span className='text-lightSlate_400 text-shortcut focus:text-lightSky_400 '>
      {" "}
      {shortcutText}
    </span>
  );
};
