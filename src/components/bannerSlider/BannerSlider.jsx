
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./bannerSlider.css"
// import required modules
import { Navigation } from 'swiper/modules';


const imageSlider = [
    { id: 3, img: "../../../public/images/b3.jpg" },
    { id: 1, img: "../../../public/images/b1.jpg" },
    { id: 2, img: "../../../public/images/b2.jpg" },
    { id: 4, img: "../../../public/images/b4.jpg" },
    { id: 5, img: "../../../public/images/b5.jpeg" },
    { id: 6, img: "../../../public/images/b6.jpg" },
]



const BannerSlider = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper bannerSlider ">

                {imageSlider.map(item => {
                    return (
                        <SwiperSlide key={item.id}>
                            <img className='bannerImage' src={item.img} alt={item.id} />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </>
    )
}

export default BannerSlider
