import { IShortCut, IShortCuts } from "../../../interfaces/interfaces";
import { ShortCutElement } from "./ShortCuElement";

export const ShortcutList = (shortCutElementList: IShortCuts) => {
  return (
    <>
      {shortCutElementList &&
        shortCutElementList.map((shortCutElement: IShortCut) => (
          <ShortCutElement
            key={shortCutElement.id}
            {...shortCutElement}
          />
        ))}
    </>
  );
};
