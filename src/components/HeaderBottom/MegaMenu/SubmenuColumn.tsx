// SubmenuColumn.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory, type Category } from "../../../store/slices/menuSlice";
import type { RootState, AppDispatch } from "../../../store/store";
import { Link } from "react-router-dom";

const SubmenuColumn: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, loading, error } = useSelector((state: RootState) => state.menu);

  if (loading) return <div className="p-4">در حال بارگذاری...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="w-[17%] h-full bg-[#f0f0f1] overflow-auto" dir="rtl">
      {categories.map((category: Category) => (
        <div className="w-full h-[41px] mb-[1px] relative" key={category.id} onMouseEnter={() => dispatch(setActiveCategory(category.id))}>
          <Link to={category.url.uri} className="block w-full h-full text-right direction-rtl leading-[52px] font-['IRANYekanWeb'] no-underline text-[12px] text-[#2b2b2b] transition-all whitespace-nowrap hover:bg-white hover:text-red-500">
            <img src={category.image} alt={category["main-title"]} className="w-[18px] h-[18px] ml-[5px] relative top-[5px] right-[2px] inline" />
            {category["main-title"]}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SubmenuColumn;
