import HeaderBanner from "../HeaderBanner/HeaderBanner";
import HeaderTop from "../HeaderTop/HeaderTop";
import HeaderBottom from "../HeaderBottom/HeaderBottom";
import StorySlider from "../StorySlider/StorySlider";
import { storyData } from "../../data/storyData";
import FullWidthSlider from "../FullWidthSlider/FullWidthSlider";
import { sliderImages } from "../../data/fullwidthsliderData";
import ColorIcons from "../ColorIcons/ColorIcons";
import CustomCardSlider from "../CustomCardSlider/CustomCardSlider";
import HorizontalCards from "../HorizontalCards/HorizontalCards";
import AmazingSupermarket from "../AmazingSupermarket/AmazingSupermarket";
import HorizontalCards2 from "../HorizontalCards2/HorizontalCards2";
import ShoppingByCategory from "../ShoppingByCategory/ShoppingByCategory";
import TwoCards from "../TwoCards/TwoCards";
import MostPopularBrands from "../MostPopularBrands/MostPopularBrands";
import FourSectionContainer from "../FourSectionContainer/FourSectionContainer";
import BestSellingProducts from "../BestSellingProducts/BestSellingProducts";
import SelectedProducts from "../SelectedProducts/SelectedProducts";
import ReadableContent from "../ReadableContent/ReadableContent";
import Footer from "../Footer/Footer";
import FloatingButton from "../FloatingButton/FloatingButton";
import MegaMenuMobile from "../HeaderBottom/MegaMenu/MegaMenuMobile";
import { CategoryProvider } from "../../context/CategoryContext";
import SupermarketCard from "../SupermarketCard/SupermarketCard";
import MobileFooter from "../MobileFooter/MobileFooter";
import FloatingButtonMobile from "../FloatingButtonMobile/FloatingButtonMobile";

function App() {
  return (
    <CategoryProvider>
      <HeaderBanner />
      <HeaderTop />
      <HeaderBottom />
      <StorySlider stories={storyData} />
      <FullWidthSlider images={sliderImages} />
      <SupermarketCard />
      <ColorIcons />
      <CustomCardSlider />
      <HorizontalCards />
      <AmazingSupermarket />
      <HorizontalCards2 />
      <ShoppingByCategory />
      <TwoCards />
      <MostPopularBrands />
      <FourSectionContainer dataSource="first" />
      <BestSellingProducts dataSource="first" />
      <FourSectionContainer dataSource="second" />
      <SelectedProducts />
      <BestSellingProducts dataSource="second" />
      <ReadableContent />
      <Footer />
      <MobileFooter />
      <FloatingButton position="left" variant="supermarket" />
      <FloatingButton position="right" variant="help" />
      <FloatingButtonMobile variant="supermarket" />
      <FloatingButtonMobile variant="help" />
      <MegaMenuMobile />
    </CategoryProvider>
  );
}

export default App;
