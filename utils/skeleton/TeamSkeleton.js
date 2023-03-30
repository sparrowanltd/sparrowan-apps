import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/swiper-bundle.css";
import styles from '../../styles/teamSkeleton.module.css'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';
import pinter from '../../assets/pinter.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import slide_image_1 from '../../assets/preview1.png';
import Image from 'next/image';
const backgroundImageUrl = slide_image_1.src;
export default function TeamSkeleton() {
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
                }}
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


                modules={[EffectCoverflow, Autoplay]}/*Pagination  Navigation */

            >
                <SwiperSlide>
                    <div
                        style={{
                            width: '400px',
                            height: '300px',
                            backgroundImage: `url(${backgroundImageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            position: 'relative',
                            borderRadius: '10px',
                        }}
                    >
                        <div className={`${styles.socalMedia}`}>
                            <div className='flex flex-row gap-5'>
                                <div className='flex justify-start items-cetnter gap-2'>
                                    <Image className='w-[20px]' src={facebook} width={100} height={100} alt="imges" />
                                    <h1 className='text-white font-bold text-sm  '>Facbook</h1>
                                </div>
                                <div className='flex justify-start items-cetnter gap-2'>
                                    <Image className='w-[20px]' src={twitter} width={100} height={100} alt="imges" />
                                    <h1 className='text-white font-bold text-sm '>Twitter</h1>
                                </div>
                                <div className='flex justify-start items-cetnter gap-2'>
                                    <Image className='w-[20px]' src={pinter} width={100} height={100} alt="imges" />
                                    <h1 className='text-white font-bold text-sm '>Website</h1>
                                </div>
                            </div>

                        </div>

                    </div>


                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            width: '400px',
                            height: '300px',
                            backgroundImage: `url(${backgroundImageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            position: 'relative',
                            borderRadius: '10px',
                        }}
                    >
                        <div className={`${styles.socalMedia}`}>
                        <div className='flex flex-row gap-5'>
                                <div className='flex justify-start items-cetnter gap-2'>
                                    <Image className='w-[20px]' src={facebook} width={100} height={100} alt="imges" />
                                    <h1 className='text-white font-bold text-sm  '>Facbook</h1>
                                </div>
                                <div className='flex justify-start items-cetnter gap-2'>
                                    <Image className='w-[20px]' src={twitter} width={100} height={100} alt="imges" />
                                    <h1 className='text-white font-bold text-sm '>Twitter</h1>
                                </div>
                                <div className='flex justify-start items-cetnter gap-2'>
                                    <Image className='w-[20px]' src={pinter} width={100} height={100} alt="imges" />
                                    <h1 className='text-white font-bold text-sm '>Website</h1>
                                </div>
                            </div>

                        </div>

                    </div>


                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            width: '400px',
                            height: '300px',
                            backgroundImage: `url(${backgroundImageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            position: 'relative',
                            borderRadius: '10px',
                        }}
                    >
                        <div className={`${styles.socalMedia}`}>
                        <div className='flex flex-row gap-5'>
                                <div className='flex justify-start items-cetnter gap-2'>
                                    <Image className='w-[20px]' src={facebook} width={100} height={100} alt="imges" />
                                    <h1 className='text-white font-bold text-sm  '>Facbook</h1>
                                </div>
                                <div className='flex justify-start items-cetnter gap-2'>
                                    <Image className='w-[20px]' src={twitter} width={100} height={100} alt="imges" />
                                    <h1 className='text-white font-bold text-sm '>Twitter</h1>
                                </div>
                                <div className='flex justify-start items-cetnter gap-2'>
                                    <Image className='w-[20px]' src={pinter} width={100} height={100} alt="imges" />
                                    <h1 className='text-white font-bold text-sm '>Website</h1>
                                </div>
                            </div>

                        </div>

                    </div>


                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            width: '400px',
                            height: '300px',
                            backgroundImage: `url(${backgroundImageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            position: 'relative',
                            borderRadius: '10px',
                        }}
                    >
                        <div className={`${styles.socalMedia}`}>
                        <div className='flex flex-row gap-5'>
                                <div className='flex justify-start items-cetnter gap-2'>
                                    <Image className='w-[20px]' src={facebook} width={100} height={100} alt="imges" />
                                    <h1 className='text-white font-bold text-sm  '>Facbook</h1>
                                </div>
                                <div className='flex justify-start items-cetnter gap-2'>
                                    <Image className='w-[20px]' src={twitter} width={100} height={100} alt="imges" />
                                    <h1 className='text-white font-bold text-sm '>Twitter</h1>
                                </div>
                                <div className='flex justify-start items-cetnter gap-2'>
                                    <Image className='w-[20px]' src={pinter} width={100} height={100} alt="imges" />
                                    <h1 className='text-white font-bold text-sm '>Website</h1>
                                </div>
                            </div>

                        </div>

                    </div>


                </SwiperSlide>


            </Swiper>
        </div>
    );
}

