import { SmallTitle } from "./typography/SmallTitle";

const errorText = "Sorry, I have no shortcuts for you.";

export const ShortcutError = () => {
  return (
    <div className='mb-6 flex justify-center'>
      <SmallTitle smallTitleText={errorText} />
    </div>
  );
};
