import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { linkIcon } from "./interfaces";

export const LinkIcon = ({ url, iconText }: linkIcon) => {
  return (
    <a
      href={url}
      target='_blank'
      className='mx-5 w-8 aspect-square	text-lightSlate_400 focus:text-lightSky_400'>
      <FontAwesomeIcon icon={iconText} size='lg' />
    </a>
  );
};
