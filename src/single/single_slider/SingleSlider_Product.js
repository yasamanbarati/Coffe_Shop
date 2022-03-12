import React, { Fragment, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import './SingleSlider_Product.css';

const SingleSlider_Product = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Fragment>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 Slider_product"
            >
                <div className='Slider_productDiscount position-absolute'>
                    <h3>40%</h3>
                    <p>discount</p>
                </div>
                <SwiperSlide>
                    <img className='Slider_productImage' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Slider_productImage' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Slider_productImage' src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Slider_productImage' src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Slider_productImage' src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={20}
                slidesPerView={2}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper ButtonSlider mt-3 me-4"
            >
                <SwiperSlide>
                    <img className='ButtonSlider_productImage' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='ButtonSlider_productImage' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='ButtonSlider_productImage' src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='ButtonSlider_productImage' src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='ButtonSlider_productImage' src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
            </Swiper>
        </Fragment>
    );
}

export default SingleSlider_Product;