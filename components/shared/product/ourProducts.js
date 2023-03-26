import Image from "next/image";
import styles from '../../../styles/Home.module.css'
import Text from "../text/Text";
import Ellipse from '../../../assets/Ellipse2.png'
import Vector1 from '../../../assets/Vector1.png'
import homeDoct from '../../../assets/homeDoct.png'
import pc from '../../../assets/imagepc.png'
import OurCards from "./ourCard";
import Button from "../button/Button";
export default function OurProducts() {
    return (
        <>
            <main className="mt-20 dark:text-white text-black">
                <section>
                    <div className="flex justify-center  items-center">
                        <div className="flex justify-center items-center flex-wrap gap-2">
                            <h1 className=" text-4xl font-bold">Our</h1>
                            <h1 className="text-[#FF6B00] text-4xl font-bold">Products</h1>
                        </div>
                        <div className="z-[-1]">
                            <Image className={`ml-[-20px]`} src={Ellipse} width={100} height={100} alt="" />

                        </div>
                    </div>
                    {/* =============== content are  ===============  */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 mt-10 relative">
                        <div className="col-span-7 md:col-span-5  p-4 text-sm  mx-auto">
                            <div className="w-100 mx-auto text-center lg:text-start lg:flex">
                                <div className="lg:rotate-90 lg:ml-[-115px] ">
                                    <div className="flex justify-center items-center  gap-2">
                                        <h1 className="text-[#FF6B00] text-4xl font-bold">5+</h1>
                                        <h1 className=" text-4xl font-bold">Products</h1>
                                    </div>

                                </div>
                                <p>
                                    Buy Affordable Software Products to meet your wants. We innovate and enhance your digital recognition with sustainable and adaptable solutions in every possible way! Find your desirable products from here.
                                </p>
                            </div>
                        </div>
                        <OurCards
                            bgColor='bg-[#A6CEE3]'
                            cols="col-span-7"
                            title="ERP Solution"
                            paragraph="ERP software is a management system that connects apps to assist businesses in enhancing their operations, communication, and cooperation. Sales, order processing, finance, human resources, planning, manufacturing, inventory, procurement, and other activities are all streamlined by an ERP software system."
                            image={pc}
                            positionImages={homeDoct}
                        />
                      

                    </div>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-10">
                    <OurCards
                        bgColor='bg-[#1F78B4]'
                        title="GYM Apps"
                        paragraph="There’s more to health than fitness. While you’ll find a ton of new ways to get active, like AntiGravity Fitness, barre, and HIIT, you’ll get so much more than that.
                        Enjoy contemporary food and drink at the Catalyst Restaurant & Lounge, connect with friends in our social lounge, or quiet your mind in a meditation pod. Altea Active is here for all of you."
                        image={pc}
                    />
                    <OurCards
                        bgColor='bg-[#7879F1]' 
                        title="Yoga Apps"
                        paragraph="There’s more to health than fitness. While you’ll find a ton of new ways to get active, like AntiGravity Fitness, barre, and HIIT, you’ll get so much more than that.
                        Enjoy contemporary food and drink at the Catalyst Restaurant & Lounge, connect with friends in our social lounge, or quiet your mind in a meditation pod. Altea Active is here for all of you."
                        image={pc}
                    />
                </section>
                {/*  */}
                <div className="flex justify-center items-center mt-20 text-white">
                    <Button
                        buttonwidth="w-[300px]"
                        title="More Products"
                        color="white"
                        bgColor={"bg-[#FF6B00]"}
                        positin="justify-around"
                        icon={Vector1}
                        link="/home"
                    // extra=".."
                    />
                </div>
            </main>

        </>
    )
}
