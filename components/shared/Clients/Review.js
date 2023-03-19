import SwiperSlideContent from "../SwiperSlide";
import Text from "../text/Text";

export default function Review({ item, deretion, slideInfo }) {
    return (
        <main className="py-10">
            <Text position="flex" title={[{ text: "Words from Our", color: "000" }, { text: "Clients", color: "FF6B00" }]} />

            <section className="mt-10">
                <SwiperSlideContent item={item} deretion={deretion} slideInfo={slideInfo} review="ture" />
            </section>
        </main>
    )
}