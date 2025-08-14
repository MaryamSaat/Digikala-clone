import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/store";
import { setActiveCategory, setActiveSubCategory } from "../../../store/slices/menuSliceMobile";
import ItemsGrid from "./ItemsGrid";

interface CategoryMenuProps {
  isOpen: boolean;
}

// کامپوننت دکمه زیردسته‌بندی
const SubCategoryButton = memo(({ title, isActive, onClick }: { title: string; isActive: boolean; onClick: () => void }) => (
  <button onClick={onClick} className="w-full px-4 py-3 border-b border-gray-200 hover:bg-gray-50 transition-colors text-right flex items-center justify-between">
    <span className="text-gray-900 font-yekan text-[12px]">{title}</span>
    <svg className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
));

const CategoryMenu: React.FC<CategoryMenuProps> = ({ isOpen }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, activeCategoryId, activeSubCategoryId, loading: categoriesLoading, error: categoriesError } = useSelector((state: RootState) => state.menuMobile);

  if (!isOpen) return null;

  if (categoriesLoading) {
    return (
      <div className="fixed inset-0 bg-white z-40 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (categoriesError) {
    return (
      <div className="fixed inset-0 bg-white z-40 flex items-center justify-center">
        <div className="text-red-500">{categoriesError}</div>
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <div className="fixed inset-0 bg-white z-40 flex items-center justify-center">
        <div className="text-gray-500">دسته‌بندی‌ای یافت نشد</div>
      </div>
    );
  }

  const activeMobileCategory = categories.find((cat) => cat.id === activeCategoryId);

  return (
    <div className="fixed inset-0 bg-white z-40 flex">
      {/* Sidebar - 20% width */}
      <div className="w-1/5 bg-[#f0f0f1] h-full overflow-y-auto">
        <div className="flex flex-col">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                dispatch(setActiveCategory(category.id));
              }}
              className="flex flex-col items-center py-3 px-2 transition-colors group"
            >
              <img src={category.image} alt={category["main-title"]} className={`w-4 h-4 rounded-full object-cover transition-colors ${activeCategoryId === category.id ? "brightness-0 invert-[.27]" : "group-hover:brightness-0 group-hover:invert-[.27]"}`} />
              <span className={`font-yekan text-[10px] transition-colors ${activeCategoryId === category.id ? "text-red-500" : "text-[#3f4064] group-hover:text-red-500"}`}>{category["main-title"]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main content - 80% width */}
      <div className="w-4/5 bg-white h-full overflow-y-auto">
        {activeMobileCategory && (
          <div className="flex flex-col">
            {/* لینک همه محصولات */}
            <a href={activeMobileCategory.url} className="px-4 py-3 text-[11px] leading-[2.17] text-[#008eb2] font-yekan hover:text-[#008eb2] transition-colors">
              {activeMobileCategory.generalLink} &gt;
            </a>

            {/* عنوان اصلی */}
            <div className="px-4 py-3 border-b border-gray-200">
              <h2 className="text-[12px] font-yekan leading-[2.15] text-gray-900">{activeMobileCategory["main-title"]}</h2>
            </div>

            {/* لیست زیرمجموعه‌ها */}
            {activeMobileCategory.children?.map((subCategory) => (
              <div key={subCategory.id}>
                <SubCategoryButton title={subCategory.title} isActive={activeSubCategoryId === subCategory.id} onClick={() => dispatch(setActiveSubCategory(activeSubCategoryId === subCategory.id ? null : subCategory.id))} />
                {activeSubCategoryId === subCategory.id && subCategory.items && subCategory.items.length > 0 && (
                  <ItemsGrid
                    items={subCategory.items.map((item) => ({
                      id: item.id,
                      title: item.item,
                      image: item.image || undefined,
                      url: item.url ? { uri: item.url } : undefined,
                    }))}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(CategoryMenu);
