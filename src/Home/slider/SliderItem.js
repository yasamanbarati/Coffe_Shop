import React, { Fragment, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import Slider from './Slider';

const products = [
    {
        id: 'p1',
        star: 4,
        starNum: 11,
        name: 'coffe Point Arabica 100%',
        discount: 40,
        price: 800,
        image: 'https://i.picsum.photos/id/312/3888/2592.jpg?hmac=Lk5n0q19XuicLgvYPdAr5iML0VbkEADyqgJoHH_5nAs'
    },
    {
        id: 'p2',
        star: 3,
        starNum: 9,
        name: 'coffe Point Brazil 100%',
        discount: 30,
        price: 700,
        image: 'https://i.picsum.photos/id/326/4928/3264.jpg?hmac=lJA_LBhuSUZpPbFFE6vjjSjIWzpaqjZpR9vV9MkZfJw'
    },
    {
        id: 'p3',
        star: 4,
        starNum: 10,
        name: 'coffe Point test 100%',
        discount: 30,
        price: 700,
        image: 'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg'
    },
];


const SliderItem = () => {

    const [ProductsInfo, setProductsInfo] = useState(products);

    return (
        <Fragment>
            <div className='container'>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={"auto"}
                    modules={[Pagination, Navigation, Mousewheel, Keyboard]}
                    className="mySwiper"
                    pagination={{
                        clickable: true,
                    }}
                >
                    {ProductsInfo.map((item, index) => {
                        return (
                            <SwiperSlide>
                                <Slider product={item} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </Fragment>
    );
}
export default SliderItem