import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import "@fontsource/poppins";
import MessengerChat from "@/utils/messengerChat";
import ReviewCard from "../shared/Clients/ReviewCard";
import stodio1 from '../../assets/stodio1.png';
import stodio2 from '../../assets/stodio2.png';
import stodio3 from '../../assets/stodio3.png';
import stodio4 from '../../assets/stodio4.png';
import stodio5 from '../../assets/stodio5.png';
import stodio6 from '../../assets/stodio6.png';
import stodio7 from '../../assets/stodio7.png';
import stodio8 from '../../assets/stodio8.png';
import stodio9 from '../../assets/stodio9.png';
import stodio10 from '../../assets/stodio10.png';
import Review from "../shared/Clients/Review";
export default function Layout({ children }) {
    const slideInfos = [
        {
          _id: 1,
          link: "/",
          icon: stodio1,
        },
        {
          _id: 2,
          link: "/",
          icon: stodio2,
        },
        {
          _id: 3,
          link: "/",
          icon: stodio3,
        },
        {
          _id: 4,
          link: "/",
          icon: stodio4,
        },
        {
          _id: 5,
          link: "/",
          icon: stodio5,
        },
        {
          _id: 6,
          link: "/",
          icon: stodio6,
        },
        {
          _id: 7,
          link: "/",
          icon: stodio7,
        },
        {
          _id: 8,
          link: "/",
          icon: stodio8,
        },
        {
          _id: 9,
          link: "/",
          icon: stodio9,
        },
        {
          _id: 10,
          link: "/",
          icon: stodio10,
        },
      ]

    return (
        <>
            <div className="overflow-hidden" style={{ fontFamily: "Poppins" }} >
                <MessengerChat />
                <Navbar />
                {children}
                <Review item={3} deretion={2000} slideInfo={slideInfos} />
                <Footer />
            </div>
        </>

    )
}
