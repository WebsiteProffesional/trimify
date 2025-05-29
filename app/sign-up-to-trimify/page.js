import React from 'react'
import Signup from "../components/Signup"
export const metadata = {
  title: "Sign up to Trimify - The Ultimate URL Shortener",
  description: "Create your Trimify account to shorten and manage links with analytics.Also get a seperate dashboard for url management.",
  keywords: [
    "sign up URL shortener",
    "create account Trimify",
    "free URL shortener signup",
    "register short link service",
    "Trimify user registration"
  ],
  alternates: {
    canonical: "https://trimify.xyz/sign-up-to-trimify"
  },
  openGraph: {
   title: "Sign up to Trimify - The Ultimate URL Shortener",
   description:
      "Create your Trimify account to shorten and manage links with analytics.Also get a seperate dashboard for url management.",
    url: "https://trimify.xyz/sign-up-to-trimify",
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
    title: "Sign up to Trimify - The Ultimate URL Shortener",
    description: "Create your Trimify account to shorten and manage links with analytics.Also get a seperate dashboard for url management.",
    images: ["/og-image.png"],
  },
};
const page = () => {
  return (
    <div>
      <Signup/>
    </div>
  )
}

export default page
