import React, { Fragment, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NewsBoxSlider_item from './NewsBoxSlider_item';

const newsSlider = [
    {
        id: 'n1',
        image: 'https://i.picsum.photos/id/312/3888/2592.jpg?hmac=Lk5n0q19XuicLgvYPdAr5iML0VbkEADyqgJoHH_5nAs',
        date: '14.12.2021',
        title: 'Lorem ipsum',
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
        id: 'n2',
        image: 'https://i.picsum.photos/id/326/4928/3264.jpg?hmac=lJA_LBhuSUZpPbFFE6vjjSjIWzpaqjZpR9vV9MkZfJw',
        date: '4.12.2021',
        title: 'Lorem ipsum',
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
];
const NewsBoxSlider = () => {

    const [NewsBox, setNewsBox] = useState(newsSlider);

    return (
        <Fragment>
            <Swiper
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                slidesPerGroup={2}
                loop={true}
                loopFillGroupWithBlank={true}
                className="mySwiper"
            >
                {NewsBox.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <NewsBoxSlider_item NewsInfo={item} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Fragment>
    );
}

export default NewsBoxSlider;
