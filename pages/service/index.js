import Text from "@/components/shared/text/Text";
import ServiceCard from "@/utils/pages/service/ServiceCard";
import Head from "next/head";
import styles from '../../styles/service.module.css'
import serverImage from '../../assets/homepage-min1.png'
import serviceNet from '../../assets/serviceNet.gif'
import Image from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Service() {

    const development = [
        {
            path: 'service/development/research',
            id: 1,
            title: "Research and Development",
            discretion: "Sparrowan Limited, an IT company dedicated to providing innovative solutions to our clients. At Sparrowan Limited, we understand that the technology industry is constantly evolving, and new solutions are needed to stay ahead of the competition. That's why we invest heavily in research and development (R&D) to develop new products and services and improve our existing ones.",
            image: ""
        },
        {
            path: 'service/development/webapp',
            id: 2,
            title: "Web App Development",
            discretion: "Sparrowan Limited is an IT company that offers comprehensive web app development services to businesses looking to enhance their online presence. With a team of experienced developers and designers, Sparrowan Limited has helped numerous clients create custom web apps that drive business growth and engage users. In this article, we will explore the web app development services offered by Sparrowan Limited and how they can benefit businesses.",
            image: ""
        },
        {
            path: 'service/development/mobileapp',
            id: 3,
            title: "Mobile App Development",
            discretion: "Sparrowan Limited is an IT company that offers comprehensive mobile app development services to businesses looking to expand their digital footprint. With a team of skilled developers and designers, Sparrowan Limited has helped numerous clients create custom mobile apps that drive business growth and engage users. In this article, we will explore the mobile app development services offered by Sparrowan Limited and how they can benefit businesses.",
            image: ""
        },
        {
            path: 'service/development/ecommerce',
            id: 4,
            title: "E-Commerce Solutions",
            discretion: "Sparrowan Limited is an IT company that provides e-commerce solutions to businesses looking to expand their online presence. With a team of highly skilled professionals, Sparrowan Limited has helped numerous clients optimize their e-commerce operations, increase sales and streamline processes. In this article, we will explore the e-commerce solutions provided by Sparrowan Limited and how they can help businesses achieve their goals.",
            image: ""
        },
        {
            path: 'service/development/elearning',
            id: 5,
            title: "E-Learning",
            discretion: "E-learning is a rapidly growing field that has been revolutionized by advances in technology, particularly in the area of online education. At Sparrowan Limited, we recognize the importance of e-learning and have made it a key focus area of our business.",
            image: ""
        },
        {
            path: 'service/development/machinelearning',
            id: 6,
            title: "Machine Learning & Artifical Intelligence",
            discretion: "Sparrowan Limited is an innovative IT company that specializes in providing cutting-edge technology solutions to businesses across various industries. With the rapid advancement of technology, Sparrowan Limited has recognized the importance of machine learning and artificial intelligence in shaping the future of the industry. In this article, we will discuss how Sparrowan Limited leverages machine learning and artificial intelligence to develop innovative solutions that meet the needs of its clients.",
            image: ""
        },
        {
            path: 'service/development/brandstrategy',
            id: 7,
            title: "Brand Strategy",
            discretion: "Sparrowan Limited is an IT company that provides innovative technology solutions to businesses across various industries. To ensure its continued success, Sparrowan Limited has a well-defined brand strategy that is focused on building a strong brand identity and reputation, establishing a unique position in the market, and fostering strong relationships with its customers.",
            image: ""
        },
        {
            path: 'service/development/productstrategy',
            id: 8,
            title: "Product Strategy",
            discretion: "Sparrowan Limited is an innovative IT company that provides cutting-edge technology solutions to businesses across various industries. To ensure its continued success, Sparrowan Limited has a well-defined product strategy that is focused on meeting the evolving needs of its customers while staying ahead of the competition",
            image: ""
        }
    ]
    const marketing = [
        {
            path: 'service/marketing/socialmedia',
            id: 1,
            title: "Social Media Marketing",
            discretion: "We provide a comprehensive range of social media marketing services designed to help businesses of all sizes build their brand, engage with their audience, and drive sales. Our team of experts leverages the power of social media to create customized marketing strategies that deliver results",
            image: ""
        },
        {
            path: 'service/marketing/searchengine',
            id: 2,
            title: "Search Engine Optimization",
            discretion: "We provide comprehensive SEO services designed to help businesses of all sizes improve their online visibility and drive organic traffic to their websites. Our team of experts leverages the latest SEO techniques and strategies to help businesses rank higher in search engine results pages (SERPs) and achieve their business goals.",
            image: ""
        },
        {
            path: 'service/marketing/paidmarketing',
            id: 3,
            title: "Paid Marketing Strategy",
            discretion: "Welcome to Sparrowan Limited, the IT firm that specializes in providing innovative and effective marketing strategies for businesses of all sizes. One of the services we offer is Paid Marketing Strategy, also known as Pay-per-Click (PPC) advertising. In this article, we will dive deeper into the world of Paid Marketing Strategy and how it can benefit your business.",
            image: ""
        },
        {
            path: 'service/marketing/influencer',
            id: 4,
            title: "Influencer Marketing",
            discretion: "Welcome to Sparrowan Limited, your trusted IT firm that offers a wide range of services to help your business grow and thrive. One of our most popular offerings is influencer marketing, a powerful tool that can help you reach a wider audience and increase your brand's visibility. In this article, we will explore what influencer marketing is, why it matters, and how Sparrowan Limited can help you get the most out of this exciting strategy",
            image: ""
        },
        {
            path: 'service/marketing/content',
            id: 5,
            title: "Content Marketing",
            discretion: "Content marketing is a key aspect of modern digital marketing strategies, and Sparrowan Limited, an IT company, offers a range of content marketing services to help businesses improve their online presence, drive traffic to their website, and generate leads. In this article, we will explore the content marketing services offered by Sparrowan Limited and how they can benefit businesses.",
            image: ""
        },
        {
            path: 'service/marketing/automation',
            id: 6,
            title: "Marketing Automation",
            discretion: "Marketing automation is a powerful tool that can help businesses save time, increase efficiency, and improve their overall marketing efforts. Sparrowan Limited, an IT company, offers a range of marketing automation services designed to help businesses reach their marketing goals. In this article, we will explore the marketing automation services offered by Sparrowan Limited and how they can benefit businesses.",
            image: ""
        }
    ]








    return (
        <>
            <Head>
                <title>Service</title>
            </Head>

            <div className={`${styles.serviceBanner}`}>
                <div className="pt-2">
                    <Text position="flex" title={[{ text: "Our", color: "000" }, { text: "Services", color: "FF6B00" }]} />
                </div>
                <section className={` p-5 md:p-10  lg:p-20 `}>
                    <div className="flex justify-between  items-start">{/* justify-between */}
                        <div className="ml-20 mt-20">
                            <h1 className="font-bold text-4xl">Our services <span className="text-[#FF6B00]">are</span> given. </h1>
                            <h1 className="font-bold text-4xl flex justify-start gap-4">
                                <span>below</span>
                                <div className="text-white bg-[#FF6B00]  p-1 rounded-full animate-bounce  mt-5">
                                    <AiOutlineArrowDown  className=""/>
                                </div>
                            </h1>
                        </div>
                        <div>
                            <Image src={serviceNet} className="w-[500px] rounded-3xl" width={100} height={100} alt="git images " />
                        </div>
                        {/* service bannser styles  */}
                        <div className={`${styles.servicebg}`}>

                        </div>
                    </div>
                </section>
            </div>
            {/* =================  main content  ================= */}
            <section className="p-5 md:p-10 lg:p-20">
                <Text position="flex" title={[{ text: "Development", color: "000" }, { text: "Services", color: "FF6B00" }]} />

                {
                    development?.map(data => <ServiceCard key={data.id} image={serverImage} title={data.title} discretion={data.discretion} path={data.path} />)
                }

                <div className="mt-32">
                    <Text position="flex" title={[{ text: "DIGITAL", color: "000" }, { text: "MARKETING", color: "FF6B00" }]} />

                </div>
                {
                    marketing?.map(data => <ServiceCard key={data.id} image={serverImage} title={data.title} discretion={data.discretion} path={data.path} />)
                }
            </section>
            {/* 
             
            */}
        </>
    )
}

