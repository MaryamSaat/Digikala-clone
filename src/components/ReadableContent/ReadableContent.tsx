import React from "react";
import { readableContent } from "../../data/readableContent";

const ReadableContent: React.FC = () => {
  return (
    <div className="w-full flex justify-center mb-[50px]">
      <div className="w-[87%] rounded-2xl">
        {/* Top Div - Title */}
        <div className="h-[65.6px] flex items-center justify-between px-4 pt-[10px]">
          <div className="w-1/2 flex items-center justify-start">
            <span className="text-[#424750] text-[16px] font-bold text-right font-['IRANYekanWeb']">خواندنی ها</span>
          </div>
          <div className="w-1/2 flex items-center justify-end">
            <span className="text-[#19bfd3] text-[12px] text-left font-['IRANYekanWeb']">مطالب بیشتر در دیجیکالا مگ &gt;</span>
          </div>
        </div>

        {/* Bottom Div - Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
          {readableContent.map((item, index) => (
            <div key={index} className="flex flex-col border border-[#E0E0E2] rounded-2xl">
              <div className="w-full h-[200px] mb-2">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-t-2xl" />
              </div>
              <h3 className="text-[#424750] text-[12px] font-['IRANYekanWeb'] mb-5 line-clamp-2 pr-2.5">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadableContent;
