import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from '../../styles/founderSwiter.module.css'
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
export default function FounderSwiter() {
  return (
    < >
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={
        {
          clickable:true
        }
        }
        loop={true}
        modules={[Mousewheel, Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiperslide}>
          
        </SwiperSlide>
      </Swiper>
    </>
  );
}

