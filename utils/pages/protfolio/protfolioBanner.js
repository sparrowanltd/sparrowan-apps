import Image from "next/image";
import rightImagesButtom from "../../../assets/Ellipse5.png";
import styles from '../../../styles/protfolio.module.css'
import rightImagesDots from "../../../assets/dots1.png";
import imageContect from "../../../assets/stodio7.png"
import Polygon2 from "../../../assets/Polygon2.png"
import line from "../../../assets/Line90.png"
import dotswhite from "../../../assets/dotswhite.png"
export default function ProtfolioBanner() {
    return (
        <main className={`${styles.protfolioBanner_main}`}>
            <div className="py-2">
                <h1 className="text-center font-bold text-[#FF6B00] text-4xl">Portfolio</h1>
                <Image src={line} width={100} height={100} alt="imges" className="mx-auto" />
            </div>
            <div className={`${styles.rightImages}`}>
                <div>
                    <Image src={rightImagesDots} width={80} height={50} alt="imges" className="ml-10" />
                </div>
            </div>
            <div className={`${styles.rightImagesButtom}`}>
                <Image src={rightImagesButtom} width={100} height={100} alt="imges" className="" />
            </div>
            <div className={`${styles.polygon_position}`}>
                <Image src={Polygon2} width={100} height={100} alt="imges" className={`${styles.polygon_handel}`} />
                <div className={`${styles.polygon_contect}`}>
                    <div className="flex items-center gap-5">
                        <div className="">
                            <Image src={imageContect} width={100} height={100} alt="imges"  className={`${styles.polygon_contect_img}`} />
                            <br />
                            <Image src={imageContect} width={100} height={100} alt="imges" className={`${styles.polygon_radius}`} />

                        </div>
                        <Image src={imageContect} width={100} height={100} alt="imges"  className={`${styles.polygon_contect_img}`}  />
                    </div>
                    <div className={`${styles.experience}`}>
                        <div className="text-center">
                            <span className="text-center text-[#FF6B00] text-sm font-bold ">20+ <br />Years <br />Experience</span>
                        </div>
                    </div>
                    <div className={`${styles.polygon_img_Index}`}>
                        <Image src={rightImagesDots} width={80} height={80} alt="imges" />
                    </div>
                    <div className={`${styles.polygon_img_Index_start}`}>
                        <Image src={dotswhite} width={80} height={80} alt="imges" className="w-20"/>
                    </div>

                </div>
            </div>

        </main>
    )
}