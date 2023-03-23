import Button from "./button/Button";
import SwiperSlideContent from "./SwiperSlide";
export default function Studio({ slideInfo }) {
    return (
        <main className="mt-20">
            <div className="flex justify-center items-center  gap-2">
                <h1 className=" text-4xl font-bold">Design</h1>
                <h1 className=" text-4xl font-bold text-[#FF6B00]">Studio</h1>
            </div>
            <div className="mt-10">
                <div>
                    <SwiperSlideContent item={5} deretion={1000} direction={true} slideInfo={slideInfo} />
                </div>
                <div className="mt-20">
                    <SwiperSlideContent item={5} deretion={1000} direction={false} slideInfo={slideInfo} />
                </div>

                <div className="flex justify-center items-center mt-20">
                    <button className="bg-[#FF6B00] px-20 py-1 font-bold rounded text-white text-xl">More Design</button>
                </div>
            </div>
        </main>
    )
}