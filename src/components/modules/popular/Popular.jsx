import React from 'react';
import Link from 'next/link';
const Popular = () => {
    return (
        <>
    <section data-aos="fade-up" className="section__container menu__container">
        <h2 className="section__header">Our Popular <span>Dishes</span></h2>
        <div className="menu__grid">
            <div data-aos="fade-up"  className="menu__card">
                <img src="./images/menu-1.jpg" alt="menu" />
                <h4>Kala Bhuna</h4>
                <p>
                    A rich and flavoful slow-cooked beef dish,infused with aromatic spic es for a traditional taste.
                </p>
                <div className="menu__card__footer">
                    <h3>$50.99</h3>
                    <button className="btn">Add To Cart</button>
                </div>
            </div>
            <div data-aos="fade-up"  className="menu__card">
                <img src="./images/menu-2.jpg" alt="menu" />
                <h4>Handi Mutton</h4>
                <p>
                    A rich and flavoful slow-cooked beef dish,infused with aromatic spic es for a traditional taste.
                </p>
                <div className="menu__card__footer">
                    <h3>$75.9</h3>
                    <button className="btn">Add To Cart</button>
                </div>
            </div>
            <div data-aos="fade-up"  className="menu__card">
                <img src="./images/menu-1.jpg" alt="menu" />
                <h4>egg Curry</h4>
                <p>
                    A rich and flavoful slow-cooked beef dish,infused with aromatic spic es for a traditional taste.
                </p>
                <div className="menu__card__footer">
                    <h3>$30.99</h3>
                    <button className="btn">Add To Cart</button>
                </div>
            </div>
        </div>
        <div className="menu__btn">
            <Link href="./food/id">
            <button className="btn">
                See All Dishes
                <span><i className="ri-arrow-right-line"></i></span>
            </button>
            </Link>
        </div>
    </section>   
        </>
    );
}

export default Popular;
