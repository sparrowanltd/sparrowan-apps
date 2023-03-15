import Image from "next/image";
import Link from "next/link";

export default function Button({ title, bgColor, color, icon, extra, buttonwidth,positin }) {
    return (
        <>
            <button className={`flex ${positin} items-center  py-1  ${bgColor} text-[${color}] ${buttonwidth} `}>
                <p className="text-xl font-bold">{title}</p>
                <Link href='#' className="flex justify-center items-center gap-2" ><Image src={icon} width="28" height="" /></Link>
            </button>
            
        </>
    )
}