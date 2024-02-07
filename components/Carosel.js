"use client"

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper/modules";
import { FreeMode, Autoplay } from "swiper/modules";

import CarocelComponent from "./CarocelComponent";



const Carosel = ({albums}) => {

    


  return (
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        speed={2500}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        freeMode={true}
        modules={[Navigation, FreeMode, Autoplay]}
        className="mySwiper"
        breakpoints={{
          630: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,

          },
          810: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: true
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 20,
            centeredSlides: false,

          },
          1900: {
            slidesPerView: 6,
            spaceBetween: 20,
            centeredSlides: false,
          }

        }}
      >
        {albums.map((album) => (
          <SwiperSlide key={album._id} style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

          }}>
            <CarocelComponent img={album.image} id={album._id} />
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default Carosel;
