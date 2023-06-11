import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { buttonIcon } from "./interfaces";

export const ButtonIcon = ({ handleClick, iconText }: buttonIcon) => {
  return (
    <button
      onClick={handleClick}
      className='mx-5 w-8 flex justify-center aspect-square	text-smallTitle text-lightSlate_400 focus:text-lightSky_400 '>
      <FontAwesomeIcon icon={iconText} />
    </button>
  );
};
