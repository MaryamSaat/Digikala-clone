import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { storyData, type StoryItem } from "../../data/storyData";

interface StorySliderProps {
  stories?: StoryItem[];
}

export default function StorySlider({ stories = storyData }: StorySliderProps) {
  return (
    <div className="w-full h-[170px] flex justify-center">
      <div className="md:w-[87%] w-[96%]  h-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={28}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: "auto",
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="w-full h-full"
        >
          {stories.map((story) => (
            <SwiperSlide key={story.id} className="!w-[74px] h-full flex justify-center items-center">
              <div className="w-full h-full flex flex-col items-center gap-2 pt-6 mx-2">
                <img src={story.image} alt={story.title} className="w-[74px] h-[74px] rounded-full object-cover outline-2 outline-purple-500 outline-offset-3" />
                <p className="text-center text-[11px] font-['IRANYekanWeb'] line-clamp-2 w-[74px] leading-[23px]">{story.title}</p>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="hidden md:block swiper-button-prev !w-[40px] !h-[40px] !rounded-full !bg-white !shadow-md after:!text-[12px] after:!text-gray-600"></div>
          <div className="hidden md:block swiper-button-next !w-[40px] !h-[40px] !rounded-full !bg-white !shadow-md after:!text-[12px] after:!text-gray-600"></div>
        </Swiper>
      </div>
    </div>
  );
}
