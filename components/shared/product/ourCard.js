import Image from "next/image";
import Text from "../text/Text";

export default function OurCards({ bgColor, cols, title, paragraph, image,positionImages }) {
    return (
        <div className={`${cols} ${bgColor} p-4 rounded-lg relative`}>
            <div className="grid  grid-cols-1 lg:grid-cols-12 items-center gap-5  ">
                <div className="md:col-span-7">
                    <Text className="text-black" title={[{ text: title }]} />
                    <p className="text-sm text-black mt-2">
                        {paragraph}
                    </p>
                </div>
                <div className="mx-auto md:col-span-5">
                    <Image className="w-[200px] md:w-[150px] " src={image} width={100} height={100} alt="" />
                </div>
            </div>
            {positionImages &&   <div className="absolute   md:top-[-40px] md:right-[-60px] z-[-1]">
                <Image className={`ml-[-20px]`} src={positionImages} width={100} height={100} alt="" />
            </div>}
          
        </div>
    )
}