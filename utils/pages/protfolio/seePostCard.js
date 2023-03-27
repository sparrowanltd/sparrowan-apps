import Image from 'next/image'
import seeProduct from '../../../assets/seeproeucts.png'
import calender from '../../../assets/calender.png'
import comment from '../../../assets/comment.png'
import Link from 'next/link'
export default function SeePostCard() {
    return (
        <div style={{ border: '4px solid #F24E1E' }} className="dark:shadow-gray-900 shadow-xl transition ease-in-out delay-150 duration-700 w-[310px] rounded-2xl overflow-hidden  hover:bg-[#FFC499] hover:text-white mx-auto bg-white">
            <Image className='w-full rounded-b-2xl  ' src={seeProduct} width={100} height={100} alt="Product Images " />
            {/* ==================  content area ================== */}
            <div className='p-4'>
                <div className='flex justify-between items-center gap-5'>
                    <div className='flex items-center gap-2 '>
                        <Image src={calender} width={20} height={20} alt="Product Images " />
                        <h1>10Sep, 2022</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image src={comment} width={20} height={20} alt="Product Images " />
                        <h1>Comments</h1>
                    </div>
                </div>
                <h1 className='text-sm font-bold my-2'>tems-center gap-5tems-center gap-5tems-center gap-5tems-center gap-5items-center gap-5</h1>
                <p className='text-sm my-2'>Lorem ipsum dolor sit amet, consectetur elementume vitae venenatis arcu vel.</p>
                <Link href='#' className='text-gray-300 font-bold'>Read more...</Link>
            </div>
        </div>
    )
}