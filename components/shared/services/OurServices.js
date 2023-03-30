import Image from "next/image";
import Text from "../text/Text";
import Application from '../../../assets/mobile-application1.png'
import { AiOutlineArrowRight } from "react-icons/ai";
import ServiceCard from "./ServiceCard";
export default function OurServices() {
    return (
        <main className=" p-5 md:p-20 dark:text-white text-black">
            <Text position="flex" title={[{ text: "Our" }, { text: "Services", color: "FF6B00" }]} />
            {/*  ============  service card styles ============  */}
            <section className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-16 mt-10">
                <div className=" bg-[#000] text-center p-2 rounded-md text-white service_section p-10">
                    <div className="flex justify-between items-center  gap-10">
                        <div >
                            <span className="text-xl md:text-2xl font-bold text-[#FF6B00]">17+</span>
                            <span className="text-xl md:text-2xl font-bold ml-2 ">Services</span>
                        </div>
                        {/* <Text position="flex" title={[{ text: "17+", color: "FF6B00" },{ text: "Services"}]} /> */}
                        {/* <div className="text-start">
                            <div className="flex gap-2">
                                <h1>Services</h1>
                                <h1 className="text-[#FF6B00]">We</h1>
                            </div>
                            <h1>are provide</h1>
                        </div> */}

                    </div>
                    <p className="text-sm text-start mt-10 ">We offer end-to-end solutions for all sorts of digital products, covering everything from research to visualization</p>

                </div>
                <ServiceCard image={Application} title="Research and Development" />
                <ServiceCard image={Application} title="Web App Development" />
                <ServiceCard image={Application} title="Mobile App Development" />
                <ServiceCard image={Application} title="E-Commerce Solutions" />
                <ServiceCard image={Application} title="E-Learning" />
                <ServiceCard image={Application} title="Machine Learning & Artificial Intelligence" />
                <ServiceCard image={Application} title="Brand Strategy" />
                <ServiceCard image={Application} title="Social Media Marketing" />
                <ServiceCard image={Application} title="Search Engine Optimization" />
                <ServiceCard image={Application} title="Paid Marketing Strategy" />
                <ServiceCard image={Application} title="Influencer Marketing" />
                <ServiceCard image={Application} title="Content Marketing" />
                <ServiceCard image={Application} title="Marketing Automation" />
            </section>

            <div className="flex justify-center items-center mt-20">
                <button className="bg-[#FF6B00] px-20 py-1 font-bold rounded text-white text-xl flex items-center gap-3">
                   
                    <span>  More services</span>
                    <AiOutlineArrowRight className="text-xl font-bold" />

                </button>
            </div>
        </main>
    )
}