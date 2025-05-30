import SessionWrapper from "./components/SessionProvider";
import Script from "next/script";
import "./globals.css";
import { Roboto, Bree_Serif } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-roboto",
});

const bree = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"], // ✅ دونوں include کریں
  display: "swap",
  variable: "--font-bree",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${bree.variable}`}>
      <head>
       <link rel="icon" href="/favicon.png" type="image/png" />
       <meta name="yandex-verification" content="856eed846c4fcea9" />
       <meta name="google-adsense-account" content="ca-pub-6762794271004506" />   
   <Script                    src="https://fpyf8.com/88/tag.min.js"
          data-zone="149911"
          strategy="afterInteractive" 
          async
          data-cfasync="false"
        />
         {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6N1QFL1KLS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6N1QFL1KLS');
          `}
        </Script>
      </head>
      <body>
        {/* Move Script here */}
        <Script
          src="https://cdn.lordicon.com/ritcuqlt.js"
          strategy="afterInteractive"
        />
     
            
        <Script
          unsafe-eval
          src="https://accounts.google.com/gsi/client"
          strategy="afterInteractive"
        />
        
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
