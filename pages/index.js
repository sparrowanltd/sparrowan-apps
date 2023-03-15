/* marius-masalar-CyFBmFEsytU-unsplash 1.png */
import Button from "@/components/shared/button/Button";
import icon from '../assets/Vector2.png';
import Link from "next/link";
import SwiperSlideContent from "@/components/shared/SwiperSlide";

export default function Home() {
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
      <SwiperSlideContent/>
    </>
  )
}
