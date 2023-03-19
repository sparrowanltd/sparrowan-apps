import Image from "next/image";

export default function ServiceCard({image,title}) {
    return (
        <div className=" bg-[#FF6B00] text-center p-2 rounded-md">
            <Image src={image} width={100} height={100} className="mx-auto mt-3 mb-5" alt="service_imgses" />
            <p className="font-bold text-sm mb-10">{title}</p>
        </div>
    )
}