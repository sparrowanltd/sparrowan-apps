import Button from "@/components/shared/button/Button";
import icon from '../assets/Vector2.png';
import xmVhugy5mnBZgI7ie from '../assets/1__xmVhugy5mnBZgI7ie295w.png';
import AAA from '../assets/AAA-logo-2021-ENG-transparent.png';
import iso from '../assets/iso-certified.png';
import certificate from '../assets/certificate-logos-2-05.png';
import naid from '../assets/naid.png';
import unnamed from '../assets/unnamed.png';
import Link from "next/link";
import SwiperSlideContent from "@/components/shared/SwiperSlide";

export default function Home() {

  const slideInfo = [
    {
      link: "/",
      icon: xmVhugy5mnBZgI7ie,
    },
    {
      link: "/",
      icon: AAA,
    },
    {
      link: "/",
      icon: iso,
    },
    {
      link: "/",
      icon: certificate,
    },
    {
      link: "/",
      icon: naid,
    },
    {
      link: "/",
      icon: unnamed,
    },
    {
      link: "/",
      icon: xmVhugy5mnBZgI7ie,
    },
    {
      link: "/",
      icon: AAA,
    },
    {
      link: "/",
      icon: iso,
    },
    {
      link: "/",
      icon: certificate,
    },
    {
      link: "/",
      icon: naid,
    },
    {
      link: "/",
      icon: unnamed,
    },
  ]

  return (
    <>
      <main className="banner_bg_imges">
        <section className="banner_bgbler_imges">
          <div className="px-20 pt-[166px] text-white">
            <h1 className="text-5xl font-bold">Sparrowan LLC <sapn className="text-[#FF6B00]">.</sapn></h1>
            <h2 className="my-[34px] font-semibold text-[#FF6B00]">Tune your technology</h2>
            <p className="mb-[66px]">
              Design & develop intelligent, innovative and sustainable technology <br /> solutions and services on multiple platforms.
            </p>
            <Button
              buttonwidth="w-[300px]"
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
      </main>
      <section className="p-20">
        <SwiperSlideContent item={7} deretion={1000} slideInfo={slideInfo} />
      </section>

    </>
  )
}
