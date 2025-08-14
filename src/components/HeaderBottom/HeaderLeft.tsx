// HeaderNavLeft.tsx

const HeaderLeft: React.FC = () => {
  return (
    <div className="w-full md:w-[10%] h-full flex justify-start md:justify-center items-center gap-[10px] md:ml-[8px] px-4 md:px-0">
      <img src="./images/logo/location.svg" alt="آیکون موقعیت" className="w-[20px] h-[20px]" />
      <p className="whitespace-nowrap font-yekan text-[12px]">لطفاً شهر خود را انتخاب کنید</p>
      <img src="./images/logo/arrowtoleft.svg" alt="آیکون موقعیت" className="w-[20px] h-[20px]" />
    </div>
  );
};

export default HeaderLeft;
