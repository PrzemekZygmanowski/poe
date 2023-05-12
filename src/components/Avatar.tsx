import poe from "../assets/poe.png";

export const Avatar = () => {
  return (
    <div className='flex items-center w-40'>
      <img
        className='border-lightBlue border-2 rounded-full ring-2 ring-lightBlue ring-offset-darkBlue ring-offset-4'
        src={poe}
        alt='Poe'
      />
    </div>
  );
};
