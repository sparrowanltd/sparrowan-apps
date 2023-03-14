import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

export default function Layout({ children }) {

    return (
        <>
            <Navbar />
            {children}
            {/* <Footer /> */}
        </>

    )
}