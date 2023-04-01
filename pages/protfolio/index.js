import ProtfolioBanner from "@/utils/pages/protfolio/protfolioBanner";
import SeePostCard from "@/utils/pages/protfolio/seePostCard";
import leftArrow from '../../assets/Vector1.png'
import support from '../../assets/support.png'
import supportDark from '../../assets/supportDark.png'
import styles from '../../styles/protfolio.module.css'
import Head from "next/head";
import ProtfolioSeeCard from "@/components/shared/ProtfolioSeeCard";
import Image from "next/image";
import TeamSkeleton from "@/utils/skeleton/TeamSkeleton";
import FounderSwiter from "@/components/shared/FounderSwiter";
import Founder from "@/utils/pages/protfolio/founder";
export default function Protfolio() {
    return (
        <>
            <Head>
                <title>Protfolio</title>
            </Head>
            <main className="">
                <ProtfolioBanner />
                {/* ============== see our post  ==============  */}
                <div className="p-5 md:p-10 xl:p-20">
                    <div className="text-center">
                        <div >
                            <span className="text-[#FF6B00] bg-[#FFE1CC] py-2 px-3 font-bold">Our Blog</span>
                        </div>
                        <h1 className="my-8 text-xl md:text-4xl font-bold">Let’s See Our <span className="text-[#FF6B00]">Posts</span></h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className={`my-20 ${styles.seePostcard_main}  mx-auto`}>
                        <div className={`${styles.seePostcard_bg_styles}`}>

                        </div>
                        <ProtfolioSeeCard />
                    </div>
                </div>
                {/* ============== Our Team ==============  */}
                <div className="p-5 md:p-10 xl:p-20 bg-[#FFF6EE]">
                    <div >
                        <span className="text-[#FF6B00] bg-[#FFE1CC] py-2 px-3 font-bold">Our Team Members</span>
                    </div>
                    <h1 className="my-8 text-xl md:text-4xl font-bold">Let’s Meet Our <span className="text-[#FF6B00]">Team</span></h1>
                    <div className=" md:flex  justify-between items-center gap-10 ">
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="flex justify-between items-center gap-10 px-3 py-1 text-white bg-[#FF6B00] rounded-xl ">
                            <span>View All Team Member</span>
                            <span><Image src={leftArrow} width={20} height={20} alt="icon" /> </span>
                        </button>
                    </div>
                    {/*  */}
                    <div className={`my-20 ${styles.teamCard_main}  mx-auto`}>
                        <div className={`${styles.teamCard_bg_styles}`}>

                        </div>
                        <TeamSkeleton />
                    </div>
                </div>
                {/* ============== Our FounderSwiter ==============  */}

                <div className=" p-5 md:p-10 lg:p-20 overflow-hidden">
                    {/*   <FounderSwiter /> */}
                    <Founder/>
                </div>
                {/* ============== Our support ==============  */}
                <div className="mt-10 ">
                    <div className="text-center">
                        <div >
                            <span className="text-[#FF6B00] bg-[#FFE1CC] py-2 px-3 font-bold">Let’s Suport</span>
                        </div>
                        <h1 className="my-8 text-xl md:text-4xl font-bold">Do you need our support for your  <span className="text-[#FF6B00]">project</span> ?</h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget congue egestas sociis tellus, donec sed at at.</p>
                    </div>
                    <div className="flex justify-between items-center gap-10 mt-10">
                        <Image className="w-[300px]" src={supportDark} width={100} height={100} alt="icon" />
                        <button className="px-5 py-2 text-white bg-[#FF6B00] rounded-xl ">
                            <span>Contact Us</span>
                        </button>
                        <Image className="w-[300px]" src={support} width={100} height={100} alt="icon" />

                    </div>
                </div>

            </main>
        </>
    )
}

