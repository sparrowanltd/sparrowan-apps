import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
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
            >
                {
                    !review && slideInfo?.map(data => {
                        return (
                            <SwiperSlide key={data?._id} className="">
                                <Link href='/'>
                                    <Image src={data?.icon} width="100" height="100" alt="imges" />
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
                {
                    review && slideInfo?.map(data => {
                        return (
                            <SwiperSlide key={data?._id} className="">
                                <div className="bg-white rounded-lg  p-6 review_section ">
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
                    })
                }

            </Swiper>
        </>
    );
}


