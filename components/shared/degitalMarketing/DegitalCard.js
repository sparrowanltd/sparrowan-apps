import Image from "next/image";
export default function DegitalCard({title,title1,image}) {
    return (
        <div className="digital_section bg-white text-center p-5">
            <h1 className="text-[#FF6B00] text-md font-bold ">{title}</h1>
            <h1 className="text-[#FF6B00] text-md font-bold ">{title1}</h1>
            <Image className="mt-10 w-[200px] mx-auto" src={image} height={100} width={100} alt="imges" />
        </div>
    )
}