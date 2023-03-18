import SwiperSlideContent from "../SwiperSlide";
import Text from "../text/Text";

export default function Partners({item,deretion,slideInfo}) {
    return (
        <main>
            <div className="flex justify-center  items-center mb-10">
                <Text className="" position="flex" title={[
                    { text: "Trusted", color: "000" },
                    { text: "Clients", color: "FF6B00" },
                    { text: "&", color: "000" },
                    { text: "Partners", color: "FF6B00" }
                ]} />
            </div>
            <SwiperSlideContent item={item} deretion={deretion} slideInfo={slideInfo} />
        </main>
    )
}