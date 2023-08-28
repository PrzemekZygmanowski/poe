import "./ChatContent.css";

export const ChatContent = ({ conversations }: any) => {
  return (
    <div className='chat-content__container bg-transparent text-lightSky_400 rounded border-lightSky_400 border-2 w-11/12	 h-60 mb-8 overflow-y-scroll'>
      {conversations?.map((conversation: any, i: number) => {
        return (
          <div key={i}>
            <div className='bg-green text-lightBrown flex flex-row justify-items-start items-start '>
              <div className='m-2'>
                {/* <img
                  className=' border-brown border-2 min-h-full rounded-full h-8  max-h-8 basis-2/12'
                  src={hacker}
                  alt='me'
                /> */}
              </div>
              <span className='min-h-fit basis-10/12'>
                {conversation.message}
              </span>
            </div>
            <div className='bg-lightGreen text-lightBrown flex flex-row justify-items-start items-start '>
              <div className='m-2'>
                {/* <img
                  className=' border-brown border-2 min-h-full rounded-full h-8  max-h-8 basis-2/12'
                  src={butler}
                  alt='alfred'
                /> */}
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
