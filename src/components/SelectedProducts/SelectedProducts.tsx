import React from "react";
import { selectedProducts } from "../../data/selectedproducts";

const SelectedProducts: React.FC = () => {
  return (
    <div className="w-full flex justify-center mb-[23px]">
      <div className="md:w-[87%] w-full md:border md:border-[#E0E0E2] md:rounded-2xl">
        {/* Top Div - Title */}
        <div className="h-[44px] flex items-center justify-center my-[16px]">
          <img src="./images/logo/discount.svg" alt="" className="ml-[12px]" />
          <h2 className="text-[21px] font-bold font-yekan text-center">منتخب محصولات تخفیف و حراج</h2>
        </div>

        {/* Bottom Div - Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 grid-rows-9 md:grid-rows-3">
          {selectedProducts.map((product, index) => (
            <div key={index} className="relative flex flex-col items-center justify-center p-2">
              {/* Border Lines */}
              {index % 2 !== 0 && <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-[#E0E0E2]" />}
              {index < 16 && <div className="absolute bottom-0 right-0 left-0 h-[1px] bg-[#E0E0E2]" />}

              {/* Image */}
              <div className="w-[150px] h-[150px] mb-2">
                <img src={product.url} alt="product" className="w-full h-full object-contain" />
              </div>

              {/* Price and Discount */}
              <div className="h-[33.6px] w-full flex items-center justify-between px-2">
                <div className="bg-[#E6123D] text-white text-xs font-bold px-2 py-1 rounded-full font-yekan">{product.discount}%</div>
                <div className="flex items-center gap-1">
                  <span className="text-[#424750] text-sm font-yekan font-bold">{product.price}</span>
                  <span className="text-[#424750] text-xs font-yekan font-bold">تومان</span>
                </div>
              </div>

              {/* Original Price */}
              <div className="h-[26.04px] w-full flex items-center justify-end px-2">
                <span className="text-[#A1A3A8] text-xs line-through font-yekan">{product.finalprice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedProducts;
