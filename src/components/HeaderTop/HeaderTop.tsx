import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserActions from "./UserActions";

const HeaderTop = () => {
  return (
    <div className="w-full h-[70px] flex sticky top-0 bg-white z-50">
      <Logo />
      <SearchBar />
      <UserActions />
    </div>
  );
};

export default HeaderTop;
