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
export const metadata = {
  icons: {
    icon: "/favicon.png", // favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${bree.variable}`}>
      <head>
        <link
          rel="icon"
          href="/favicon.png"
          className="rounded-[50%]"
          type="image/png"
          sizes="64x64"
        />
       <meta name="google-adsense-account" content="ca-pub-6762794271004506" />     
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
