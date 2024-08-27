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
import { Link } from 'react-router-dom';
const SuggestionProducts = () => {

    const bestSelerData = useSelector(state => state.products.products);

    // bestSelerData.sort((a, b) => b.rating - a.rating);
    // bestSelerData.sort((a, b) => b.price - a.price);
    // bestSelerData.sort((a, b) => new Date(b.date) - new Date(a.date));
    // bestSelerData.sort((a, b) => b.price - a.price);
    // bestSelerData.sort((a, b) => b.price - a.price);
    // bestSelerData.sort((a, b) => b.rating - a.rating);
    // bestSelerData.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className='bestSeler__box suggestion__slider ' >
            <Title title=" محصولات پیشنهادی " route="/ProductPage" />
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
                                <div className='bestSeler__item'>
                                    <img className='bestSeler__img' src={product.img} alt={product.name} />
                                    <div className='bestSeler__info'>
                                        <h4 className='bestSeler__title' >{product.title}</h4>
                                        <p className='bestSeler__desc' >{product.description}</p>
                                        <p className='bestSEler__price' >{product.price} تومان</p>
                                        <Link className="bestSeler__btn" to={`/ProductDetail/${product.id}`}> مشاهده محصول </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </>
        </div>
    )
}

export default SuggestionProducts
