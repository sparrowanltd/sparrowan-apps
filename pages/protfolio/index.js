import ProtfolioBanner from "@/utils/pages/protfolio/protfolioBanner";
import Head from "next/head";

export default function Protfolio() {
    return (
        <>
            <Head>
                <title>Protfolio</title>
            </Head>
            <main className="">
                <ProtfolioBanner />
            </main>
        </>
    )
}

