import Text from "@/components/shared/text/Text";
import ServiceCard from "@/utils/pages/service/ServiceCard";
import Head from "next/head";
import serverImage from '../../assets/homepage-min1.png'
export default function Service() {

    const service = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
    ]
    const serviceData = service.map(({ id }) => (
        <ServiceCard key={id} image={serverImage} title="Mobile Apps" pragraph="Our expertise in mobile app development will ensure you have a unique mobile app at your fingertips. The mobile apps we create transform businesses and deliver great customer experiences across industries. Through a personalized user experience, our consumer app helps brands drive marketing, sales, and services.
        Our expertise in mobile app development will ensure you have a unique mobile app at your fingertips. The mobile apps we create transform businesses and deliver great customer experiences across industries. Through a personalized user experience, our consumer app helps brands drive marketing, sales, and services.
        Our expertise in mobile app development will ensure you have a unique mobile app at your fingertips. The mobile apps we create transform businesses and deliver"/>
    ))

    return (
        <>
            <Head>
                <title>Service</title>
            </Head>
            {/* =================  main content  ================= */}
            <main className="p-5 md:p-10 lg:p-20">
                <Text position="flex" title={[{ text: "Development", color: "000" }, { text: "Services", color: "FF6B00" }]} />
                <div className="grid grid-col-1 gap-1">
                    {serviceData}
                </div>
            </main>
            {/* 
             
            */}
        </>
    )
}

