"use client"

import React, { useRef, useState, useEffect, useContext } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper/modules";
import { FreeMode, Pagination } from "swiper/modules";

import CarocelComponent from "./CarocelComponent";



const Carosel = ({albums}) => {

    


  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, FreeMode, Pagination]}
        className="mySwiper"
      >
        {albums.map((album) => (
          <SwiperSlide key={album.id}>
            <CarocelComponent img={album.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carosel;
