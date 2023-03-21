import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import styles from '../../styles/scrollbar.module.css'
import "@fontsource/poppins";
import MessengerCustomerChat from 'react-messenger-customer-chat';
export default function Layout({ children }) {
    return (
        <>
            <div style={{ fontFamily: "Poppins" }} className="overflow-hidden">
                <Navbar />
                {children}
                <Footer />
                <MessengerCustomerChat
                    pageId="100356108528777"
                    appId="4953855674652215"
                />
            </div>
        </>

    )
}
