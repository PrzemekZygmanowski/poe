import { shortcut } from "./interfaces";

export const ShortcutTitle = ({ shortcutText, textColor }: shortcut) => {
  const colorVariants = {
    active: "text-darkSky_950",
    inactive: "text-lightSlate_400",
  };
  return (
    <span
      className={`${colorVariants[textColor]} text-shortcut focus:text-lightSky_400 `}>
      {" "}
      {shortcutText}
    </span>
  );
};
