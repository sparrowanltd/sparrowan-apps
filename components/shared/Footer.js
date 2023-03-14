import Image from "next/image";
import Link from "next/link";
import logo from '../../public/sparrowan-logo.png';
import Vector from '../../assets/vectorteltock.png';
import Group1 from '../../assets/Group1.png';
import Group2 from '../../assets/Group2.png';
import Group3 from '../../assets/Group3.png';
import Group4 from '../../assets/Group4.png';
import Group5 from '../../assets/Group5.png';
import Line from '../../assets/Line2.png';

export default function Footer() {
    return (
        <>
            <footer
                className="bg-[#000] text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
                
                <div className="px-20 py-10 text-center md:text-left">
                    <div className=" flex justify-between ">
                        <div className="">
                            <h1
                                className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                                <Link href='/'> <Image src={logo} className="w-100" width="" height="" alt="Logo" placeholder="blur" /></Link >
                            </h1>
                            <div className="">
                                <p
                                    className="   text-[#FF6B00]    font-semibold ">
                                    USA
                                </p>
                                <br />
                                <p
                                    className="mb-4   text-white   r font-semibold ">
                                    +1 (954) 449-5289

                                </p>
                                <p
                                    className="mb-2  text-[#FF6B00]  font-semibold ">
                                    UK Office
                                </p>
                                <p className="mb-2 text-sm text-white ">275 New N Rd Ste 3087, <br />London N1 7AA</p>
                                <p className="mb-4 text-sm text-white ">+44 (204) 5577-0819</p>
                                <p
                                    className="mb-2  text-[#FF6B00]  font-semibold ">
                                    Dhaka Office
                                </p>
                                <p className="mb-2 text-sm text-white ">House # 193, Road # 2, Avenue # 3, <br />Mirpur, Dohs, Dhaka - 1216</p>
                                <p className="mb-4 text-sm text-white ">+880 (17) 1555-9868</p>

                            </div>
                        </div>

                        <div className="">
                            <h1
                                className="mb-4 mt-10 flex justify-center text-xl font-semibold text-[#FF6B00] md:justify-start">
                                Company Info
                            </h1>

                            <div className="mt-8">
                                <p className="mb-4">
                                    <Link href="#" className="text-white dark:text-neutral-200"
                                    >About us</Link >
                                </p>
                                <p className="mb-4">
                                    <Link href="#" className="text-white dark:text-neutral-200"
                                    >  Our Stores </Link >
                                </p>
                                <p className="mb-4">
                                    <Link href="#" className="text-white dark:text-neutral-200"
                                    > Blog  </Link >
                                </p>
                                <p className="mb-4">
                                    <Link href="#" className="text-white dark:text-neutral-200"
                                    >  Contact </Link >
                                </p>
                                <p className="mb-4">
                                    <Link href="#" className="text-white dark:text-neutral-200"
                                    >  Support </Link >
                                </p>
                                <p className="mb-4">
                                    <Link href="#" className="text-white dark:text-neutral-200"
                                    > Payments  </Link >
                                </p>
                                <p className="mb-4">
                                    <Link href="#" className="text-white dark:text-neutral-200"
                                    >  Career </Link >
                                </p>
                                <p className="mb-4">
                                    <Link href="#" className="text-white dark:text-neutral-200"
                                    >  News </Link >
                                </p>
                                <p className="mb-4">
                                    <Link href="#" className="text-white dark:text-neutral-200"
                                    > Foundation</Link >
                                </p>
                                <p className="mb-4">
                                    <Link href="#" className="text-white dark:text-neutral-200"
                                    >Site Map</Link >
                                </p>
                            </div>

                        </div>
                        <div>
                            <h1
                                className="mb-4 mt-10 flex justify-center text-xl font-semibold text-[#FF6B00] md:justify-start">
                                Get In Touch
                            </h1>
                            <div className="mt-8">
                                <p className="mb-4">
                                    <a href="#!" className="text-white dark:text-neutral-200"
                                    >contact@sparrowan.com</a >
                                </p>
                                <p className="mb-4">
                                    <a href="#!" className="text-white dark:text-neutral-200"
                                    >hr@sparrowan.com</a >
                                </p>
                                <br />
                                <p className="mb-4">
                                    <a href="#!" className="text-white dark:text-neutral-200"
                                    >+88 017 85693445</a >
                                </p>
                                <p className="mb-4">
                                    <a href="#!" className="text-white dark:text-neutral-200"
                                    >skype: sparrowan</a >
                                </p>
                                <br />
                                <p className="mb-4">
                                    <a href="#!" className="text-[#FF6B00] dark:text-neutral-200"
                                    >Opening Hour</a >
                                </p>
                                <p className="mb-4">
                                    <a href="#!" className="text-white dark:text-neutral-200"
                                    >Monday - Friday</a >
                                </p>
                                <p className="mb-4">
                                    <a href="#!" className="text-[#FF6B00] dark:text-neutral-200"
                                    >9:30 AM - 7:00 PM</a >
                                </p>
                                <p className="mb-4">
                                    <a href="#!" className="text-white dark:text-neutral-200"
                                    >Monday - Friday</a >
                                </p>
                                <p className="mb-4 flex">
                                    <input type='email' placeholder="Type your email" className="w-100 px-2 outline-none border-2 rounded-lg border-[#FF6B00] bg-transparent placeholder:text-sm" />
                                    <Image src={Vector} className="w-[75px] bg-[#FF6B00] px-6 py-1 ml-[-20px] rounded-lg" width="" height="" alt="Logo" placeholder="blur" />
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <hr className="my-6" />
                    <div className="flex justify-between items-center text-white ">
                        <p className="text-sm">© 2022 – Sparrowan LLC | All Rights Reserved | Serving clients since 2019
                        <br />
                            Terms of Service | Privacy Policy
                        </p>
                        <ul className="flex justify-between items-center gap-5">
                            <li><Link href='/'> <Image src={Group1}  width="30px" height="auto" alt="Logo" placeholder="blur" /></Link ></li>
                            <li><Link href='/'> <Image src={Group2} width="30px" height="auto"  alt="Logo" placeholder="blur" /></Link ></li>
                            <li><Link href='/'> <Image src={Group3} width="30px" height="auto"  alt="Logo" placeholder="blur" /></Link ></li>
                            <li><Link href='/'> <Image src={Group4} width="30px" height="auto"  alt="Logo" placeholder="blur" /></Link ></li>
                            <li><Link href='/'> <Image src={Group5} width="30px" height="auto"  alt="Logo" placeholder="blur" /></Link ></li>
                            <li><Link href='/'> <Image src={Line} width="30px" height="10px"  alt="Logo" placeholder="blur" /></Link ></li>
                            <li><Link href='/'> <Image src={Group1}  width="30px" height="auto" alt="Logo" placeholder="blur" /></Link ></li>
                            <li><Link href='/'> <Image src={Group2} width="30px" height="auto"  alt="Logo" placeholder="blur" /></Link ></li>
                            <li><Link href='/'> <Image src={Group3} width="30px" height="auto"  alt="Logo" placeholder="blur" /></Link ></li>
                        </ul>

                    </div>
                </div>

            </footer>
        </>
    )
}