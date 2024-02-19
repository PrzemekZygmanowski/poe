import React from "react";
import { ShortcutTitle } from "../../../components/typography/ShortcutTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IShortCutElement } from "../helpers/interfaces";

export const ShortCutElement: React.FC<IShortCutElement> = (
  shortcutProps: IShortCutElement
) => {
  const { title, icon, model, category, context } = shortcutProps;

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row'>
        <ShortcutTitle shortcutText='Title' textColor='inactive' />
        <ShortcutTitle shortcutText={title} textColor='light' />
      </div>
      <div className='flex flex-row'>
        <ShortcutTitle shortcutText='Icon' textColor='inactive' />
        <FontAwesomeIcon icon={icon} />
      </div>

      <div className='flex flex-row'>
        <ShortcutTitle shortcutText='Model' textColor='inactive' />
        <ShortcutTitle shortcutText={model} textColor='light' />
      </div>

      <div className='flex flex-row'>
        <ShortcutTitle shortcutText='Category' textColor='inactive' />
        <ShortcutTitle shortcutText={category} textColor='light' />
      </div>

      <div className='flex flex-row'>
        <ShortcutTitle shortcutText='Context' textColor='inactive' />
        <ShortcutTitle shortcutText={context} textColor='light' />
      </div>
    </div>
  );
};
