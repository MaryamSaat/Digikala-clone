import React from "react";
import SubmenuWrapper from "./SubmenuWrapper";

const Menu: React.FC = () => {
  return (
    <div className="hidden md:flex w-[10%] h-full pr-[10px] relative group">
      <nav className="w-full h-full">
        <div className="w-full h-full relative flex-nowrap">
          <div className="inline-flex items-center h-full px-[10px] font-['IRANYekanWeb'] no-underline text-[13px] font-bold text-black leading-[40px] transition-all duration-100 hover:border-b-2 hover:border-red-500">
            <img src="/images/logo/bar.svg" alt="menu" className="w-[20px] h-[20px]" />
            دسته‌بندی کالاها
          </div>

          {/* Submenu on hover */}
          <div className="absolute top-full right-0 hidden group-hover:block">
            <SubmenuWrapper />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
