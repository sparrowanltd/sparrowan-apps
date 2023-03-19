import Image from "next/image";

export default function TechnologiesCard({ title, image }) {

    return (
        <div>
            <Image src={image} width={100} height={100} alt="Images " className="mx-auto" />
            <h1 className="text-center text-white font-bold mt-2">{title}</h1>{/* text-[#FF6B00] */}

        </div>
    )
}