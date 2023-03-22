import Button from "@/components/shared/button/Button";
import icon from '../assets/Vector2.png';
import xmVhugy5mnBZgI7ie from '../assets/1__xmVhugy5mnBZgI7ie295w.png';
import AAA from '../assets/AAA-logo-2021-ENG-transparent.png';
import iso from '../assets/iso-certified.png';
import certificate from '../assets/certificate-logos-2-05.png';
import naid from '../assets/naid.png';
import stodio1 from '../assets/stodio1.png';
import stodio2 from '../assets/stodio2.png';
import stodio3 from '../assets/stodio3.png';
import stodio4 from '../assets/stodio4.png';
import stodio5 from '../assets/stodio5.png';
import stodio6 from '../assets/stodio6.png';
import stodio7 from '../assets/stodio7.png';
import stodio8 from '../assets/stodio8.png';
import stodio9 from '../assets/stodio9.png';
import stodio10 from '../assets/stodio10.png';
import Link from "next/link";
import SwiperSlideContent from "@/components/shared/SwiperSlide";
import OurProducts from "@/components/shared/product/ourProducts";
import Partners from "@/components/shared/Clients/Partners";
import Studio from "@/components/shared/Studio";
import OurServices from "@/components/shared/services/OurServices";
import DegitalMarketing from "@/components/shared/degitalMarketing/DegitalMarketing";
import Technologies from "@/utils/technologies/Technologies";
import TechnologiesCard from "@/utils/technologies/TechnologiesCard";
import Review from "@/components/shared/Clients/Review";
import Image from "next/image";
/* Studio */

export default function Home() {

  const slideInfo = [
    {
      _id: 1,
      link: "/",
      icon: xmVhugy5mnBZgI7ie,
    },
    {
      _id: 2,
      link: "/",
      icon: AAA,
    },
    {
      _id: 3,
      link: "/",
      icon: iso,
    },
    {
      _id: 4,
      link: "/",
      icon: certificate,
    },
    {
      _id: 5,
      link: "/",
      icon: naid,
    },

    {
      _id: 7,
      link: "/",
      icon: xmVhugy5mnBZgI7ie,
    },
    {
      _id: 8,
      link: "/",
      icon: AAA,
    },
    {
      _id: 9,
      link: "/",
      icon: iso,
    },
    {
      _id: 10,
      link: "/",
      icon: certificate,
    },
    {
      _id: 11,
      link: "/",
      icon: naid,
    },
  ]
  const slideInfos = [
    {
      _id: 1,
      link: "/",
      icon: stodio1,
    },
    {
      _id: 2,
      link: "/",
      icon: stodio2,
    },
    {
      _id: 3,
      link: "/",
      icon: stodio3,
    },
    {
      _id: 4,
      link: "/",
      icon: stodio4,
    },
    {
      _id: 5,
      link: "/",
      icon: stodio5,
    },
    {
      _id: 6,
      link: "/",
      icon: stodio6,
    },
    {
      _id: 7,
      link: "/",
      icon: stodio7,
    },
    {
      _id: 8,
      link: "/",
      icon: stodio8,
    },
    {
      _id: 9,
      link: "/",
      icon: stodio9,
    },
    {
      _id: 10,
      link: "/",
      icon: stodio10,
    },
  ]

  return (
    <>
      {/* <main className="banner_bg_imges">
        <section className="banner_bgbler_imges">
          <div className="px-5 md:px-20 pt-[100px] md:pt-[166px] text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Sparrowan LLC <sapn className="text-[#FF6B00]">.</sapn></h1>
            <h2 className="my-[34px] font-semibold text-[#FF6B00]">Tune your technology</h2>
            <p className="mb-[66px]">
              Design & develop intelligent, innovative and sustainable technology <br /> solutions and services on multiple platforms.
            </p>
            <Button
              buttonwidth="w-[280px]"
              title="Start a Project"
              color="white"
              bgColor={"banner_button"}
              positin="justify-around"
              icon={icon}
              link="/home"
            // extra=".."
            />
          </div>
        </section>
      </main> */}

      <section className="p-5 md:p-20">
        <marquee>
          <div className="flex gap-10">
            {

              slideInfo?.map(data => <Image src={data?.icon} width={100} height={100} alt="imges" />)
            }
          </div>
        </marquee>
      </section>
      {/*  our products handle  */}
      <section className="mb-10">
        <OurProducts />
      </section>
      <section className="p-5 md:p-20">
        <Studio slideInfo={slideInfos} />
      </section>
      <section>
        <OurServices />
      </section>
      <section className="p-5 md:p-20">
        <Partners item={5} deretion={2000} slideInfo={slideInfo} />
      </section>
      <section className="p-5 md:p-20">
        <DegitalMarketing />
      </section>
      <section className="bg-[#fff]">
        <Technologies />
      </section>
      {/*  review secton bad  */}
      <section
        className="p-5 md:p-20"
      >
        <Review item={3} deretion={2000} slideInfo={slideInfo} />
      </section>
      {/* 
      Skeleton 
      
      */}


    </>
  )
}
