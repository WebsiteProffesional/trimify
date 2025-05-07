import { redirect } from "next/navigation";
import connectDB from "@/app/lib/mongoose";
import { Url } from "@/app/models/Url";

export default async function ShortUrlPage({ params }) {
  const { shorturl } = params;
  console.log(shorturl)
  await connectDB();

  const existing = await Url.findOne({ shortUrl });

  if (!existing) {
    redirect("/not-found");
  }

  redirect(existing.longUrl);
}
