import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from '../../public/sparrowan-logo.png';
import menu from '../../assets/menu.png';
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
    const { theme, setTheme } = useTheme('')
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const darkMode = <div>
        {
            theme == "dark" ? <button onClick={() => setTheme('light')}>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="#9333ea"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                    />
                </svg>


            </button> : <button onClick={() => setTheme('dark')}>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9333ea" className="w-6 h-6">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>

            </button>
        }
    </div>

    /* Navlink  */
    const navLink = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Service',
            link: '/service'
        },
        {
            name: 'Projects',
            link: '/projects'
        },
        {
            name: 'Portfolio',
            link: '/protfolio'
        },
        {
            name: 'Career',
            link: '/career'
        },

    ]

    const navContent = navLink?.map(({ name, link }) => (
        <Link key={link} href={link} className={`${router?.asPath === link ? "text-[#FF6B00]" : ""}`}>{name}</Link >
    ))




    return (
        <>
            {/* laptop adn  pc mobile_navbar */}
            <header className={`dark:bg-[#121212] pc_navbar  px-5 md:px-16  flex justify-between ${((router?.asPath == '/') && (theme == "dark")) ? "items-end" : "items-center py-2"}   nav_bar`}>
                <Link href='/'> <Image src={logo} width="129px" height="53px" alt="Logo" /></Link >
                <ul className="flex justify-between items-center md:gap-8 xl:gap-16 ">
                    {
                        navContent
                    }
                </ul>
                <div className="flex items-center gap-10">
                    {darkMode}
                    <Link href='/contact' className="bg-[#FF6B00] px-5 rounded text-white ">Contact us</Link >
                </div>
            </header>
            {/* {theme === "light" && <hr />} */}
            {/* moble  navbar  */}
            <header className="mobile_navbar">

                <div className="flex justify-between items-center px-5 my-2">
                    <Link href='/'> <Image src={logo} width="129px" height="53px" alt="Logo" /></Link >
                    <button onClick={() => setOpen(!open)}> <Image src={menu} width={30} height={30} alt="menu" /></button >
                </div>
                {
                    open && <div data-aos="fade-right" className="absolute inset-0 bg-opacity-25 w-screen  h-screen bg-[#000000]">
                        <div className="px-5 dark:bg-[#121212] bg-white w-[320px] h-screen">
                            <div className="flex justify-between items-center mb-5">
                                <Link href='/'> <Image src={logo} width="129px" height="53px" alt="Logo" /></Link >
                                <button onClick={() => setOpen(!open)}><IoCloseSharp className="text-[#FF6B00] text-4xl" /></button >
                            </div>
                            <ul className="flex flex-col justify-between items-center gap-8 text-xl ">
                                {
                                    navContent
                                }
                                {darkMode}
                                <Link href='/contact' className="bg-[#FF6B00] px-5 py-1 rounded text-white ">Contact us</Link >
                            </ul>


                        </div>
                    </div>
                }
            </header>


        </>
    )
}