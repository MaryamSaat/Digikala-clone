import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./fullwidthstyle.css";

interface SliderImage {
  id: number;
  image: string;
  alt: string;
}

interface FullWidthSliderProps {
  images: SliderImage[];
}

export default function FullWidthSlider({ images }: FullWidthSliderProps) {
  return (
    <div className="w-full md:h-[400px] h-[180px] relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          0: {
            slidesPerView: 1.05,
          },
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full h-full"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id} className="w-full h-full">
            <div className="w-full md:w-full h-full px-1 md:px-0">
              <img src={item.image} alt={item.alt} className="w-full h-full object-cover rounded-[12px] md:rounded-none" />
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons - both on the right side */}
        <div className="absolute top-[35%] right-[10%] h-full flex items-center justify-end z-10">
          <div className="swiper-button-next !w-[40px] !h-[40px] !rounded-full !bg-white !shadow-md after:!text-[12px] after:!text-gray-600"></div>
          <div className="swiper-button-prev !w-[40px] !h-[40px] !rounded-full !bg-white !shadow-md after:!text-[12px] after:!text-gray-600"></div>
        </div>
      </Swiper>
    </div>
  );
}
