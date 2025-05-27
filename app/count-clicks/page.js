import Counter from "../components/Counter"
export const metadata = {
  title: "Count Clicks on URL – Trimify",
  description: "Track how many times your shortened URL was clicked using Trimify's analytics.",
  alternates: {
    canonical: "/count-clicks"
  }
}
const page = () => {
  return (
   <Counter/>
  )
}

export default page
