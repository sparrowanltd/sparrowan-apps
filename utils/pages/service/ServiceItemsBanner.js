import styles from '../../../styles/service.module.css'
export default function ServiceItemsBanner({ title }) {
    return (
        <section className={`${styles.serviceItemsBanner}`} >
            <div className={`${styles.serviceItemsBannerblear}`} >
                <div>
                    <h1 className='text-5xl font-bold text-[#FF6B00] text-center'>welcome </h1>
                    <p className='text-4xl font-mediam text-white text-center mt-8'>{title}</p>
                </div>
            </div>
        </section>

    )
}