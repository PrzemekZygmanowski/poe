import React from "react";
import { IButtonProps } from "./interfaces";
import { ShortcutTitle } from "./typography/ShortcutTitle";

export const Button: React.FC<IButtonProps> = ({ handleClick, text }) => {
  return (
    <button
      onClick={handleClick}
      className='bg-darkSky_950 active:bg-lightSky_400  w-full border border-solid border-lightSky_400 py-2 px-4 rounded'>
      <ShortcutTitle shortcutText={text} textColor='inactive' />
    </button>
  );
};
