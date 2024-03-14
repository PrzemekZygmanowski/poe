import { ShortcutTitle } from "../../../components/typography/ShortcutTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IShortCut } from "../../../interfaces/interfaces";
import { Button } from "../../../components/Button";

export const ShortCutElement = (shortcutProps: IShortCut) => {
  const { title, icon, chatParams } = shortcutProps;
  const edit = (): void => {
    console.log("Edit");
  };

  const deleteSomething = (): void => {
    console.log("Delete");
  };

  return (
    <div className='pb-4'>
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
              <ShortcutTitle
                shortcutText={chatParams.model}
                textColor='light'
              />
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
      <div className='py-3 grid  grid-cols-5 gap-x-2 content-stretch	'>
        <div className='col-start-4'>
          <Button text='Edit' handleClick={edit} />
        </div>
        <div className='col-start-5'>
          <Button text='Delete' handleClick={deleteSomething} />
        </div>
      </div>
    </div>
  );
};
