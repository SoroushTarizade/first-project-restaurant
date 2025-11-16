"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HowworksClient = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    return (
        <>
         
    <section className="service" id="service">
        <div className="section__container service__container">
            <h2 className="section__header">How Does It <span>Works</span></h2>
            <div className="service__grid">
                <div className="service__card">
                    <div>
                        <img src="./images/service-1.png" alt="service" />
                    </div>
                    <h4>Chose Your Meals</h4>
                    <p>
                        Browse through delicious menu filled with a variety of dishes and select your favorites efforlessly to satisfy your cravings.
                    </p>
                    <a href="#">
                        Read More!
                        <span><i className="ri-arrow-right-line"></i></span>
                    </a>
                </div>
                <div className="service__card">
                    <div>
                        <img src="./images/service-2.png" alt="service" />
                    </div>
                    <h4>Chose Your Meals</h4>
                    <p>
                        Keep an eye on your meal with realtime updates from the kitchen to your location, ensuring a seamless and transparent experience.
                    </p>
                    <a href="#">
                        Read More!
                        <span><i className="ri-arrow-right-line"></i></span>
                    </a>
                </div>
                <div className="service__card">
                    <div>
                        <img src="./images/service-3.png" alt="service" />
                    </div>
                    <h4>Chose Your Meals</h4>
                    <p>
                        Experience ultimate convenience with easy pick-up options or doorstep delivery, bringing your favorite meals straight to you.
                    </p>
                    <a href="#">
                        Read More!
                        <span><i className="ri-arrow-right-line"></i></span>
                    </a>
                </div>
                        
            </div>
        </div>
    </section>

    <section className="banner" id="cart">
        <div className="section__container banner__container">
            <div className="banner__image">
                <img data-aos="fade-left" src="./images/banner.jpg" alt="banner" />
            </div>
            <div className="banner__content">
                <h2 className="section__header">
                    Eat. Healthy,Stay <span>Healthy</span>
                </h2>
                <p>At Food Plaza, we believe that good food is the foundation of a healthy life. Our meals are crafted with fresh ingredients and balanced nutrition, helping you maintain a healthy lifestyle while enjoying delicious flavors.</p>
                <div className="banner__btn">
                    <button className="btn">
                        Read More!
                    </button>
                    <span></span>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}
export default HowworksClient;
