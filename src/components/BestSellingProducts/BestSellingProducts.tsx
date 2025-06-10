import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { bestSellingProducts as bestSellingProducts1 } from "../../data/BestSellingProducts";
import { bestSellingProducts as bestSellingProducts2 } from "../../data/bestsellingproducts2";

interface Product {
  id: number;
  title_fa: string;
  url: string[];
  title_en?: string;
}

interface TitleItem {
  maintitle: string;
}

interface BestSellingProductsProps {
  dataSource: "first" | "second";
}

const BestSellingProducts: React.FC<BestSellingProductsProps> = ({ dataSource }) => {
  const allProducts = dataSource === "first" ? bestSellingProducts1 : bestSellingProducts2;
  const mainTitle = (allProducts[0] as TitleItem).maintitle;
  const products = allProducts.slice(1) as Product[];

  return (
    <div className="w-full flex justify-center mb-[23px]">
      <div className="md:w-[87%] w-full md:h-[423px]  md:border md:border-[#E0E0E2] md:rounded-2xl">
        {/* Top Div - Title */}
        <div className="h-[44px] flex items-center md:justify-center justify-between my-[12px] px-[10px] relative">
          <div className="flex items-center">
            <img src="/images/logo/flame.svg" alt="" className="ml-[10px]" />
            <h2 className="text-[21px] font-bold font-['IRANYekanWeb'] text-center">{mainTitle}</h2>
          </div>
          <span className="text-[14px] font-['IRANYekanWeb'] text-[#19BFD3] absolute left-7 top-1/2 -translate-y-1/2">مشاهده همه</span>
        </div>

        {/* Bottom Div - Swiper Grid */}
        <div className="h-[379px]">
          <Swiper
            modules={[Grid, Navigation]}
            grid={{
              rows: 3,
              fill: "column",
            }}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                grid: {
                  rows: 3,
                  fill: "column",
                },
                navigation: {
                  enabled: false,
                },
              },
              768: {
                slidesPerView: 4,
                grid: {
                  rows: 3,
                  fill: "column",
                },
                navigation: {
                  enabled: true,
                },
              },
            }}
            className="h-full"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="h-[86px] flex items-center justify-between w-full px-2 raletive">
                  {/* Right side - Image */}
                  <div className="w-[86px] h-[86px] flex items-center justify-center">
                    <img src={product.url[0]} alt={product.title_fa} className="w-[86px] h-[86px] object-cover p-2" />
                  </div>

                  {/* Middle - ID */}
                  <div className="w-[13.81px] flex items-center justify-center ml-[12px]">
                    <span className="text-[#19bfd3] text-[26px] leading-2.1 font-bold font-['IRANYekanWeb'] text-right">{product.id}</span>
                  </div>

                  {/* Left side - Description */}
                  <div className="w-[190.688px] h-[86px] flex  items-center ">
                    <p className="text-[#424750] text-right font-['IRANYekanWeb'] text-[12px] line-clamp-2 overflow-hidden text-ellipsis">{product.title_fa}</p>
                  </div>
                </div>
                {product.id % 3 !== 0 && <div className="w-[183px] h-[1px] bg-[#E0E0E2] absolute bottom-0 left-[20px]"></div>}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
