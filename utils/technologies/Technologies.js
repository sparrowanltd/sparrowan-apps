import Text from "@/components/shared/text/Text";
import TechnologiesCard from "./TechnologiesCard";
import reactjs from '../../assets/react-js-icon.png'
export default function Technologies() {
    return (
        <>
            <main className="px-5 md:px-20 py-10">
                <Text position="flex" title={[{ text: "Technologies", color: "FF6B00" }, { text: "We Work With" }]} />
                <div class="flex flex-wrap justify-between  gap-2 md:gap-10 mt-10">
                    <TechnologiesCard image={reactjs} title="React js " />
                    <TechnologiesCard image={reactjs} title="React js " />
                    <TechnologiesCard image={reactjs} title="React js " />
                    <TechnologiesCard image={reactjs} title="React js " />
                    <TechnologiesCard image={reactjs} title="React js " />
                    <TechnologiesCard image={reactjs} title="React js " />
                    <TechnologiesCard image={reactjs} title="React js " />
                    <TechnologiesCard image={reactjs} title="React js " />
                    <TechnologiesCard image={reactjs} title="React js " />
                    <TechnologiesCard image={reactjs} title="React js " />
                    <TechnologiesCard image={reactjs} title="React js " />
                    <TechnologiesCard image={reactjs} title="React js " />

                </div>
                <div className="flex justify-center items-center mt-20">
                    <button className="bg-[#FF6B00] px-20 py-1 font-bold rounded text-white text-xl">More technologies</button>
                </div>
            </main>
        </>
    )
}