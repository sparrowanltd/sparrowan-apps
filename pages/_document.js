import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <div id="fb-root"></div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
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
          var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "100356108528777");
        chatbox.setAttribute("attribution", "biz_inbox");
            `,
        }}
      />
      <div id="fb-customer-chat" class="fb-customerchat">
      </div>
    </Html>
  )
}
