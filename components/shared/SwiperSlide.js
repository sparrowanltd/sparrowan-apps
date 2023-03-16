import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import Link from "next/link";
import Image from "next/image";

export default function SwiperSlideContent({ item, deretion, slideInfo }) {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}`;
    };
    return (
        <>
            <Swiper
                slidesPerView={item}
                autoplay={{
                    delay: deretion,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
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

                <div className="autoplay-progress " slot="container-end">

                    <span ref={progressCircle} className="hidden "></span>
                    <span ref={progressContent} className="hidden "></span>
                </div>

            </Swiper>
        </>
    );
}


