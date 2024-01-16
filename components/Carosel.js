"use client"

import React, { useRef, useState, useEffect, useContext } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper/modules";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { FreeMode, Pagination } from "swiper/modules";

import CarocelComponent from "./CarocelComponent";

import { HeroSectionContext } from "./Context/HeroContext";

const Carosel = () => {

    const { albums, setAlbums } = useContext(HeroSectionContext);


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
            <CarocelComponent />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carosel;
