import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import "@fontsource/poppins";
export default function Layout({ children }) {

    return (
        <>
            <div style={{fontFamily:"Poppins"}}>
                <Navbar />
                {/* {children}
                <Footer /> */}
            </div>
        </>

    )
}