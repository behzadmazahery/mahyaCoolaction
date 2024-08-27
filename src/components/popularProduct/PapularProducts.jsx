// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import "../bestSeler/bestSeler.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
// import { Pagination } from 'swiper/modules';
import Title from '../title/Title';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import ProductCard from '../productCard/ProductCard';
const PapularProducts = () => {

    const bestSelerData = useSelector(state => state.products.products);

    // bestSelerData.sort((a, b) => b.rating - a.rating);
    // bestSelerData.sort((a, b) => b.price - a.price);
    // bestSelerData.sort((a, b) => new Date(b.date) - new Date(a.date));
    // bestSelerData.sort((a, b) => b.price - a.price);
    // bestSelerData.sort((a, b) => b.price - a.price);
    // bestSelerData.sort((a, b) => b.rating - a.rating);
    // bestSelerData.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className='bestSeler__box' >
            <Title title=" محبوبترین محصولات " route="./ProductPage" />
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >

                    {bestSelerData.map(product => {
                        return (
                            <SwiperSlide key={product.id}>
                                <ProductCard img={product.img} title={product.title} description={product.description} price={product.price} id={product.id} />
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </>
        </div>
    )
}

export default PapularProducts
