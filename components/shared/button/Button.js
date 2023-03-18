import Image from "next/image";
import Link from "next/link";

export default function Button({ title, bgColor, color, icon, extra, buttonwidth, positin, link }) {
    return (
        <>
            <Link href={link} className={`flex ${positin} items-center  py-1  ${bgColor} text-[${color}] ${buttonwidth} rounded`}>
                <p className="text-xl font-bold">{title}</p>
                {/* <Link href={link} className="flex justify-center items-center gap-2" ></Link> */}
                <Image src={icon} width="28" height="" alt="" />
            </Link>

        </>
    )
}