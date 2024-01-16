import { IConversation, IChatContent } from "../helpers/interfaces";
import "./ChatContent.css";
import poeimg from "../../../assets/poe.png";
import developerimg from "../../../assets/developer.png";

export const ChatContent = ({ conversations, heightValue }: IChatContent) => {
  const heightVariants = {
    big: "h-[90%]",
    small: "h-80",
  };

  return (
    <div
      className={`${heightVariants[heightValue]} chat-content__container bg-transparent text-lightSky_400 rounded border-lightSky_400 border-2 w-11/12 mb-8 overflow-y-scroll`}>
      {conversations?.map((conversation: IConversation, i: number) => {
        return (
          <div key={i}>
            <div className='bg-darkSky_950 text-lightSlate_100 flex flex-row justify-items-start items-start '>
              <div className='m-2'>
                <img
                  className=' border-brown border-2 min-h-full rounded-full h-8  max-h-8 basis-2/12'
                  src={developerimg}
                  alt='me'
                />
              </div>
              <span className='min-h-fit basis-10/12'>
                {conversation.question}
              </span>
            </div>
            <div className='bg-darkSlate_900 text-lightSlate_100 flex flex-row justify-items-start items-start '>
              <div className='m-2'>
                <img
                  className=' border-brown border-2 min-h-full rounded-full h-8  max-h-8 basis-2/12'
                  src={poeimg}
                  alt='me'
                />
              </div>
              <span className='min-h-fit basis-10/12'>
                {conversation.answer}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
