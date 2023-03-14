/* marius-masalar-CyFBmFEsytU-unsplash 1.png */
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="banner_bg_imges">
        <section className="banner_bgbler_imges">
          {/* style dive  */}
          <div className="p-20 text-white">
            <h1 className="text-5xl font-bold">Sparrowan LLC.</h1>
            <h2 className="my-[34px] font-semibold text-[#FF6B00]">Tune your technology</h2>
            <p>
            Design & develop intelligent, innovative and sustainable technology <br/> solutions and services on multiple platforms.

            </p>
            <Link href="#" className="banner_button">Start a Project</Link>
          </div>



        </section>
      </main>
    </>
  )
}
