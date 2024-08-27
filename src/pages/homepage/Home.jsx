import BannerSlider from "../../components/bannerSlider/BannerSlider"
import BestSelerSlider from "../../components/bestSeler/BestSelerSlider"
import Category from "../../components/category/Category"
import DiscountBanner from "../../components/discountBanner/DiscountBanner"
import PapularProducts from "../../components/popularProduct/PapularProducts"
import Services from "../../components/services/Services"
import Blog from "../../components/blog/Blog";
import Brands from "../../components/brands/Brands"

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <Services />
            <Category />
            <BestSelerSlider />
            <DiscountBanner />
            <PapularProducts />
            <Blog />
            <Brands />
        </div>
    )
}

export default Home
