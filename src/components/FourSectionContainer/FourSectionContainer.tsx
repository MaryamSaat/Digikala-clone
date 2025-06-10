import React from "react";
import { sections as sections1 } from "../../data/foursectioncontainer";
import { sections as sections2 } from "../../data/foursectioncontainer2";

interface SectionProps {
  title: string;
  subtitle: string;
  images: string[];
  isLast?: boolean;
}

interface FourSectionContainerProps {
  dataSource?: "first" | "second";
}

const Section: React.FC<SectionProps> = ({ title, subtitle, images, isLast }) => {
  return (
    <div className="relative flex flex-col px-[20px]">
      {/* Top Div */}
      <div className="h-[57.6px] m-2">
        <p className="text-[16px] text-black font-bold font-['IRANYekanWeb'] text-start">{title}</p>
        <p className="text-[11px] text-black font-normal font-['IRANYekanWeb'] text-start">{subtitle}</p>
      </div>

      {/* Middle Div - Grid */}
      <div className="h-[289.6px] grid grid-cols-2 grid-rows-2">
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-center relative p-2">
            <img src={image} alt={`section-${index + 1}`} className="w-full h-full object-contain" />
            {index % 2 === 0 && <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#E0E0E2]" />}
            {index < 2 && <div className="absolute bottom-0 right-0 left-0 h-[1px] bg-[#E0E0E2]" />}
          </div>
        ))}
      </div>

      {/* Bottom Div */}
      <div className="h-[70.8px] flex items-start justify-center">
        <p className="text-[12px] text-[#19BFD3] font-normal font-['IRANYekanWeb'] mt-[4px]">مشاهده {">"} </p>
      </div>

      {!isLast && <div className="absolute left-0 top-0 h-[418px] w-[1px] bg-[#E0E0E2]" />}
    </div>
  );
};

const FourSectionContainer: React.FC<FourSectionContainerProps> = ({ dataSource = "first" }) => {
  const sections = dataSource === "first" ? sections1 : sections2;

  return (
    <div className="w-full flex justify-center mb-[23px]">
      <div className="md:w-[87%] w-full md:h-[418px] h-[1672px] md:border md:border-[#E0E0E2] md:rounded-2xl">
        <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 md:divide-y-0 sm:divide-[#E0E0E2] sm:divide-x divide-[#E0E0E2]">
          {sections.map((section, index) => (
            <Section key={index} {...section} isLast={index === sections.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourSectionContainer;
