import React from "react";
import { amazingItems } from "../../data/customCardSliderData";

// تنظیمات مربوط به Navigation
import "swiper/css";
import "swiper/css/navigation";
import "./cardsstyle.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CustomCardSlider: React.FC = () => {
  return (
    <div className="w-full h-[300px] flex flex-col bg-[#d92f4e] md:bg-transparent justify-center items-center mb-[30px]">
      {/* دیو بالایی برای موبایل و تبلت */}
      <div className="md:hidden w-full flex justify-center bg-[#d92f4e] px-[20px] pt-[20px] pb-[12px]">
        <a href="#" className="flex flex-row justify-center items-center gap-5">
          <img src="./images/logo/amazing/smilypercent.svg" alt="" className="w-[24px] h-[24px]" />
          <img src="https://www.digikala.com/statics/img/svg/typography/incredible-word.svg" alt="" />
          <div className="flex justify-center gap-1 ltr">
            <div className="w-[26px] h-[26px] rounded bg-[whitesmoke] text-center leading-[26px] text-[#2b2b2b] font-bold text-[16px]">03</div>
            <span className="text-[whitesmoke]">:</span>
            <div className="w-[26px] h-[26px] rounded bg-[whitesmoke] text-center leading-[26px] text-[#2b2b2b] font-bold text-[16px]">55</div>
            <span className="text-[whitesmoke]">:</span>
            <div className="w-[26px] h-[26px] rounded bg-[whitesmoke] text-center leading-[26px] text-[#2b2b2b] font-bold text-[16px]">59</div>
          </div>
          <span className="text-[12px] font-bold font-yekan text-[whitesmoke] flex items-center gap-1">
            مشاهده همه
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>

      <div className="md:w-[87%] w-full h-full bg-[#d92f4e] md:rounded-[15px] md:py-5 pb-5 pr-5 md:pr-0">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 8,
              spaceBetween: 8,
            },
          }}
          navigation={true}
          className="w-full h-full"
        >
          {/* کارت اول در دسکتاپ */}
          <SwiperSlide className="first-slide bg-transparent flex flex-col justify-center items-center gap-2">
            <a href="#" className="flex flex-col justify-center items-center gap-2">
              <img src="./images/logo/amazing/Amazingoffer.svg" alt="" className="w-[88px] h-[88px]" />
              <div className="flex justify-center gap-1 ltr">
                <div className="w-[26px] h-[26px] rounded bg-[whitesmoke] text-center leading-[26px] text-[#2b2b2b] font-bold text-[16px]">03</div>
                <span className="text-[whitesmoke]">:</span>
                <div className="w-[26px] h-[26px] rounded bg-[whitesmoke] text-center leading-[26px] text-[#2b2b2b] font-bold text-[16px]">55</div>
                <span className="text-[whitesmoke]">:</span>
                <div className="w-[26px] h-[26px] rounded bg-[whitesmoke] text-center leading-[26px] text-[#2b2b2b] font-bold text-[16px]">59</div>
              </div>
              <img src="./images/logo/amazing/smilypercent.svg" alt="" className="w-[80px] h-[80px]" />
              <span className="text-[12px] font-bold text-[whitesmoke] flex items-center gap-1">
                مشاهده همه
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </SwiperSlide>
          {/* کارتهای وسط   */}
          {amazingItems.map((item, index) => (
            <SwiperSlide key={item.id} className={`flex justify-center items-center pt-2 bg-white ${index === 0 ? "rounded-tr-[10px] rounded-br-[10px] " : ""}`}>
              <a href="#" className="flex flex-col items-center justify-center gap-2 h-full no-underline">
                <img src={item.image} alt="" className="w-[132px] h-[132px] md:w-[120px] md:h-[120px]" />
                <p className="font-yekan w-[90%] text-[12.5px] text-[#2b2b2b] leading-5 line-clamp-2 text-right">{item.description}</p>
                <div className="w-full flex justify-between ltr pr-2">
                  <div className="flex justify-center items-center md:h-[20px] md:w-[34px] h-[18px] w-[28px] bg-[#d32f2f] rounded-[15px]">
                    <span className="inline-block text-white text-[10px] md:text-[12px] px-2">{item.discount}</span>
                  </div>
                  <span className="text-[12px] md:text-[14px] font-yekan font-bold flex items-center gap-1 ml-2">
                    {item.price}
                    <img src="./images/amazing/price.svg" alt="" className="w-4 h-4" />
                  </span>
                </div>
                <span className="w-full pl-7 text-left text-[11px] mb-2 md:mb-0 md:text-[13px] line-through text-gray-400 font-yekan">{item.oldPrice}</span>
              </a>
            </SwiperSlide>
          ))}
          {/* کارت آخر در دسکتاپ */}
          <SwiperSlide className="flex flex-col justify-center items-center bg-aquamarine ">
            <a href="#" className="flex flex-col items-center gap-2 ">
              <div className="w-[50px] h-[50px] border-2 border-[#19bfd3] rounded-full flex items-center justify-center overflow-hidden">
                <img src="./images/logo/amazing/turnleft.svg" alt="" className="w-6" />
              </div>
              <p className="text-[#2b2b2b] text-bold text-[12px] font-yekan whitespace-nowrap">مشاهده همه</p>
            </a>
          </SwiperSlide>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default CustomCardSlider;
