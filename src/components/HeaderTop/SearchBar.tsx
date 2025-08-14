// Search.tsx
const SearchBar = () => {
  return (
    <div className="flex items-center justify-between w-full md:[65%]">
      {/* mobile */}
      <div className="relative w-[87%] md:hidden mr-3 ml-2">
        <input type="text" name="search" placeholder="جستجو در" className="w-full h-[43px] bg-[#f0f0f1] outline-none border-none pr-[50px] font-yekan rounded-[7px] transition-all duration-300 placeholder:font-bold placeholder:text-[12px] focus:placeholder:text-gray-500" />
        <img src="./images/search.svg" alt="search" className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <img src="https://www.digikala.com/brand/typography.svg" alt="digikala" className="absolute right-27 top-1/2 -translate-y-1/2 w-20 h-5" />
        <img src="./images/logo/camera-svgrepo-com.svg" alt="camera" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
      </div>

      {/* desktop */}
      <div className="relative hidden md:block w-auto">
        <input type="text" name="search" placeholder="جستجو" className="w-[600px] h-[43px] bg-[#f0f0f1] outline-none border-none pr-[50px] font-yekan rounded-[7px] transition-all duration-300 placeholder:font-bold placeholder:text-[12px] focus:placeholder:text-gray-500" />
        <img src="./images/search.svg" alt="search" className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>

      {/* desktop */}
      <div className="hidden md:block">
        <img src="./images/logo/bell-svgrepo-com.svg" alt="bell" className="w-5 h-5 text-gray-400" />
      </div>

      {/* mobile */}
      <div className="md:hidden w-[13%] flex justify-center ml-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <img src="./images/logo/bell-svgrepo-com.svg" alt="bell" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
