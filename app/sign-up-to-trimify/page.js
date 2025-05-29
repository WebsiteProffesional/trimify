import React from 'react'
import Signup from "../components/Signup"
export const metadata = {
  title: "Sign up to Trimify - The Ultimate URL Shortner",
  description: "Create your Trimify account to shorten and manage links with analytics.Also get a seperate dashboard for url management.",
  alternates: {
    canonical: "/sign-up-to-trimify"
  },
  openGraph: {
    title: "Sign up to Trimify - The Ultimate URL Shortner",
    description:
      "Create your Trimify account to shorten and manage links with analytics.Also get a seperate dashboard for url management.",
    url: "/",
  },
    twitter: {
    card: "summary_large_image",
    title: "Sign up to Trimify - The Ultimate URL Shortner",
    description:
      "Create your Trimify account to shorten and manage links with analytics.Also get a seperate dashboard for url management.",
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
