import { IShortCutElement, IShortCutElements } from "../helpers/interfaces";
import { ShortCutElement } from "./ShortCuElement";

export const ShortcutList = (shortCutElementList: IShortCutElements) => {
  const { shortcuts } = shortCutElementList;
  return (
    shortcuts &&
    shortcuts.map((shortCutElement: IShortCutElement) => {
      <ShortCutElement key={shortCutElement.id} {...shortCutElement} />;
    })
  );
};
