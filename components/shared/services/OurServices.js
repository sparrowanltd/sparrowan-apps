import Image from "next/image";
import Text from "../text/Text";
import Application from '../../../assets/mobile-application1.png'
import ServiceCard from "./ServiceCard";
export default function OurServices() {
    return (
        <main className="bg-[#000000] p-5 md:p-20">
            <Text position="flex" title={[{ text: "Our" }, { text: "Services", color: "FF6B00" }]} />
            {/*  ============  service card styles ============  */}
            <section className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-16 mt-10">
                <div className=" bg-[#000] text-center p-2 rounded-md text-white service_section p-10">
                    <div className="flex justify-between items-center  gap-10">
                        <Text position="flex" title={[{ text: "17+", color: "FF6B00" }]} />
                        <div className="text-start">
                            <div className="flex gap-2">
                                <h1>Services</h1>
                                <h1 className="text-[#FF6B00]">We</h1>
                            </div>
                            <h1>are provide</h1>
                        </div>

                    </div>
                    <p className="text-sm text-start mt-10 ">We provide complete solution of your digital products from research to vision.</p>

                </div>
                <ServiceCard image={Application} title="Web Application" />
                <ServiceCard image={Application} title="Web Application" />
                <ServiceCard image={Application} title="Web Application" />
                <ServiceCard image={Application} title="Web Application" />
                <ServiceCard image={Application} title="Web Application" />
                <ServiceCard image={Application} title="Web Application" />
                <ServiceCard image={Application} title="Web Application" />
                <ServiceCard image={Application} title="Web Application" />
            </section>

            <div className="flex justify-center items-center mt-20">
                <button className="bg-[#FF6B00] px-20 py-1 font-bold rounded text-white text-xl">More services</button>
            </div>
        </main>
    )
}