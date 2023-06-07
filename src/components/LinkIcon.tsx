import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface linkIcon {
  url: string;
  iconText: IconProp;
}

export const LinkIcon = ({ url, iconText }: linkIcon) => {
  return (
    <a href={url} className='mx-5 w-8 aspect-square	'>
      <FontAwesomeIcon icon={iconText} size='lg' />
    </a>
  );
};
