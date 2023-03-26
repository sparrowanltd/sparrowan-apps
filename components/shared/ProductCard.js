import Image from 'next/image'
import product from '../../assets/preview1.png'
import productPrice from '../../assets/productCard.png'
import ProdctDetailscard from '../../assets/ProdctDetailscard.png'
import arrowLeft from '../../assets/Vector2.png'
import requstDemo from '../../assets/productRequstdemo.png'

export default function ProductCard() {
    return (
        <>
            <main className="shadow-md transition ease-in-out delay-150 hover:bg-[#FF6B00] duration-700 w-[310px] h-[500px] rounded-2xl hover:bg-[#FF6B00] p-1 hover:text-white">
                <Image className='w-full rounded-2xl' src={product} width={100} height={100} alt="Product Images " />
                <p className='my-4  font-bold text-md text-center'>This is a text </p>
                <div className='flex items-center'>
                    <button className='flex'>
                        <Image className='w-full rounded-2xl' src={productPrice} width={100} height={100} alt="Product Images " />
                        <span>Price</span>
                        <span>200 $</span>
                    </button>
                    <button className='flex'>
                        <Image className='w-full rounded-2xl' src={ProdctDetailscard} width={100} height={100} alt="Product Images " />
                        <span>Details</span>
                        <Image className='w-full rounded-2xl' src={arrowLeft} width={100} height={100} alt="Product Images " />

                    </button>
                </div>
                <button className='flex'>
                    <Image className='w-full rounded-2xl' src={requstDemo} width={100} height={100} alt="Product Images " />
                    <span>Request For Demo</span>
                    <Image className='w-full rounded-2xl' src={arrowLeft} width={100} height={100} alt="Product Images " />

                </button>

            </main>
        </>
    )
}