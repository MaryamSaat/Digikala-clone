import React from "react";
import { FaChevronDown } from "react-icons/fa";

const footerMenus = ["با دیجی‌کالا", "خدمات مشتریان", "راهنمای خرید از دیجی‌کالا", "شرکای تجاری"];

const MobileFooter: React.FC = () => {
  // ... اینجا می‌توانید منوها را باز/بسته کنید (در صورت نیاز)
  return (
    <div className="w-full bg-white border-t border-[#eee] md:hidden">
      {/* دکمه بازگشت به بالا */}
      <div className="w-full flex justify-center py-2 border-b border-[#eee]">
        <button className="text-[#19bfd3] text-[13px] font-bold">بازگشت به بالا</button>
      </div>

      {/* تماس با پشتیبانی */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#eee]">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f1f2f4]">
            <img src="/images/MobileFooter/headphone.svg" alt="" className="w-5 h-5" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[14px] font-['IRANYekanWeb'] font-bold">تماس با پشتیبانی</span>
            <span className="text-[11px] font-['IRANYekanWeb'] text-gray-500">۷ روز هفته، ۲۴ ساعته</span>
          </div>
        </div>
        <button className="bg-[#f1f2f4] text-[#424750] rounded-full px-5 py-1 text-[13px] font-bold">تماس</button>
      </div>

      {/* اپلیکیشن دیجی‌کالا */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#eee]">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#d32f2f]">
            <img src="/images/MobileFooter/smile.svg" alt="" className="w-5 h-5" />
          </div>

          <div className="flex flex-col items-start">
            <span className="text-[14px] font-bold font-['IRANYekanWeb']">اپلیکیشن دیجی‌کالا</span>
            <span className="text-[11px] text-gray-500 font-['IRANYekanWeb']">تجربه خرید بهتر در اپ</span>
          </div>
        </div>
        <button className="bg-[#f1f2f4] text-[#424750] rounded-full px-5 py-1 text-[13px] font-bold">دانلود</button>
      </div>

      {/* منوهای بازشونده */}
      <div className="divide-y divide-[#eee] mb-3">
        {footerMenus.map((menu, idx) => (
          <div key={idx} className="flex items-center justify-between px-4 py-3">
            <span className="text-[14px] font-['IRANYekanWeb'] font-bold">{menu}</span>
            <FaChevronDown className="text-gray-400" />
          </div>
        ))}
      </div>
      <div className="inline-block align-top w-[864.5px] h-[150.233px] mx-3">
        <div className="w-full h-[1px] bg-[#eee]"></div>
        <h1 className="text-lg font-bold mb-4 font-['IRANYekanWeb'] mt-3">دیجی کالا بزرگترین فروشگاه آنلاین ایران</h1>
        <p className=" w-full  text-[10px] text-[#767790] leading-[26.0333px] font-['IRANYekanWeb'] text-right  line-clamp-3 [&>*:nth-child(3)]:text-[#9e9fb1]">
          دیجی کالا سال‌ها است که به انتخاب اول بسیاری از خریداران اینترنتی تبدیل شده است. دیجی کالا به عنوان بزرگ‌ترین و معتبرترین فروشگاه آنلاین ایران، شناخته‌شده‌ترین فروشگاه نیز محسوب می‌شود. این فروشگاه آنلاین نه‌تنها گسترده‌ترین تنوع کالا را در دسته‌بندی‌های مختلف ارائه می‌دهد، بلکه با خدمات
          بی‌نظیر، سرعت ارسال بالا، ضمانت اصل بودن کالا و پشتیبانی حرفه‌ای، استاندارد جدیدی در خرید اینترنتی ایران تعریف کرده است. این فروشگاه با سال‌ها تجربه و اعتماد مشتریان، کامل‌ترین و بهترین گزینه برای خرید آنلاین در ایران محسوب می‌شود.
        </p>
        <span className="flex flex-row whitespace-nowrap items-center mt-4 mb-10 text-[#19bfd3] text-xs font-bold font-['IRANYekanWeb']  leading-[26.0333px]">
          مشاهده بیشتر
          <img src="/images/footer/left.svg" alt="" />
        </span>
      </div>
    </div>
  );
};

export default MobileFooter;
