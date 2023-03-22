import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import styles from '../../styles/scrollbar.module.css'
import "@fontsource/poppins";
import MessengerChat from "@/utils/messengerChat";
export default function Layout({ children }) {
    return (
        <>
            <div className="w-[1500px] mx-auto overflow-hidden" style={{ fontFamily: "Poppins" }} >
                <MessengerChat />
                <Navbar />
                {children}
                <Footer />
            </div>
        </>

    )
}
