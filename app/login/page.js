import Login from "../components/login"
export const metadata = {
  title: "Login to Trimify - The Ultimate URL Shortener ",
  description: "Log in to your Trimify account to access your dashboard and to create custom short links.If you have not created your account till now then first go and create your account.",
  keywords: [
    "login URL shortener",
    "access Trimify account",
    "user login short link",
    "sign in URL shortener",
    "Trimify login page"
  ],
  alternates: {
    canonical: "https://trimify.xyz/login"
  },
   openGraph: {
   title: "Login to Trimify - The Ultimate URL Shortener   ",
   description:
      "Log in to your Trimify account to access your dashboard and to create custom short links.If you have not created your account till now then first go and create your account.",
    url: "https://trimify.xyz/login",
    siteName: "Trimify - The Ultimate URL Shortener ",
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
    title: "Login to Trimify - The Ultimate URL ",
    description: "Log in to your Trimify account to access your dashboard and to create custom short links.If you have not created your account till now then first go and create your account.",
    images: ["/og-image.png"],
  },
}

const page = () => {
  return (
  <Login />
  )
}

export default page
