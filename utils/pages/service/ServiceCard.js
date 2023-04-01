import Image from 'next/image'
import styles from '../../../styles/service.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function ServiceCard({ image, title, discretion,path }) {
    const router =useRouter()
    return (
        <main  className={`flex justify-center gap-10   mt-10 ${styles.main_service_card} `}>
            <div className={`${styles.service_card} flex justify-center items-center`}>
              {  <Image className='w-[200px]' src={image} width={100} height={100} alt="image" />}
            </div>
            <div>
                <h1 onClick={()=>router.push(path)}  className='text-2xl font-bold cursor-pointer'>{title}</h1>
                <p className={styles.text_positon}>
                    {discretion.slice(0, 700)}
                </p>
                <button onClick={()=>router.push(path)} className='text-[#FF6B00]'> more</button>

            </div>

        </main>
    )
}