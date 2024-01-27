import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import { Box } from "@mui/material";
import HeroCaroselCard from "./HeroCaroselCard";

const HeroCarosel = ({ albums }) => {
  return (
    <Box
      sx={{
        height: 300,
        width: "100%",
      }}
    >
      <Swiper
        style={{ height: "100%" }}
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        speed={1500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={{
          630: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,

          },
          810: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true
          }
        }}
      >
        {albums.map((album) => {
          return (
            <SwiperSlide key={album._id}>
              <HeroCaroselCard img={album.image} title={album.title} id={album._id} />
            </SwiperSlide>
          );
        })} 
      </Swiper>
    </Box>
  );
};

export default HeroCarosel;
