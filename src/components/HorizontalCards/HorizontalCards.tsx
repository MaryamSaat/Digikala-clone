import React, { useState, useEffect } from "react";

const HorizontalCards: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const firstCardImages = ["/images/HorizontalCards/1.jpg", "/images/HorizontalCards/1-1.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 2000); // تغییر عکس هر 2 ثانیه

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center mb-[23px]">
      {/* Desktop View */}
      <div className="hidden md:flex w-[87%] justify-between">
        {/* کارت اول با دو عکس متغیر */}
        <div className="w-[323px] h-[244px] rounded-2xl overflow-hidden relative">
          <img src={firstCardImages[currentImageIndex]} alt="card1" className="w-full h-full object-cover transition-opacity duration-500" />
        </div>

        {/* کارت‌های دیگر */}
        <div className="w-[323px] h-[244px] rounded-2xl overflow-hidden">
          <img src="/images/HorizontalCards/2.jpg" alt="card2" className="w-full h-full object-cover" />
        </div>

        <div className="w-[323px] h-[244px] rounded-2xl overflow-hidden">
          <img src="/images/HorizontalCards/3.jpg" alt="card3" className="w-full h-full object-cover" />
        </div>

        <div className="w-[323px] h-[244px] rounded-2xl overflow-hidden">
          <img src="/images/HorizontalCards/4.jpg" alt="card4" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Mobile & Tablet View */}
      <div className="md:hidden w-[87%] grid grid-cols-2 gap-4">
        {/* کارت اول با دو عکس متغیر */}
        <div className="w-full aspect-[323/244] rounded-2xl overflow-hidden relative">
          <img src={firstCardImages[currentImageIndex]} alt="card1" className="w-full h-full object-cover transition-opacity duration-500" />
        </div>

        {/* کارت‌های دیگر */}
        <div className="w-full aspect-[323/244] rounded-2xl overflow-hidden">
          <img src="/images/HorizontalCards/2.jpg" alt="card2" className="w-full h-full object-cover" />
        </div>

        <div className="w-full aspect-[323/244] rounded-2xl overflow-hidden">
          <img src="/images/HorizontalCards/3.jpg" alt="card3" className="w-full h-full object-cover" />
        </div>

        <div className="w-full aspect-[323/244] rounded-2xl overflow-hidden">
          <img src="/images/HorizontalCards/4.jpg" alt="card4" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HorizontalCards;
