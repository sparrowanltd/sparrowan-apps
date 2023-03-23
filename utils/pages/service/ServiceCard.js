import Image from 'next/image'
import styles from '../../../styles/service.module.css'
export default function ServiceCard({ image, title, pragraph }) {

    return (
        <main className={`flex justify-center gap-10  mt-10 ${styles.main_service_card} `}>
            <div className={`${styles.service_card} flex justify-center items-center`}>
                <Image className='w-[200px]' src={image} width={100} height={100} alt="image" />
            </div>
            <div>
                <h1 className='text-4xl font-bold '>{title}</h1>
                <p className={styles.text_positon}>
                    {pragraph}
                </p>
                <span className={`${styles.more} text-red-500`} > More...</span>
            </div>

        </main>
    )
}