import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import Link from "next/link";
import Image from "next/image";

export default function SwiperSlideContent({ item, direction, deretion, slideInfo }) {

    return (
        <>
            <Swiper
                slidesPerView={item}
                autoplay={{
                    delay: deretion,
                    disableOnInteraction: true,
                    reverseDirection: direction,
                    pauseOnMouseEnter: true,

                }}
                modules={[Autoplay]}
            >
                {
                    slideInfo?.map(data => {
                        return (
                            <SwiperSlide key={data?._id} className="">
                                <Link href='/'>
                                    <Image src={data?.icon} width="100" height="100" alt="imges" />
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </>
    );
}


