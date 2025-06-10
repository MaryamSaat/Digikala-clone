import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

const icons = [
  { img: "/images/coloricons/icon1.png", label: "دیجی کالا جت" },
  { img: "/images/coloricons/icon2.png", label: "دریافت وام" },
  { img: "/images/coloricons/icon3.png", label: "حراج استایل" },
  { img: "/images/coloricons/icon4.png", label: "بازگشت به مدرسه" },
  { img: "/images/coloricons/icon5.png", label: "تبلیغات فروشندگان" },
  { img: "/images/coloricons/icon6.png", label: "جایزه خریاول" },
  { img: "/images/coloricons/icon7.png", label: "سوپر مارکت پرتخفیف" },
  { img: "/images/coloricons/icon8.png", label: "خرید چکی" },
  { img: "/images/coloricons/icon9.png", label: "دیجی پلاس" },
];

export default function ColorIcons() {
  return (
    <div className="w-full h-[130px] flex justify-center mb-2.5 color__icon">
      {/* Desktop View */}
      <div className="hidden md:flex w-[82%] h-full pt-[26px] justify-evenly items-center color__icon__1">
        {icons.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center w-[82px] h-full py-2 gap-y-2 coloricon1__child">
            <img src={item.img} alt={item.label} className="w-[52px] h-[52px] object-cover" />
            <p className="text-center text-[11px] font-['IRANYekanWeb'] w-[90%] leading-5">{item.label}</p>
          </div>
        ))}
        <div className="flex flex-col items-center w-[82px] h-full py-2 gap-y-2 coloricon1__child">
          <div className="coloricon1__subchild">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <p className="text-center text-[11px] font-['IRANYekanWeb'] w-[90%] leading-5">بیشتر</p>
        </div>
      </div>

      {/* Mobile & Tablet View */}
      <div className="md:hidden w-[82%] h-full">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={5}
          pagination={{
            clickable: true,
          }}
          className="w-full h-full"
        >
          {icons.map((item, idx) => (
            <SwiperSlide key={idx} className="flex flex-col items-center w-[82px] h-full py-2 gap-y-2">
              <img src={item.img} alt={item.label} className="w-[52px] h-[52px] object-cover" />
              <p className="text-center text-[11px] font-['IRANYekanWeb'] w-[90%] leading-5">{item.label}</p>
            </SwiperSlide>
          ))}
          <SwiperSlide className="flex flex-col items-center w-[82px] h-full py-2 gap-y-2">
            <div className="coloricon1__subchild">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <p className="text-center text-[11px] font-['IRANYekanWeb'] w-[90%] leading-5">بیشتر</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
