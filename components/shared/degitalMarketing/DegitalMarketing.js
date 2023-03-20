import Image from "next/image";
import Text from "../text/Text";
import digital from '../../../assets/undraw_marketing_re_7f1g 1.png'
import next from '../../../assets/ep_d-arrow-left.png'
import prev from '../../../assets/prve.png'
import { useState } from "react";
import DegitalCard from "./DegitalCard";
export default function DegitalMarketing() {
    const [pagination, setPagination] = useState(1)
    return (
        <>
            <section>
                <Text position="flex" title={[{ text: "Our", color: "000" }, { text: "Degital Marketing", color: "FF6B00" }, { text: "Solution", color: "000" }]} />
                <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 ">
                    <DegitalCard title="Social Media" title1="Marketing" image={digital} />
                    <DegitalCard title="Social Media" title1="Marketing" image={digital} />
                    <DegitalCard title="Social Media" title1="Marketing" image={digital} />
                    <DegitalCard title="Social Media" title1="Marketing" image={digital} />
                    <DegitalCard title="Social Media" title1="Marketing" image={digital} />
                    <DegitalCard title="Social Media" title1="Marketing" image={digital} />
                </div>
                {/* div pagination  */}
                <div className="text-center w-[252px] bg-[#FF6B00] rounded-md font-bold mx-auto mt-10">
                    <div className="flex justify-between items-center px-3 py-2">
                        <button  onClick={() => setPagination(pagination + 1)} >
                            <Image src={prev} width={20} height={20} alt="imges" />
                        </button>
                        <h1 className="text-white" >{pagination}</h1>
                        <button onClick={() => setPagination(pagination - 1)} disabled={pagination >=2?false:true}>
                            <Image  src={prev} width={20} height={20} alt="imges" />
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}