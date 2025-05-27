import Generate from "../components/Generate"
export const metadata = {
  title: "Generate Short URLs for Free - Trimify",
  description: "Paste your long URL and generate a short link instantly using Trimify.",
  alternates: {
    canonical: "/generate-shortUrl"
  }
}
const page = () => {
  return (
    <Generate />
  )
}

export default page

