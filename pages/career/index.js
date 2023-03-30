import Head from "next/head";

export default function Career() {
    return (
        <>
            <Head>
                <title>Career</title>
            </Head>
            <main className="mt-10">
                <section className="text-center">
                    <div className="flex justify-center items-center flex-wrap gap-2 my-6">
                        <h1 className="text-[#FF6B00] text-2xl lg:text-4xl font-bold">Our</h1>
                        <h1 className=" text-2xl lg:text-4xl font-bold"> Job</h1>
                        <h1 className="text-[#FF6B00] text-2xl lg:text-4xl font-bold"> Offers</h1>
                    </div>
                    <p>Join us and help disrupt the enterprise market!</p>
                    <p>Email: contact@sparrowan.com</p>
                    <p className="mt-5">
                        Join us, we offer you an extraordinary chance to learn, to develop and to be part of an exciting experience and team.

                    </p>
                </section>
                {/* job post   */}
                <div className="w-100 flex justify-center items-center h-[400px]">
                    <h1 className="text-5xl font-bold text-center"> Not Found</h1>
                </div>
            </main>

        </>
    )
}

