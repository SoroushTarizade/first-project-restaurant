import React from 'react';

const Header = () => {
    return (
        <>
    <header className="section__container header__container">
        <div className="header__images">
            <div  className="images">
                <img data-aos="fade-up" src="./images/header.png" alt="header" />
            </div>
            <div className="header__images__footer">
                <img className='header__image__footer-img' src="./images/customer-1.jpg" alt="user" />
                <p>It delivers convenience and flavor with lightning-fast delivery</p >
            </div>
        </div>
        <div data-aos="fade-up"  className="header__content">
            <div data-aos="fade-up"  className="header__top">
                <span><img src="./images/header.png" alt="header" /></span>
                <h2>Eat Healthy,Stay Healthy</h2>
            </div>
            <h1>Be The <span>First</span> Delivery & Easy Pick Up</h1>
            <p>
                Be the first delivery & easy pick-up
                options designed to save your time and satisfy your cravings
            </p>
            <div className="header__btns">
                <button className="btn">
                    Order Now
                    <span><i className="ri-arrow-right-line"></i></span>
                </button>
                <button className="btn">
                    Book A Table
                </button>
            </div>
            <div className="header__flex">
                <div className="header__card">
                    <img src="./images/header_content-1.jpg" alt="header__content" />
                    <h4>Chicken Biryani</h4>
                </div>
                <div className="header__card">
                    <img src="./images/header_content-2.jpg" alt="header__content" />
                    <h4>Handi Mutton</h4>
                </div>
                <div className="header__card">
                    <img src="./images/header_content-3.jpg" alt="header__content" />
                    <h4>kala Bhuna</h4>
                </div>
            </div>
        </div>
    </header>
            
        </>
    );
}

export default Header;
