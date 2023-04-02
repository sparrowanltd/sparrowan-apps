import { useRouter } from "next/router"
import styles from '../../../styles/founderSwiter.module.css'
import shawon from '../../../assets/shawon.png'
import kobir from '../../../assets/kobir.png'
import talha from '../../../assets/talha.png'
import raza from '../../../assets/raza.jpg'
import solaiman from '../../../assets/solaiman.png'
import shamim from '../../../assets/shamim.png'
import Image from "next/image";
import { RiFacebookCircleFill } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle, AiOutlineMail, AiFillStar } from "react-icons/ai";
import { data } from "autoprefixer"
import FounderSwiter from "@/components/shared/FounderSwiter"
export default function SingleFounder() {
    const router = useRouter()

    const founderInfo = [
        {
            id: 1,
            name: "KAZI ARIFUL ARFIN",
            position: "Managing Director & CEO at Sparrowan Limited",
            discretion: "Kazi Ariful Arfin is the Managing Director & CEO of Sparrowan Limited, a leading IT company. With extensive experience in the technology sector, Mr. Arfin has a strong track record of leading successful teams and driving growth for companies. He is responsible for overseeing all aspects of the company's operations, setting the strategic direction, and identifying new business opportunities. Mr. Arfin has overseen several successful projects and worked closely with his team to develop new products and services. He has a collaborative and team-oriented management style and is committed to fostering a culture of innovation and creativity. Kazi is also actively involved in the technology community and is a member of several social and professional organizations.",
            images: raza,
            membership: [
                "Intellectual Property Association of Bangladesh (IPAB)",
                "BASIS",
                "EMK Center, Dhaka",
                "Secretary General, Sparrowan Foundation",
            ],
            contact: "arfin@sparrowan.com",
        },
        {
            id: 2,
            name: "Md Tauhidur Rahman Shawon",
            position: "Director Commercial of Sparrowan Limited",
            discretion: "He worked as a customer service reprasentative for over 5 Years in Group Four Securicor, Wilson James Limited under AEG LIVE at The O2 Arena in the United KIngdom. After achieving some degrees in computer science and management studies, he returned to Bangladesh and started working in different companies at management positions.He is responsible for overseeing the organization's commercial operations, developing and implementing strategies to drive revenue growth, and managing relationships with customers and partners.",
            images: shawon,
            membership: [
                "Intellectual Property Association of Bangladesh (IPAB)",
                "EMK Center, Dhaka",
                "BASIS",
            ],
            contact: "shawon@sparrowan.com",
        },
        {
            id: 3,
            name: "MD SHAMSUL KABIR",
            position: "Director, Legal & Corporate Affairs",
            discretion: "Kabir is a WIPO (World Intellectual Property Organization) certified IP attorney in Bangladesh, having more than 8 years of professional experience in corporate law and regulatory affairs including 4.5 years in KPMG Bangladesh. He has expertise in drafting patents, filing IP registration, drafting contracts and agreements including memorandum and articles of association, vetting documents, entity registration, business licensing, corporate governance and company secretarial services. He has been trained on data privacy, teambuilding, emotional intelligence, coaching & mentoring, social leadership, labour laws, WASH, PSEA, FIELD Program and so on. Kabir has been serving numerous national and multinational corporate giants with a consistent reputation over the years",
            images: kobir,
            membership: [
                "Intellectual Property Association of Bangladesh (IPAB)",
                "International Association for the Protection of Intellectual Property (AIPPI, Switzerland)",
                "EMK Center, Dhaka",
                "WIPO Academy, Geneva, Switzerland",
                "Vice President, Sparrowan Foundation",
            ],
            contact: "kabir@sparrowan.com",
        },
        {
            id: 4,
            name: "Md Solaiman Kabir Bhuiyan",
            position: "Director, Public Relation at Sparrowan Limited",
            discretion: "Md Solaiman Kabir Bhuiyan, Director, Public Relation at Sparrowan Limited as well as Asst. Professor at Royal University of Dhaka. He has extensive experience in public relations and communications, and is responsible for developing and executing communication strategies that enhance the company's reputation with stakeholders. Mr.r Bhuiyan has a strong track record of building and maintaining strong relationships with stakeholders, including clients, investors, employees, and the media. He has overseen several successful public relations campaigns, and is skilled at identifying opportunities to promote the company's brand and reputation. His management style is collaborative and team-oriented, and he is committed to fostering a culture of transparency and open communication.",
            images: solaiman,
            contact: "solaiman@sparrowan.com",
        },
        {
            id: 5,
            name: "Khanduker Noore Shamim Siddique",
            position: "Director, Finance at Sparrowan Limited",
            discretion: "Khanduker Noore Shamim Siddique, Director, Finance at Sparrowan Limited, highlights his extensive experience in finance and accounting, and his ability to drive financial growth and sustainability for companies. As the Director Finance, he oversees all aspects of the company's financial operations and ensures that they are aligned with the company's strategic goals and objectives. He is skilled in financial modeling and analysis, and uses data-driven insights to make strategic decisions that support the company's growth and profitability. Khanduker Noore Shamim Siddique has overseen several successful financial initiatives and works closely with the team to implement best practices for financial management. His management style is collaborative and results-oriented, and he is committed to fostering a culture of transparency and open communication.",
            images: shamim,
            contact: "shamim@sparrowan.com",
        },
        {
            id: 6,
            name: "TALHA ZOBAER",
            position: "Director, Human Resource",
            discretion: "Talha Zobaer is Director, Human Resources at Sparrowan Limited, responsible for overseeing all aspects of the company's human resources operations. He has a quite long years of experience in human resources management and is skilled in developing and implementing human resources strategies that align with the company's business objectives. He has helped to lead several successful organizational change initiatives and has overseen several human resources initiatives that have increased employee engagement and retention. Talha Zobaer is committed to creating a positive and inclusive work environment and fostering a culture of continuous learning and development for employees.",
            images: talha,
            contact: "talha@sparrowan.com",
        }
    ]
    const currentUser = founderInfo?.find(data => data.id == router.query.id)

    return (
        <>
            <main className={styles.swiperslide}>
                <section className={`w-[80%] mx-auto  p-10 rounded-xl ${styles.profileshadow}`}>
                    <div className="flex justify-start items-start gap-10">
                        <div data-aos="fade-right" className={`w-[200px] h-fit rounded-xl shadow-[15px_rgba(0,0,0,0.3) ]`}>
                            <Image className="object-fill h-48 w-96  rounded-xl" src={currentUser?.images} width={100} height={100} priority alt="Images" />
                        </div>
                        <div data-aos="fade-left">
                            <h1 className="text-2xl font-bold ">{currentUser?.name}</h1>
                            <p className="text-md">{currentUser?.position}</p>
                            <div className="grid gird-col-1 gap-1 mt-3">
                                <div className="flex justify-start items-center gap-6">
                                    <RiFacebookCircleFill className="text-xl" />
                                    <p className="text-sm">Facebook</p>
                                </div>
                                <div className="flex justify-start items-center gap-6">
                                    <TiSocialLinkedinCircular className=" text-xl" />

                                    <p className="text-sm">Linkedin</p>
                                </div>
                                <div className="flex justify-start items-center gap-6">
                                    <AiFillTwitterCircle className=" text-xl" />
                                    <p className="text-sm">Twitter</p>
                                </div>
                                <div className="flex justify-start items-center gap-6">
                                    <AiOutlineMail className="text-xl" />
                                    <p className="text-sm">{currentUser?.contact}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h1 className="text-xl ">Details :</h1>
                        <p className="text-sm">
                            {currentUser?.discretion}
                        </p>
                        {
                            currentUser?.membership && <div>
                                <h1 className="text-xl  mt-4">Membership :</h1>
                                <div>
                                    <ul className="text-sm">
                                        {currentUser?.membership.map(index => <li className="flex items-center gap-2 ">
                                            <AiFillStar />
                                            {index}
                                        </li>)}
                                    </ul>
                                </div>


                            </div>
                        }

                    </div> </section>
            </main>
        </>
    )
}