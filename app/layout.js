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
  keywords: [
    "Trimify-The ultimate url shortner",
    "trimifiy",
    "URL shortener",
    "Free short URL generator",
    "Link analytics",
    "Short links",
    "Track clicks",
    "Trimify",
    "custom short urls",
    "Login to Trimify",
    "Sign up to Trimify",
    "Dashboard of Trimify",
    "Clicks counter",
    "URL Click Counter",
  ],
  icons: {
    icon: "/favicon.png", // favicon
  },
  metadataBase: new URL("http://localhost:3000"), // Replace with your domain later
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trimify – The Ultimate URL Shortener",
    description:
      "Shorten, manage, and track links easily. Trimify lets you create memorable URLs and measure performance in real time.",
    url: "/",
    siteName: "Trimify",
    images: [
      {
        url: "/og-image.png", // Recommended: 1200x630 og-image instead of favicon
        width: 800,
        height: 600,
        alt: "Trimify logo",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trimify - The Ultimate Url Shortner",
    description:
      "Fast, reliable, and free link shortener with real-time analytics. Try Trimify today!",
    images: ["/og-image.png"],
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
