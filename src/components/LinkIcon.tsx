import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { icon, IconName } from '@fortawesome/fontawesome-svg-core/import.macro'

interface linkIcon{
url: string,
iconText:IconName,
}

export const LinkIcon = ({url, iconText}:linkIcon) => {
  return <FontAwesomeIcon icon={icon({name: `${iconText}`})}
}
