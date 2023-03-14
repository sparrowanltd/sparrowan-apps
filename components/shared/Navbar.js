import Image from "next/image";
import Link from "next/link";
import logo from '../../public/sparrowan-logo.png';
export default function Navbar() {
    return (
        <>
            <header className="bg-[#000000] px-20 text-white flex justify-between items-end nav_bar">
                <Link href='/'> <Image src={logo} width="129px" height="53px" alt="Logo" placeholder="blur" /></Link >
                <ul className="flex justify-between items-center lg:gap-10 xl:gap-16 ">
                    <Link href='/'>Home</Link >
                    <Link href='/service'>Service</Link >
                    <Link href='/projects'>Projects</Link >
                    <Link href='/protfolio'>Protfolio</Link >
                    <Link href='/career'>Career</Link >
                </ul>
                <Link href='/contact-us'>Contact us</Link >
            </header>
        </>
    )
}