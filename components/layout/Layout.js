import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import "@fontsource/poppins";
import MessengerChat from "@/utils/messengerChat";
export default function Layout({ children }) {
    return (
        <>
            <div className="overflow-hidden" style={{ fontFamily: "Poppins" }} >
                 <MessengerChat />                              
                 <Navbar />
                {children}
                <Footer />
            </div>
        </>

    )
}
