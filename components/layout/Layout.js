import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import styles from '../../styles/scrollbar.module.css'
import "@fontsource/poppins";
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function Layout({ children }) {
    return (
        /* 100064843846173 */
        <>
            <div style={{ fontFamily: "Poppins" }} className="overflow-hidden">
                <Navbar />
                {children}
                <Footer />
                <MessengerCustomerChat
                    pageId="100064843846173"
                    appId="4953855674652215>"
                />
            </div>
        </>

    )
}
