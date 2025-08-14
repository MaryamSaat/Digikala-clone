import React from "react";

const TwoCards: React.FC = () => {
  return (
    <div className="w-full flex justify-center mb-[23px]">
      <div className="w-[87%] md:h-[264px] flex flex-col md:flex-row gap-[10px]">
        <div className="flex-1 rounded-2xl overflow-hidden">
          <img src="./images/TwoCards/1.jpg" alt="card1" className="w-full md:h-full h-[140px] object-cover" />
        </div>
        <div className="flex-1 rounded-2xl overflow-hidden">
          <img src="./images/TwoCards/2.jpg" alt="card2" className="w-full md:h-full h-[140px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default TwoCards;
