"use client" ;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const CustommerSwip = () => {
    return (
    <Swiper navigation={true} autoplay={{delay:5000}} modules={[Navigation, Autoplay]} className="mySwiper" rewind="true" loop="true">
    <SwiperSlide className="swiper-slide">
        <div className="customer__card">
            <div className="customer__card__header">
                <div>Verified Purchase</div>
                <span>13 Oct 2024</span>
            </div>
            <p>
                This is my go-to choice for healthy meals on busy days. I appreciate how they balance flavor with nutrition, making it easy to stick to my healthy eating goals while still enjoying delicious food.
            </p>
            <div className="customer__card__footer">
                <img src="images/customer-1.jpg" alt="" />
                <div>
                    <h4>Sarah Jonson</h4>
                    <h5>Germany</h5>
                    <div className="customer__rating"></div>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide className="swiper-slide">
        <div className="customer__card">
            <div className="customer__card_header">
                <div>Verified Purchase</div>
                <span>13 Oct 2024</span>
            </div>
            <p>
                This is my go-to choice for healthy meals on busy days. I appreciate how they balance flavor with nutrition, making it easy to stick to my healthy eating goals while still enjoying delicious food.
            </p>
            <div className="customer__card__footer">
                <img src="images/customer-2.jpg" alt="" />
                <div>
                    <h4>Christine wo</h4>
                    <h5>Poland</h5>
                    <div className="customer__rating"></div>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide className="swiper-slide">
        <div className="customer__card">
            <div className="customer__card_header">
                <div>Verified Purchase</div>
                <span>13 Nov 2023</span>
            </div>
            <p>
                This is my go-to choice for healthy meals on busy days. I appreciate how they balance flavor with nutrition, making it easy to stick to my healthy eating goals while still enjoying delicious food.
            </p>
            <div className="customer__card__footer">
                <img src="images/customer-3.jpg" alt="" />
                <div>
                    <h4>Reyna</h4>
                    <h5>USA</h5>
                    <div className="customer__rating"></div>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-half-fill"></i></span>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <div className="customer__swiper__controls">
    <button className="btn swiper-prev">
        <i className="ri-arrow-left-line"></i>
    </button>
    <button className="btn swiper-next">
        <i className="ri-arrow-right-line"></i>
    </button>
</div>
    </Swiper>
    )
}

export default CustommerSwip;
