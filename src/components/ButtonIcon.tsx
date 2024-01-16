import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IButtonIcon } from "./interfaces";

export const ButtonIcon = ({ handleClick, iconText, status }: IButtonIcon) => {
  const colorVariants = {
    active: "text-lightSky_400",
    inactive: "text-lightSlate_400",
  };

  return (
    <button
      onClick={handleClick}
      className={`${colorVariants[status]} mx-5 w-8 flex justify-center aspect-square	text-smallTitle`}>
      <FontAwesomeIcon icon={iconText} />
    </button>
  );
};
