import { smallTitle } from "./interfaces";

export const SmallTitle = ({ smallTitleText }: smallTitle) => {
  return (
    <span className='text-lightSlate_400 text-smallTitle focus:text-lightSky_400 '>
      {" "}
      {smallTitleText}
    </span>
  );
};
