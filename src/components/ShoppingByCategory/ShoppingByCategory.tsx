import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./styles.css";

interface CategoryItem {
  id: number;
  image: string;
  title: string;
}

const categories: CategoryItem[] = [
  { id: 1, image: "./images/ShoppingByCategory/موبایل.png", title: "موبایل" },
  { id: 2, image: "./images/ShoppingByCategory/لب تاپ.png", title: "لب تاپ" },
  { id: 3, image: "./images/ShoppingByCategory/کالای دیجیتال.png", title: "کالای دیجتال " },
  { id: 4, image: "./images/ShoppingByCategory/خانه و آشپزخانه.png", title: "خانه و آشپزخانه" },
  { id: 5, image: "./images/ShoppingByCategory/لوازم برقی.png", title: "لوازم خانگی برقی" },
  { id: 6, image: "./images/ShoppingByCategory/آرایشی.png", title: "آرایشی بهداشتی" },
  { id: 7, image: "./images/ShoppingByCategory/خودرو.png", title: "خودرو و موتورسیکلت" },
  { id: 8, image: "./images/ShoppingByCategory/ابزار.png", title: "ابزارآلات و تجهیزات" },
  { id: 9, image: "./images/ShoppingByCategory/پوشاک.png", title: "مد و پوشاک " },
  { id: 10, image: "./images/ShoppingByCategory/طلا.png", title: "طلا و نقره" },
  { id: 11, image: "./images/ShoppingByCategory/تجهیزات پزشکی.png", title: "تجهیزات پزشکی و سلامت " },
  { id: 12, image: "./images/ShoppingByCategory/لوازم التحریر.png", title: "کتاب ،لوازم التحریروهنر" },
  { id: 13, image: "./images/ShoppingByCategory/ورزش.png", title: "ورزش وسفر " },
  { id: 14, image: "./images/ShoppingByCategory/کارت هدیه.png", title: "کارت هدیه وگیفت کارت" },
  { id: 15, image: "./images/ShoppingByCategory/سوپرمارکت.png", title: " سوپرمارکت آنلاین" },
  { id: 16, image: "./images/ShoppingByCategory/اسباب بازی.png", title: "اسباب بازی،کودک و نوزاد " },
  { id: 17, image: "./images/ShoppingByCategory/بومی.png", title: "محصولات بومی و محلی" },
  { id: 18, image: "./images/ShoppingByCategory/کارکرده.png", title: "محصولات کارکرده" },
];

const ShoppingByCategory: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center mb-[23px]">
      {/* عنوان */}
      <div className="w-[87%] md:h-[45px] flex items-center justify-center mb-[53px] mt-[10px]">
        <h2 className="text-[21px] font-bold font-yekan text-center">خرید بر اساس دسته بندی</h2>
      </div>

      {/* اسلایدر */}
      <div className="md:w-[87%] w-[90%] md:h-[328px] h-[450px]">
        <Swiper
          modules={[Grid, Navigation]}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 3.5,
              grid: {
                rows: 3,
                fill: "row",
              },
              spaceBetween: 9,
            },
            768: {
              slidesPerView: 7.5,
              grid: {
                rows: 2,
                fill: "row",
              },
              spaceBetween: 10,
            },
          }}
          navigation={{
            enabled: true,
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="h-full"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="flex flex-col items-center gap-1 md:gap-2">
                <div className="md:w-[100px] w-[90px] md:h-[100px] h-[90px] rounded-full bg-white mb-2">
                  <img src={category.image} alt={category.title} className="w-full h-full object-contain scale-110 " />
                </div>
                <p className="text-[11px] md:text-[12px] text-center font-yekan">{category.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShoppingByCategory;
