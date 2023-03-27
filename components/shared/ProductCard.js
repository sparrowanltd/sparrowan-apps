import Image from 'next/image'
import product from '../../assets/preview1.png'
import productPrice from '../../assets/productCard.png'
import ProdctDetailscard from '../../assets/ProdctDetailscard.png'
import arrowLeft from '../../assets/Vector2.png'
import requstDemo from '../../assets/productRequstdemo.png'

export default function ProductCard() {
    return (
        <>
            <main className="dark:shadow-gray-900 shadow-xl transition ease-in-out delay-150 duration-700 w-[310px] h-[500px] rounded-2xl  p-1 overflow-hidden  hover:bg-[#FFC499] hover:text-white mx-auto md:mx-0">{/* hover:bg-[#FF6B00]  */}
                <Image className='w-full rounded-2xl ' src={product} width={100} height={100} alt="Product Images " />
                <p className=' my-4 font-bold text-sm text-center '>This is nsdfsdfdsfdsfa my best product. ata akta valo   sfsffsdfsafdfsdfsdfsdfsdsasf safsa sdfas </p>
                <div className='flex justify-around items-center gap-2 text-white'>
                    <div className='flex items-center gap-2 p-2 rounded-xl bg-[#FFB414] '>
                        <Image className='w-[14px] h-[14px]' src={productPrice} width={100} height={100} alt="Product Images " />
                        <span>Price</span>
                        <span>200 $</span>
                    </div>
                    <div className='flex justify-between items-center gap-2 rounded-xl   pl-3 bg-[#FF6B00] '>
                        <Image className='w-[14px] h-[14px]' src={ProdctDetailscard} width={100} height={100} alt="Product Images " />
                        <span>Details</span>
                        <span className='bg-[#FFB414] p-2 rounded-full'>
                            <Image className='mx-auto w-[20px] h-[20px]' src={arrowLeft} width={20} height={20} alt="Product Images " />
                        </span>
                        {/* <Image className='w-[20px]' src={arrowLeft} width={100} height={100} alt="Product Images " /> */}
                    </div>
                </div>
                <div className='w-[250px] rounded-xl mx-auto text-center border-2 border-[#FF6B00] text-[#FF6B00] mt-10'>
                    <button className='w-full flex justify-between gap-4 items-center pl-3'>
                        <Image className='rounded-2xl ' src={requstDemo} width={20} height={20} alt="Product Images " />
                        <span className='text-sm font-bold'>Request For Demo</span>
                        <span className='bg-[#FF6B00] p-2 rounded-full'>
                            <Image className='mx-auto w-[20px] h-[20px]' src={arrowLeft} width={20} height={20} alt="Product Images " />
                        </span>
                    </button>
                </div>

            </main>
        </>
    )
}