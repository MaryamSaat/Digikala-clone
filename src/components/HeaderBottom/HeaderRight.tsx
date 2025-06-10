// HeaderNavRight.tsx

const HeaderRight: React.FC = () => {
  return (
    <div className="hidden md:block w-[80%] h-full">
      <nav className="w-full h-full flex pr-[10px] gap-[10px] items-center">
        <span className="inline-block w-[1px] h-[16px] bg-gray-300 my-auto"></span>

        {[
          {
            href: "./amazing_ones.html",
            img: "/images/logo/percent.svg",
            label: "شگفت انگیزها",
          },
          {
            href: "#",
            img: "/images/logo/basket.svg",
            label: "سوپرمارکت",
          },
          {
            href: "#",
            img: "/images/logo/giftcard.svg",
            label: "کارت هدیه",
          },
          {
            href: "#",
            img: "/images/logo/flamegray.svg",
            label: "پرفروش ترین ها",
          },
          {
            href: "#",
            img: "/images/logo/discountgray.svg",
            label: "تخفیف ها و پیشنهادها",
          },
        ].map(({ href, img, label }) => (
          <div key={label} className="h-full flex items-center whitespace-nowrap">
            <a href={href} className="flex items-center h-full text-[12px] font-['IRANYekanWeb'] text-gray-500 no-underline px-[3px] gap-[5px]">
              <img src={img} alt={label} className="w-[18px] h-[18px]" />
              {label}
            </a>
          </div>
        ))}

        <span className="inline-block w-[1px] h-[16px] bg-gray-300 my-auto"></span>

        <div className="h-full flex items-center whitespace-nowrap">
          <a href="#" className="flex items-center h-full text-[12px] font-[var(--fontyekan)] text-gray-500 no-underline px-[3px] gap-[5px]">
            سوالی دارید؟
          </a>
        </div>
        <div className="h-full flex items-center whitespace-nowrap">
          <a href="#" className="flex items-center h-full text-[12px] font-[var(--fontyekan)] text-gray-500 no-underline px-[3px] gap-[5px]">
            در دیجی‌کالا بفروشید!
          </a>
        </div>
      </nav>
    </div>
  );
};

export default HeaderRight;
