import { paragraph } from "./interfaces";

export const Paragraph = ({ paragraphText }: paragraph) => {
  return (
    <p className='text-lightSlate_400 text-paragraph focus:text-lightSky_400 '>
      {" "}
      {paragraphText}
    </p>
  );
};
