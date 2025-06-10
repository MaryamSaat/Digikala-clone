import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Brand {
  id: number;
  image: string;
  alt: string;
}

const brands: Brand[] = [
  { id: 1, image: "/images/popularbrands/popular1.png", alt: "brand 1" },
  { id: 2, image: "/images/popularbrands/popular2.png", alt: "brand 2" },
  { id: 3, image: "/images/popularbrands/popular3.png", alt: "brand 3" },
  { id: 4, image: "/images/popularbrands/popular4.png", alt: "brand 4" },
  { id: 5, image: "/images/popularbrands/popular5.png", alt: "brand 5" },
  { id: 6, image: "/images/popularbrands/popular6.png", alt: "brand 6" },
  { id: 7, image: "/images/popularbrands/popular7.jpg", alt: "brand 7" },
  { id: 8, image: "/images/popularbrands/popular8.png", alt: "brand 8" },
  { id: 9, image: "/images/popularbrands/popular9.jpg", alt: "brand 9" },
  { id: 10, image: "/images/popularbrands/popular10.png", alt: "brand 10" },
  { id: 11, image: "/images/popularbrands/popular11.jpg", alt: "brand 11" },
  { id: 12, image: "/images/popularbrands/popular12.jpg", alt: "brand 12" },
  { id: 13, image: "/images/popularbrands/popular13.png", alt: "brand 13" },
  { id: 14, image: "/images/popularbrands/popular14.png", alt: "brand 14" },
  { id: 15, image: "/images/popularbrands/popular15.jpg", alt: "brand 15" },
  { id: 16, image: "/images/popularbrands/popular16.png", alt: "brand 16" },
  { id: 17, image: "/images/popularbrands/popular17.png", alt: "brand 17" },
  { id: 18, image: "/images/popularbrands/popular18.jpg", alt: "brand 18" },
  { id: 19, image: "/images/popularbrands/popular19.jpg", alt: "brand 19" },
  { id: 20, image: "/images/popularbrands/popular20.png", alt: "brand 20" },
];

const MostPopularBrands: React.FC = () => {
  return (
    <div className="w-full flex justify-center mb-[23px]">
      <div className="md:w-[87%] w-full h-[225px] md:border md:border-[#E0E0E2] md:rounded-2xl">
        {/* Title Section */}
        <div className="h-[80px] flex items-center justify-center">
          <img src="/images/logo/popularbrands/topbrands.svg" alt="topbrands" className="ml-3" />
          <h2 className="text-[#0C0C0C] text-[21px] font-bold">محبوب‌ترین برندها</h2>
        </div>

        {/* Swiper Section */}
        <div className="md:h-[145px]">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={0}
            breakpoints={{
              0: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: "auto",
                spaceBetween: 0,
              },
            }}
            className="h-full"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id} className="!w-[25%] md:!w-[142px]">
                <div className="h-full flex items-center justify-center">
                  {brand.id !== 20 && <div className="absolute left-0 top-0 h-[118px] w-[1px] bg-[#E0E0E2]" />}
                  <img src={brand.image} alt={brand.alt} className="md:w-[120px] w-[70px] md:h-[100px] h-[70px] object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MostPopularBrands;
