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
import dotsplan from '../assets/dotsplan.png';
import imageshelp from '../assets/imageshelp.png';
import manager from '../assets/manager-leads-meeting1.png';
import businessman from '../assets/businessman.png';
import Ellipse20 from '../assets/Ellipse20.png';
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
import Head from "next/head";
/* Studio */

export default function Home() {
  const backgroundImageUrl = "../assets/stodio6.png'";

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
      <Head>
        <title>Home</title>
      </Head>
      <main className="banner_bg_imges">
        <section className="banner_bgbler_imges">
          <div className="px-5 md:px-20 pt-[100px] md:pt-[166px] text-white">
            <h1 className="text-4xl md:text-5xl font-bold ">Our aim is to<sapn className="text-[#FF6B00]">...</sapn></h1>
            <h2 className="my-[34px] font-semibold text-[#FF6B00]">{/* Tune your technology */}</h2>
            <p className="mb-[66px]">
              create intelligent, innovative, and sustainable technology solutions and <br /> services across multiple platforms, with a strong emphasis 
              on <br /> professionalism in design and development.
              {/* Design & develop intelligent, innovative and sustainable technology <br /> solutions and services on multiple platforms. */}
            </p>
            <Button
              buttonwidth="w-[280px]"
              title="Start a Project"
              color="white"
              bgColor={"banner_button"}
              positin="justify-around"
              icon={icon}
              link="/home/startProject"
            // extra=".."
            />
          </div>
        </section>
      </main>

      <section className="p-5 md:p-20">
        <marquee>
          <div className="flex gap-10">
            {

              slideInfo?.map(data => <Image src={data?.icon} width={100} height={100} alt="imges" />)
            }
          </div>
        </marquee>
        <OurProducts />
        <Studio slideInfo={slideInfos} />
        <OurServices />
        <DegitalMarketing />

        <Technologies />
        {/* plan  */}
        <section className="w-100 h-100 relative">
          <div className="absolute top-0">
            <Image className="w-0 md:w-[150px]" src={Ellipse20} width={100} height={100} alt="imges" />
          </div>
          <div className="p-4 ">
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2	gap-5 lx:gap-10">
              <div >
                <div className="flex justify-start items-center flex-wrap gap-2 my-6">
                  <h1 className="text-[#FF6B00] text-2xl lg:text-4xl font-bold">Why</h1>
                  <h1 className=" text-2xl lg:text-4xl font-bold"> With Us</h1>
                </div>
                {/*                 <p>Delivering Great Digital Products and Building  Culture People</p>
 */}                {/* ======= help card =======  */}
                <div className="my-10 ">
                  <div className="flex gap-4 justify-start mb-10">
                    <div>
                      <Image className="w-[100px] rounded-full" src={Ellipse20} width={50} height={50} alt="imges" />
                    </div>
                    <div>
                      {/*                       <h1 className="text-sm font-bold">This is a </h1>
 */}                      <p className="text-sm">Customer focus: We are dedicated to providing exceptional customer service and support, ensuring that your experience with us is positive and productive.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-start mb-10">
                    <div>
                      <Image className="w-[100px] rounded-full" src={Ellipse20} width={50} height={50} alt="imges" />
                    </div>
                    <div>
                      {/*                       <h1 className="text-sm font-bold">This is a </h1>
 */}                      <p className="text-sm">Security: We take security seriously and implement robust measures to protect your data and systems from cyber threats.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-start mb-10">
                    <div>
                      <Image className="w-[100px] rounded-full" src={Ellipse20} width={50} height={50} alt="imges" />
                    </div>
                    <div>
                      {/*                       <h1 className="text-sm font-bold">This is a </h1>
 */}                      <p className="text-sm">Cost-effectiveness: We offer competitive pricing and work with you to develop solutions that provide value for your investment.</p>
                    </div>
                  </div>

                </div>
              </div>
              {/* help images handel   */}
              <div className="hidden md:block relative">
                <div className=" absolute top-[45%]	left-[20%]">
                  <Image className="w-[120px]" src={Ellipse20} width={100} height={100} alt="imges" />
                </div>
                <div className="absolute  top-[30%]	left-[30%] z-20">
                  <Image className="w-[240px]" src={businessman} width={100} height={100} alt="imges" />
                </div>
                <div className="absolute  top-[50%]	left-[40%] z-20">
                  <Image className="w-[240px]" src={manager} width={100} height={100} alt="imges" />
                </div>
                <div className="absolute top-10	right-20 z-10">
                  <div>
                    <Image className="w-[120px]" src={dotsplan} width={100} height={100} alt="imges" />
                  </div>
                  <div className="mt-10">
                    <Image className="w-[120px]" src={dotsplan} width={100} height={100} alt="imges" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============ help section start  ==========   */}
        <section >
          <div className="flex justify-center items-center flex-wrap gap-2 my-6">
            <h1 className=" text-4xl font-bold">Accomplishments</h1>
           {/*  <h1 className=" text-4xl font-bold p-0 m-0">plis</h1> <div>
              <h1 className="text-[#FF6B00] text-4xl font-bold">hments</h1>
            </div> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="col-span-7 md:col-span-5 flex justify-start items-center">
              <Image className="w-[50%] h-[100%]" src={imageshelp} width={100} height={100} alt="imges" />
              <div className="w-[50%] h-[100%] bg-[#FF6B00] text-center text-white p-4 flex justify-center items-center flex-wrap">
                <h1 className="text-xl md:text-2xl md:font-bold">Health Care</h1>
              </div>

            </div>
            <div className="col-span-7  flex justify-start items-center">

              <div className="w-[50%] h-[100%] bg-black text-center text-white p-4 flex justify-center items-center flex-wrap">
                <h1 className="text-xl md:text-2xl md:font-bold">Real Estate</h1>
              </div>
              <Image className="w-[50%] h-[100%]" src={imageshelp} width={100} height={100} alt="imges" />
            </div>
            <div className="col-span-7  flex justify-start items-center">

              <div className="w-[50%] h-[100%] bg-black text-center text-white p-4 flex justify-center items-center flex-wrap">
                <h1 className="text-xl md:text-2xl md:font-bold">RMG & Textile</h1>
              </div>
              <Image className="w-[50%] h-[100%]" src={imageshelp} width={100} height={100} alt="imges" />
            </div>
            <div className="col-span-7 md:col-span-5  flex justify-start items-center">

              <div className="w-[50%] h-[100%] bg-[#FF6B00] text-center text-white p-4 flex justify-center items-center flex-wrap">
                <h1 className="text-xl md:text-2xl md:font-bold">Education</h1>
              </div>
              <Image className="w-[50%] h-[100%]" src={imageshelp} width={100} height={100} alt="imges" />
            </div>


          </div>
        </section>
        {/* ============ help section ent  ==========   */}




        <Partners item={5} deretion={2000} slideInfo={slideInfo} />


      </section>



    </>
  )
}
