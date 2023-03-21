import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import styles from '../../styles/scrollbar.module.css'
import "@fontsource/poppins";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useEffect } from "react";

export default function Layout({ children }) {
    useEffect(() => {

        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "100356108528777");
        chatbox.setAttribute("attribution", "biz_inbox");
        window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v16.0'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    },[])

    return (
        <>
            <div id="fb-root"></div>

            <div id="fb-customer-chat" class="fb-customerchat">
            </div>
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
