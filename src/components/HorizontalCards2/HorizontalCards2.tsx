import React, { useState, useEffect } from "react";

const HorizontalCards2: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const lastCardImages = ["./images/HorizontalCards/9.jpg", "./images/HorizontalCards/10.jpg"];

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
        {/* کارت‌های ثابت */}
        <div className="w-[323px] h-[244px] rounded-2xl overflow-hidden">
          <img src="./images/HorizontalCards/6.jpg" alt="card1" className="w-full h-full object-cover" />
        </div>

        <div className="w-[323px] h-[244px] rounded-2xl overflow-hidden">
          <img src="./images/HorizontalCards/7.jpg" alt="card2" className="w-full h-full object-cover" />
        </div>

        <div className="w-[323px] h-[244px] rounded-2xl overflow-hidden">
          <img src="./images/HorizontalCards/8.jpg" alt="card3" className="w-full h-full object-cover" />
        </div>

        {/* کارت آخر با دو عکس متغیر */}
        <div className="w-[323px] h-[244px] rounded-2xl overflow-hidden relative">
          <img src={lastCardImages[currentImageIndex]} alt="card4" className="w-full h-full object-cover transition-opacity duration-500" />
        </div>
      </div>

      {/* Mobile & Tablet View */}
      <div className="md:hidden w-[87%] grid grid-cols-2 gap-4">
        {/* کارت‌های ثابت */}
        <div className="w-full aspect-[323/244] rounded-2xl overflow-hidden">
          <img src="./images/HorizontalCards/6.jpg" alt="card1" className="w-full h-full object-cover" />
        </div>

        <div className="w-full aspect-[323/244] rounded-2xl overflow-hidden">
          <img src="./images/HorizontalCards/7.jpg" alt="card2" className="w-full h-full object-cover" />
        </div>

        <div className="w-full aspect-[323/244] rounded-2xl overflow-hidden">
          <img src="./images/HorizontalCards/8.jpg" alt="card3" className="w-full h-full object-cover" />
        </div>

        {/* کارت آخر با دو عکس متغیر */}
        <div className="w-full aspect-[323/244] rounded-2xl overflow-hidden relative">
          <img src={lastCardImages[currentImageIndex]} alt="card4" className="w-full h-full object-cover transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
};

export default HorizontalCards2;
