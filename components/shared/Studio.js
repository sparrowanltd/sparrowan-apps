import Button from "./button/Button";
import SwiperSlideContent from "./SwiperSlide";
import Text from "./text/Text";
import Vector1 from '../../assets/Vector1.png'
export default function Studio({ slideInfo }) {
    return (
        <main>
            <Text position="flex" title={[{ text: "Design", color: "000" }, { text: "Studio", color: "FF6B00" }]} />
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