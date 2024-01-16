import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ILinkIcon } from "./interfaces";

export const LinkIcon = ({ url, iconText }: ILinkIcon) => {
  return (
    <a
      href={url}
      target='_blank'
      className='mx-5 w-8 flex justify-center aspect-square text-smallTitle	text-lightSlate_400 focus:text-lightSky_400'>
      <FontAwesomeIcon icon={iconText} />
    </a>
  );
};
