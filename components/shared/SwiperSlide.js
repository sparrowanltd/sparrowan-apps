import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,EffectCoverflow, Pagination, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";

import Link from "next/link";
import Image from "next/image";

export default function SwiperSlideContent({ item, direction, deretion, slideInfo, review }) {

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
                breakpoints={{
                    // when window width is >= 640px
                    320: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: item,
                    },
                }}

            >
                {
                    !review && slideInfo?.map(data => {
                        return (
                            <SwiperSlide key={data?._id} >
                                <Link href='/'>
                                    <Image src={data?.icon} className="mx-auto" width="100" height="100" alt="imges" />
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            {
                review && <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={4}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: deretion,
                        disableOnInteraction: true,
                        reverseDirection: direction,
                        pauseOnMouseEnter: true,
    
                    }}
                    modules={[EffectCoverflow,Autoplay]}
                >
                  {  slideInfo?.map(data => {
                        return (
                            <SwiperSlide key={data?._id}>
                                <div className="bg-white rounded-lg  p-6 review_section w-[300px]">
                                    <div className="items-center mb-4">
                                        <img
                                            className="w-12 h-12 rounded-full mx-auto"
                                            src="https://via.placeholder.com/150"
                                            alt="Profile"
                                        />
                                        <div className="text-center my-4">
                                            <p className="font-bold text-lg">John Doe</p>
                                            <p className="text-gray-500 text-sm">5 stars</p>
                                        </div>
                                    </div>
                                    <p className="text-center text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor velit
                                        vel diam vulputate, nec ultricies velit pellentesque. Sed eu nibh vel
                                        mauris finibus dictum.
                                    </p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            }








            {/*  {
                    review && 
                } */}
        </>
    );
}


