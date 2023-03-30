import React, { } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from '../../styles/founderSwiter.module.css'
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import shawon from '../../assets/shawon.png'
import kobir from '../../assets/kobir.png'
import Image from "next/image";
import { RiFacebookCircleFill } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle, AiOutlineMail, AiFillStar } from "react-icons/ai";

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
            clickable: true
          }
        }
        loop={true}
        modules={[Mousewheel, Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiperslide}>
          <section className={`w-[80%] mx-auto  p-10 rounded-xl ${styles.profileshadow}`}>
            <div className="flex justify-start items-start gap-10">
              <div data-aos="fade-right" className={`w-[300px] h-fit rounded-xl shadow-[15px_rgba(0,0,0,0.3) ]`}>
                <Image className="object-fill h-48 w-96  rounded-xl" src={shawon} width={100} height={100} priority alt="Images" />
              </div>
              <div data-aos="fade-left">
                <h1 className="text-2xl font-bold ">Tauhidur Rahman Shawon</h1>
                <p className="text-md">Director Commercial of Sparrowan Limited.</p>
                <div className="grid gird-col-1 gap-1 mt-3">
                  <div className="flex justify-start items-center gap-6">
                    <RiFacebookCircleFill className="text-xl" />
                    <p className="text-sm">Facebook</p>
                  </div>
                  <div className="flex justify-start items-center gap-6">
                    <TiSocialLinkedinCircular className=" text-xl" />

                    <p className="text-sm">Linkedin</p>
                  </div>
                  <div className="flex justify-start items-center gap-6">
                    <AiFillTwitterCircle className=" text-xl" />
                    <p className="text-sm">Twitter</p>
                  </div>
                  <div className="flex justify-start items-center gap-6">
                    <AiOutlineMail className="text-xl" />
                    <p className="text-sm">shawon@sparrowan.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-xl ">Details :</h1>
              <p className="text-sm">
                Md Tauhidur Rahman Shawon is the Director Commercial of Sparrowan Limited. He worked as a customer service reprasentative for over 5 Years in Group Four Securicor, Wilson James Limited under AEG LIVE at The O2 Arena in the United KIngdom. After achieving some degrees in computer science and management studies, he returned to Bangladesh and started working in different companies at management positions.

                He is responsible for overseeing the organization's commercial operations, developing and implementing strategies to drive revenue growth, and managing relationships with customers and partners.

              </p>
              <h1 className="text-xl  mt-4">Membership :</h1>
              <div>
                <ul className="text-sm">
                  <li className="flex items-center gap-2 ">
                    <AiFillStar />
                    Intellectual Property Association of Bangladesh (IPAB)
                  </li>
                  <li className="flex items-center gap-2 ">
                    <AiFillStar />
                    EMK Center, Dhaka.
                  </li>
                </ul>
              </div>
            </div> </section>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <section className={`w-[80%] mx-auto  p-10 rounded-xl ${styles.profileshadow}`}>
            <div className="flex justify-start items-start gap-10">
              <div data-aos="fade-right" className={`w-[300px] h-fit rounded-xl shadow-[15px_rgba(0,0,0,0.3) ]`}>
                <Image className="object-fill h-48 w-96  rounded-xl" src={kobir} width={100} height={100} priority alt="Images" />
              </div>
              <div data-aos="fade-left">
                <h1 className="text-2xl font-bold ">MD SHAMSUL KABIR</h1>
                <p className="text-md">Director, Legal & Corporate Affairs.</p>
                <div className="grid gird-col-1 gap-1 mt-3">
                  <div className="flex justify-start items-center gap-6">
                    <RiFacebookCircleFill className="text-xl" />
                    <p className="text-sm">Facebook</p>
                  </div>
                  <div className="flex justify-start items-center gap-6">
                    <TiSocialLinkedinCircular className=" text-xl" />

                    <p className="text-sm">Linkedin</p>
                  </div>
                  <div className="flex justify-start items-center gap-6">
                    <AiFillTwitterCircle className=" text-xl" />
                    <p className="text-sm">Twitter</p>
                  </div>
                  <div className="flex justify-start items-center gap-6">
                    <AiOutlineMail className="text-xl" />
                    <p className="text-sm">kabir@sparrowan.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-xl ">Details :</h1>
              <p className="text-sm">
              Kabir is a WIPO (World Intellectual Property Organization) certified IP attorney in Bangladesh, having more than 8 years of professional experience in corporate law and regulatory affairs including 4.5 years in KPMG Bangladesh. He has expertise in drafting patents, filing IP registration, drafting contracts and agreements including memorandum and articles of association, vetting documents, entity registration, business licensing, corporate governance and company secretarial services. He has been trained on data privacy, teambuilding, emotional intelligence, coaching & mentoring, social leadership, labour laws, WASH, PSEA, FIELD Program and so on. Kabir has been serving numerous national and multinational corporate giants with a consistent reputation over the years

              </p>
              <h1 className="text-xl  mt-4">Membership :</h1>
              <div>
                <ul className="text-sm">
                  <li className="flex items-center gap-2 ">
                    <AiFillStar />
                    Intellectual Property Association of Bangladesh (IPAB)

                  </li>
                  <li className="flex items-center gap-2 ">
                    <AiFillStar />
                    International Association for the Protection of Intellectual Property (AIPPI, Switzerland)

                  </li>
                  <li className="flex items-center gap-2 ">
                    <AiFillStar />
                    EMK Center, Dhaka


                  </li>
                  <li className="flex items-center gap-2 ">
                    <AiFillStar />
                    WIPO Academy, Geneva, Switzerland


                  </li>
                </ul>
              </div>
            </div> </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

