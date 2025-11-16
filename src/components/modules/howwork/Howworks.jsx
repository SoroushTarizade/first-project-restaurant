"use client"; // بالای فایل
// import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import React from 'react';
// const Howworks = () => {
// const HowworksClient = dynamic(() => import("./Howworks"), { ssr: false });


// export default Howworks;


import dynamic from "next/dynamic"; // ← حتما این خط باید باشد!

const HowworksClient = dynamic(() => import("./HowworksClient"), { ssr: false });

const Howworks = () => {
  return <HowworksClient />;
};

export default Howworks;
