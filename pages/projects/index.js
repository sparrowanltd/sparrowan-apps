import SwiterProjects from "@/components/shared/SwiterProjects";
import styles from '../../styles/projects.module.css'
import Head from "next/head";
import Image from "next/image";
import Ellipse3 from '../../assets/Ellipse3.png'
import Ellipse6 from '../../assets/Ellipse6.png'
export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <main className={`${styles.bannerBg}`}>
                <div className={`${styles.centerContect}`}>
                    <div className={`${styles.centerContectbg}`}>
                        <h1>Our Projects</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis purus ut volutpat tellus platea tellus.</p>


                    </div>

                </div>

            </main>
            <div className={`${styles.bannerSwiter}`}>
                <SwiterProjects />
            </div>
            {/* background image handel  */}
            <div className={`${styles.bannerTopRight}`}>
                <Image src={Ellipse3} width={100} height={100} alt="Images" className="w-[300px]" />
            </div>
            <div className={`${styles.bannerbottomLeft}`}>
                <Image src={Ellipse6} width={100} height={100} alt="Images" className="w-[300px]" />
            </div>








            {/*  <div className={`${styles.bannerSwiter}`}>
                <SwiterProjects />
            </div> */}
            {/*  <main  className="p-5 md:p-10 lg:p-20">
                <SwiterProjects />
            </main> */}
        </>
    )
}

