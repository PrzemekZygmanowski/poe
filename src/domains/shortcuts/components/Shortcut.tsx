import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShortcutTitle } from "../../../components/typography/ShortcutTitle";
import { IShortcutProps } from "../helpers/interfaces";

export const Shortcut = ({
  shortcutText,
  iconText,
  status,
}: IShortcutProps) => {
  const colorVariants = {
    active: "border-lightSky_400 bg-lightSky_400 text-darkSky_950",
    inactive: "border-lightSlate_400 text-lightSlate_400",
  };

  return (
    <button
      className={`${colorVariants[status]} p-4 flex flex-col items-center justify-evenly w-28 h-28 border-solid border-2 rounded aspect-square`}>
      <FontAwesomeIcon icon={iconText} />
      <ShortcutTitle shortcutText={shortcutText} textColor={status} />
    </button>
  );
};
