import React, { useState, useEffect } from "react";
import type { DiscountItem } from "../../data/amazingSupermarketData";
import { discountItems } from "../../data/amazingSupermarketData";

const AmazingSupermarket: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="w-full flex justify-center mb-[17px]">
      <div className="w-[87%] h-auto md:h-[110px] bg-[#ECEEEE] flex flex-col md:flex-row rounded-2xl bg-[url('/images/glocery-discount/freshPattern.svg')] bg-no-repeat bg-cover ">
        {/* // سمت راست  */}
        <div className="w-full md:w-1/2 md:h-[110px] h-[100px] flex flex-col md:flex-row items-start justify-center md:justify-start md:items-center gap-[10px] md:pr-[44px] pr-3">
          <div className="flex flex-row justify-center items-center gap-2">
            <img src="/images/glocery-discount/fresh.png" alt="" className="md:w-[66px] w-[40px] md:h-[62px] h-[38px]" />
            <img src="/images/glocery-discount/fresh-incredible-offer.png" alt="" className="md:w-[250px] md:h-[28px] h-[20px]" />
          </div>
          <span className=" bg-[#029A49] text-white font-900 text-[14px] font-['IRANYekanWeb'] whitespace-nowrap px-[15px] mr-[20px] py-[5px] rounded-3xl">تا47% تخفیف</span>
        </div>

        {/* // سمت چپ */}
        <div className="w-full md:w-1/2 md:h-[110px] h-[100px] flex items-center justify-between px-[20px]">
          {/* 6 دایره */}
          <div className="flex gap-[8px] pl-2 ">
            {discountItems.slice(0, isMobile ? 3 : 6).map((item: DiscountItem) => (
              <div key={item.id} className="relative">
                <div className="md:w-[73px] w-[68px] md:h-[73px] h-[68px] rounded-full bg-white overflow-hidden p-2 ">
                  <img src={item.imagePath} alt={`discount item ${item.id}`} className="w-full h-full object-contain" />
                </div>
                <div className="absolute bottom-0 right-0 w-[33px] h-[18px] bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-[12px] font-bold font-['IRANYekanWeb']">{item.discountPercentage}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* بیضی */}
          <div className="md:w-[143px] w-[44px] md:h-[52px] h-[44px] rounded-full bg-white flex items-center justify-center">
            <p className="hidden md:block text-[#029A49] !font-700 text-[12px] font-['IRANYekanWeb'] whitespace-nowrap leading-loose">بیش از 100 کالا</p>
            <img src="/images/glocery-discount/arrowtoleft.svg" alt="" className="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingSupermarket;
