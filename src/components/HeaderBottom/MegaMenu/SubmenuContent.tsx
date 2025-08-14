import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { Link } from "react-router-dom";

// تبدیل children به آرایه flat
function flattenSubCategories(children: { id: number; title: string; items?: string[] }[]) {
  const flat: { id: number; type: "title" | "item"; text: string }[] = [];
  for (const sub of children) {
    flat.push({ id: sub.id, type: "title", text: sub.title });
    if (sub.items && sub.items.length > 0) {
      for (const item of sub.items) {
        flat.push({ id: sub.id, type: "item", text: item });
      }
    }
  }
  return flat;
}

// تقسیم آرایه flat به ستون‌ها
function splitToColumns<T>(arr: T[], columns: number) {
  const perCol = Math.ceil(arr.length / columns);
  const result: T[][] = [];
  for (let i = 0; i < columns; i++) {
    result.push(arr.slice(i * perCol, (i + 1) * perCol));
  }
  // ستون‌های خالی را حذف کن
  return result.filter((col) => col.length > 0);
}

const SubmenuContent: React.FC = () => {
  const { categories, activeCategoryId } = useSelector((state: RootState) => state.menu);

  const activeCategory = categories.find((cat) => cat.id === activeCategoryId);

  if (!activeCategory) return null;

  const columnCount = 4;
  const flat = flattenSubCategories(activeCategory.children ?? []);
  const columns =
    flat.length <= columnCount
      ? [flat] // همه آیتم‌ها در یک ستون
      : splitToColumns(flat, columnCount);

  return (
    <div className="absolute left-0 top-0 w-[83%] h-[70vh] bg-white flex flex-col overflow-auto overflow-x-hidden z-50">
      {/* دیو بالایی: generalLink */}
      {activeCategory.generalLink && (
        <div className="w-full h-[15%] flex items-center justify-start mr-4">
          <Link to="#" className="block text-right text-[12px] font-bold text-[#1496bb] font-yekan leading-[52px]">
            {activeCategory.generalLink} &gt;
          </Link>
        </div>
      )}
      {/* دیو پایینی: گروه‌ها */}
      <div className="flex flex-row flex-wrap h-[85%]">
        {columns.map((col, colIdx) => {
          let colWidth = "w-full";
          if (columns.length === 2) colWidth = "w-1/2";
          else if (columns.length === 3) colWidth = "w-1/3";
          else if (columns.length === 4) colWidth = "w-1/4";
          return (
            <div key={colIdx} className={`${colWidth} h-full px-2 flex flex-col`}>
              {col.map((item, idx) =>
                item.type === "title" ? (
                  <Link key={idx} to="#" className="block text-right text-[13px] font-bold text-[#020b0d] leading-[28px] hover:text-red-600 font-yekan">
                    <span className="text-red-500 mx-1">|</span>
                    {item.text} &gt;
                  </Link>
                ) : (
                  <Link key={idx} to="#" className="block text-right text-[12px] text-gray-500 leading-[33px] hover:text-red-500 font-yekan mr-4">
                    {item.text}
                  </Link>
                )
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubmenuContent;
