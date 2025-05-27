import Login from "../components/login"
export const metadata = {
  title: "Login to Trimify - The Ultimate URL Shortner",
  description: "Log in to your Trimify account to access your dashboard and to create custom short links.",
  alternates: {
    canonical: "/login"
  }
  
}

const page = () => {
  return (
  <Login />
  )
}

export default page
