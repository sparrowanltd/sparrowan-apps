import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation,Autoplay } from 'swiper';

import slide_image_1 from '../../assets/preview1.png';
import Image from 'next/image';

export default function SwiterProjects() {
    return (
        <div >
            <Swiper
                effect={'coverflow'}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}

                centeredSlides={true}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                }}
                style={{ 'swiper-navigation-color': 'red' }}
                breakpoints={{
                    // when window width is >= 640px
                    320: {
                        slidesPerView: 1.2,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                    },
                }}


                modules={[EffectCoverflow,Autoplay, Pagination, Navigation]}

            >
                <SwiperSlide>
                    <Image src={slide_image_1} width={100} height={100} alt="slide_image" className='w-[600px] rounded-2xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide_image_1} width={100} height={100} alt="slide_image" className='w-[600px] rounded-2xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide_image_1} width={100} height={100} alt="slide_image" className='w-[600px] rounded-2xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide_image_1} width={100} height={100} alt="slide_image" className='w-[600px] rounded-2xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide_image_1} width={100} height={100} alt="slide_image" className='w-[600px] rounded-2xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide_image_1} width={100} height={100} alt="slide_image" className='w-[600px] rounded-2xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide_image_1} width={100} height={100} alt="slide_image" className='w-[600px] rounded-2xl' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

