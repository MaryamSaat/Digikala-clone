import React from "react";
import { useCategory } from "../../hooks/useCategory";

interface FloatingButtonProps {
  position?: "left" | "right";
  variant?: "supermarket" | "help";
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ position = "left", variant = "supermarket" }) => {
  const { isCategoryOpen } = useCategory();

  if (isCategoryOpen) return null;

  const buttonStyles = {
    left: "left-8",
    right: "right-8",
  };

  const variants = {
    supermarket: {
      className: "hidden md:flex w-[129.57px] h-[52.25px] rounded-full bg-[#00bf6f] hover:bg-[#00a862] py-[10px] px-[12px] gap-1",
      content: (
        <>
          <span className="text-[15px] font-bold font-['IRANYekanWeb'] whitespace-nowrap">سوپر مارکت</span>
          <img src="/images/logo/basket.svg" alt="" className="w-[28px] h-[60.2px] [filter:brightness(0)_invert(1)]" />
        </>
      ),
    },
    help: {
      className: "hidden md:flex w-12 h-12 rounded-full bg-[#ef4056] hover:bg-[#e31c35] p-3",
      content: <img src="/images/FloatingButton/headphone.svg" alt="Support" className="[filter:brightness(0)_invert(1)]" />,
    },
  };

  return <button className={`fixed bottom-8 ${buttonStyles[position]} ${variants[variant].className} items-center justify-center text-white shadow-lg transition-colors z-50`}>{variants[variant].content}</button>;
};

export default FloatingButton;
