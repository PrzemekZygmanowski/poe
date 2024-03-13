import { ShortcutTitle } from "../../../components/typography/ShortcutTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IShortCut } from "../../../interfaces/interfaces";

export const ShortCutElement = (shortcutProps: IShortCut) => {
  const { title, icon, chatParams } = shortcutProps;

  return (
    <table className='w-full text-left border-collapse'>
      <tbody className='align-baseline'>
        <tr className='border-y border-lightSlate_100 border-solid '>
          <td className='py-2 pr-2 leading-6 whitespace-nowrap '>
            <ShortcutTitle shortcutText='Title' textColor='inactive' />
          </td>
          <td className='py-2 pl-2 leading-6 whitespace-pre '>
            <ShortcutTitle shortcutText={title} textColor='light' />
          </td>
        </tr>

        <tr className='border-y border-lightSlate_100 border-solid '>
          <td className='py-2 pr-2 leading-6 whitespace-nowrap'>
            <ShortcutTitle shortcutText='Icon' textColor='inactive' />
          </td>
          <td className='py-2 pl-2 leading-6 whitespace-pre text-lightSky_400'>
            <FontAwesomeIcon icon={icon} />
          </td>
        </tr>
        <tr className='border-y border-lightSlate_100 border-solid '>
          <td className='py-2 pr-2 leading-6 whitespace-nowrap'>
            <ShortcutTitle shortcutText='Model' textColor='inactive' />
          </td>
          <td className='py-2 pl-2 leading-6 whitespace-pre '>
            <ShortcutTitle shortcutText={chatParams.model} textColor='light' />
          </td>
        </tr>
        <tr className='border-y border-lightSlate_100 border-solid '>
          <td className='py-2 pr-2 leading-6 whitespace-nowrap'>
            <ShortcutTitle shortcutText='Category' textColor='inactive' />
          </td>
          <td className='py-2 pl-2 leading-6 whitespace-pre '>
            <ShortcutTitle
              shortcutText={chatParams.category}
              textColor='light'
            />
          </td>
        </tr>
        <tr className='border-y border-lightSlate_100 border-solid '>
          <td className='py-2 pr-2 leading-6 whitespace-nowrap'>
            <ShortcutTitle shortcutText='Context' textColor='inactive' />
          </td>
          <td className='py-2 pl-2 leading-6 whitespace-pre '>
            <ShortcutTitle
              shortcutText={chatParams.context}
              textColor='light'
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
