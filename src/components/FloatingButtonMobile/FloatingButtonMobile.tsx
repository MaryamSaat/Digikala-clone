import React from "react";
import { useCategory } from "../../hooks/useCategory";

interface FloatingButtonMobileProps {
  variant: "supermarket" | "help";
}

const FloatingButtonMobile: React.FC<FloatingButtonMobileProps> = ({ variant }) => {
  const { isCategoryOpen } = useCategory();

  if (isCategoryOpen) return null;

  const variants = {
    supermarket: {
      className: "w-[234.84px] h-[41.4px] bg-[#00bf6f] hover:bg-[#00a862] px-[8px] py-[6px] mx-[77.78px] rounded-full top-[621.8px]",
      content: (
        <div className="flex items-center justify-between w-full">
          <img src="/images/logo/basket.svg" alt="سبد خرید" className="w-6 h-6 mr-2 [filter:brightness(0)_invert(1)]" />
          <span>|</span>
          <span className="text-[15px] font-['IRANYekanWeb'] text-white whitespace-nowrap">سوپرمارکت بالا، پرتخفیف</span>
        </div>
      ),
    },
    help: {
      className: "w-[156.15px] h-[46px] bg-gradient-to-r from-[#2586ff] via-[#7f53ef] to-[#8f4aec] py-2 px-[6px] pr-3 rounded-full top-[467.200px] right-[344.50px] bottom-[150px]",
      content: (
        <div className="flex items-center justify-start w-full">
          <img src="/images/FloatingButton/smile.svg" alt="لبخند" />
        </div>
      ),
    },
  };

  return <button className={`md:hidden fixed ${variants[variant].className} items-center justify-center text-white shadow-lg transition-colors z-50`}>{variants[variant].content}</button>;
};

export default FloatingButtonMobile;
