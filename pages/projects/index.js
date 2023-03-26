import SwiterProjects from "@/components/shared/SwiterProjects";
import styles from '../../styles/projects.module.css'
import Head from "next/head";
import Image from "next/image";
import Ellipse3 from '../../assets/Ellipse3.png'
import Ellipse6 from '../../assets/Ellipse6.png'
import doct from '../../assets/homeDoct.png'
import Text from "@/components/shared/text/Text";
import ProductCard from "@/components/shared/ProductCard";
export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <main className={`${styles.bannerBg}`}>
                <div className={`${styles.centerContect}`}>
                    <div className={`${styles.centerContectbg} `}>
                        <Text position="flex" title={[{ text: "Our", color: "000" }, { text: "Projects", color: "FF6B00" }]} />
                        <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis purus ut volutpat tellus platea tellus.</p>
                    </div>
                </div>
            </main>
            <div className={`${styles.bannerSwiter}`}>
                <SwiterProjects />
            </div>
            {/* background image handel  */}
            <div className={`${styles.bannerTopRight}`}>
                <Image src={Ellipse3} width={100} height={100} alt="Images" className="w-[300px]" />
                <div className={`${styles.bannerTopRightDoct}`}>
                    <Image src={doct} width={100} height={100} alt="Images" />

                </div>
            </div>
            <div className={`${styles.bannerbottomLeft}`}>
                <Image src={Ellipse6} width={100} height={100} alt="Images" className="w-[300px]" />
                <div className={`${styles.bannerTopLeftDoct}`}>
                    <Image src={doct} width={100} height={100} alt="Images" />

                </div>
            </div>
            {/* product show section  */}
            <section className="p-20">
                <div className="flex justify-start items-center flex-wrap gap-2 my-6 text-xl font-bold">
                    <h1 >Project</h1>
                    <h1 className="text-[#FF6B00] ">showcase</h1>
                </div>
                <div>
                    <ProductCard />
                </div>
            </section>


        </>
    )
}

