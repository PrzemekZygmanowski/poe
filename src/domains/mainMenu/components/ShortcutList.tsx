import { IShortCut, IShortCuts } from "../../../interfaces/interfaces";
import { ShortCutElement } from "./ShortCuElement";

interface IShortcutList {
  shortCutElementList: IShortCuts;
}

export const ShortcutList = ({ shortCutElementList }: IShortcutList) => {
  return (
    <>
      {shortCutElementList &&
        shortCutElementList.map((shortCutElement: IShortCut) => (
          <ShortCutElement key={shortCutElement.id} {...shortCutElement} />
        ))}
    </>
  );
};
