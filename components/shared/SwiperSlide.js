import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

export default function SwiperSlideContent() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper "
            >
                <SwiperSlide>
                    <div className="w-[300px] h-[300px] bg-red-300 rounded">
                        slide 1
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[300px] h-[300px] bg-red-300 rounded">
                        slide 2
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[300px] h-[300px] bg-red-300 rounded">
                        slide 3
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[300px] h-[300px] bg-red-300 rounded">
                        slide 4
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[300px] h-[300px] bg-red-300 rounded">
                        slide 5
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[300px] h-[300px] bg-red-300 rounded">
                        slide 6
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[300px] h-[300px] bg-red-300 rounded">
                        slide 7
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[300px] h-[300px] bg-red-300 rounded">
                        slide 8
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-[300px] h-[300px] bg-red-300 rounded">
                        slide 9
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">

                    <span ref={progressCircle}></span>
                    <span ref={progressContent}></span>
                </div>

            </Swiper>
        </>
    );
}


