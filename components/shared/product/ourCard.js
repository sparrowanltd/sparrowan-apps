import Image from "next/image";
import Text from "../text/Text";

export default function OurCards({bgColor,cols,title,paragraph,image}) {
    return (
        <div className={`${cols} bg-[#${bgColor}] p-4 rounded-lg`}>
            <div className="grid grid-cols-12 items-center gap-10 ">
                <div className="col-span-7">
                    <Text className="text-black" title={[{ text: title }]} />
                    <p className="text-sm text-black mt-2">
                        {paragraph}
                    </p>
                </div>
                <div className="mx-auto col-span-5">
                    <Image className="w-[400px] h-100" src={image} width={100} height={100} />
                </div>
            </div>
        </div>
    )
}