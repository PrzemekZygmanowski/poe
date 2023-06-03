import React from "react";

interface shortcut {
  shortcutText: string;
}

export const Shortcut = ({ shortcutText }: shortcut) => {
  return (
    <button className='p-8 w-32 border-solid border-2 border-grey rounded text-grey focus:border-lightBlue focus:text-lightBlue aspect-square '>
      {shortcutText}
    </button>
  );
};
