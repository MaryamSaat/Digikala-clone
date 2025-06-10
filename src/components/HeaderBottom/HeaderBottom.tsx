import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";
import Menu from "./MegaMenu/Menu";

const HeaderBottom: React.FC = () => {
  return (
    <div className="w-full h-[40px] flex pl-[20px] border-b border-[#eee] sticky top-[70px] scroll-mt-[70px] bg-white z-40">
      <Menu />
      <HeaderRight />
      <HeaderLeft />
    </div>
  );
};
export default HeaderBottom;
