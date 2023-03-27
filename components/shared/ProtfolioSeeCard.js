import React, { } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import SeePostCard from "@/utils/pages/protfolio/seePostCard";
export default function ProtfolioSeeCard() {

    return (
        <>
            <Swiper
                slidesPerView={3}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                modules={[Autoplay]}
                breakpoints={{
                    // when window width is >= 640px
                    320: {
                        slidesPerView:1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
                    <SeePostCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SeePostCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SeePostCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SeePostCard />
                </SwiperSlide>
            </Swiper>

        </>
    );
}


