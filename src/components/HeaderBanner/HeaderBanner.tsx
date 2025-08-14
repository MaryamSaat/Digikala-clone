import { useState } from "react";

const HeaderBanner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center md:h-[60px] h-[35px]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={isHovered ? "./images/topbar/first.jpg" : "./images/topbar/second.jpg"} alt="دیجی‌کالا" className="w-full h-[35px] md:h-[60px] object-cover transition-opacity duration-300" />
    </div>
  );
};

export default HeaderBanner;
