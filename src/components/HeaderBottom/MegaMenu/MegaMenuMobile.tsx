import React from "react";
import CategoryMenu from "./CategoryMenu";
import { useCategory } from "../../../hooks/useCategory";

const MegaMenuMobile: React.FC = () => {
  const { isCategoryOpen, setIsCategoryOpen } = useCategory();

  return (
    <>
      <nav className="fixed bottom-[-1px] left-0 right-0 h-[53.7px] bg-white border-t border-[#e0e0e2] flex items-center justify-between px-4 z-50 md:px-8 lg:hidden">
        <a href="#" className="flex flex-col items-center text-[#81858b] text-[10px] gap-1 hover:text-[#ef394e] transition-colors">
          <img src="./images/logo/megamenumobile/home.svg" alt="" />
          <span>خانه</span>
        </a>

        <button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="flex flex-col items-center text-[#81858b] text-[10px] gap-1 hover:text-[#ef394e] transition-colors">
          <img src="./images/logo/megamenumobile/category.svg" alt="" />
          <span>دسته بندی</span>
        </button>

        <a href="#" className="flex flex-col items-center text-[#81858b] text-[10px] gap-1 hover:text-[#ef394e] transition-colors">
          <img src="./images/logo/megamenumobile/cart.svg" alt="" />
          <span>سبد خرید</span>
        </a>

        <a href="#" className="flex flex-col items-center text-[#81858b] text-[10px] gap-1 hover:text-[#ef394e] transition-colors">
          <img src="./images/logo/megamenumobile/magnet.svg" alt="" className="w-6 h-6" />
          <span>مگنت</span>
        </a>

        <a href="#" className="flex flex-col items-center text-[#81858b] text-[10px] gap-1 hover:text-[#ef394e] transition-colors">
          <img src="./images/logo/megamenumobile/account.svg" alt="" />
          <span>دیجی کالای من</span>
        </a>
      </nav>

      <CategoryMenu isOpen={isCategoryOpen} />
    </>
  );
};

export default MegaMenuMobile;
