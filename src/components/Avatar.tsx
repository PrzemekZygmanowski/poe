import poe from "../assets/poe.png";

export const Avatar = () => {
  return (
    <div className='flex items-center w-40'>
      <img
        className='border-lightSky_400 border-2 rounded-full ring-2 ring-lightSky_400 ring-offset-darkSlate_900 ring-offset-4'
        src={poe}
        alt='Poe'
      />
    </div>
  );
};
