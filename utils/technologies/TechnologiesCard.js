import { useTheme } from "next-themes";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
export default function TechnologiesCard({ title, image }) {
    const { theme, setTheme } = useTheme()
    return (
        <div className="text-center">
            {/* <Skeleton height={100} width={100} circle={true} className="" />
            <Skeleton width={200} className="mt-2" /> */}
            <SkeletonTheme baseColor={theme=="dark"?'#252525':""} highlightColor={theme=='dark'?'#333333':""} >
                <p className="">
                    <Skeleton height={100} width={100} circle={true} className="mx-auto" />
                    <Skeleton width={200} className="mt-2" />
                </p>
            </SkeletonTheme>

            {/* <Image src={image} width={100} height={100} alt="Images " className="mx-auto" />
            <h1 className="text-center text-white font-bold mt-2">{title}</h1>  */}
            {/*   text-[#FF6B00] */}

        </div>
    )
}