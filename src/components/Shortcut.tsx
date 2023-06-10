import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShortcutTitle } from "./typography/ShortcutTitle";
import { shortcut } from "./interfaces";

export const Shortcut = ({ shortcutText, iconText }: shortcut) => {
  return (
    <button className='p-4 flex flex-col items-center justify-evenly w-28 h-28 border-solid border-2 border-lightSlate_400 rounded text-lightSlate_400 focus:border-lightSky_400 focus:text-lightSky_400 aspect-square '>
      <FontAwesomeIcon icon={iconText} />
      <ShortcutTitle shortcutText={shortcutText} />
    </button>
  );
};
