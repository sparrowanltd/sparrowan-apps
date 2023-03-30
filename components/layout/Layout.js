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
      text: 'We were impressed with the level of innovation and creativity demonstrated by this company. Their solutions have enabled us to stay ahead of the curve and remain competitive in our industry'
    },
    {
      _id: 2,
      link: "/",
      icon: stodio2,
      text: 'The security measures implemented by Sparrowan Limited have given us peace of mind knowing that our data and systems are protected from cyber threats. We highly recommend their services to any business seeking a reliable and secure IT partner'
    },
    {
      _id: 3,
      link: "/",
      icon: stodio3,
      text: 'We engaged with Sparrowan Limited for a complex project and were extremely impressed with their technical knowledge and ability to deliver the project on time and within budget. Their project management skills were exceptional, ensuring that we were kept informed every step of the way'
    },
    {
      _id: 4,
      link: "/",
      icon: stodio4,
      text: 'Sparrowan Limited has been a valuable partner for our business, providing cost-effective solutions that have helped us achieve significant cost savings while improving our operations. Their level of professionalism and expertise is unmatched, and we highly recommend their services'
    },
    {
      _id: 5,
      link: "/",
      icon: stodio4,
      text: 'We have worked with several IT companies in the past, but Sparrowan Limited stands out for their attention to detail and commitment to understanding our business needs. They have helped us transform our digital presence and achieve our goals through their innovative solutions.'
    },
    {
      _id: 6,
      link: "/",
      icon: stodio4,
      text: 'The support provided by this IT company has been outstanding. Their team is responsive and knowledgeable, and they have always gone above and beyond to ensure that our IT systems are operating at peak performance.'
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
