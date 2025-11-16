"use client";
import React from 'react';
import CustommerSwip from '@/components/templates/index/custumer/CustommerSwip';
import dynamic from "next/dynamic";
const Customer = () => {
    return (
        <>
         
    <section className="section__container customer__container">
        <div className="customer__image">
            <img src="./images/customer.png" alt="customer" />
        </div>
        <div className="customer__content">
            <h2 className="section__header">Customers <span>Reaction</span></h2>

{/* <!-- Slider main container --> */}
<div className="swiper">
  {/* <!-- Additional required wrapper --> */}
  <div className="swiper-wrapper">
        <CustommerSwip></CustommerSwip>
    {/* <!-- Slides --> */}
  </div>

  {/* <!-- If we need navigation buttons --> */}
</div>
        </div>
    </section>   
        </>
    );
}

export default Customer;
