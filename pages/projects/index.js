import SwiterProjects from "@/components/shared/SwiterProjects";
import Head from "next/head";

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <main  className="p-5 md:p-10 lg:p-20">
                <SwiterProjects />
            </main>
        </>
    )
}

