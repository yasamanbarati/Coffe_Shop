import React,{Fragment} from 'react';
import SliderProductsItem from './SliderProductsItem';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Scrollbar, Navigation, Pagination  } from "swiper";
import './SliderProducts.css';

const SliderProducts = () => {

    return (
        <Fragment>
            <div className='container ProductsSlider'>
                <Swiper
                loop={true}
                grabCursor={true}
                keyboard={{
                  enabled: true,
                }}
                navigation={true}
                scrollbar={true}
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
                >
                    <SwiperSlide  className="ProductsSlider_slide">
                    <SliderProductsItem  className="ProductsSlider_slide_item" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <SliderProductsItem />
                    </SwiperSlide>
                    <SwiperSlide>
                    <SliderProductsItem />
                    </SwiperSlide>
                </Swiper>
            </div>
        </Fragment>
    ) ;
}

export default SliderProducts;