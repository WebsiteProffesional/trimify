import { redirect } from "next/navigation";
import clientPromise from "../lib/db";

export default async function Page({ params }) {
  const { shortUrl } = await params;

  const client = await clientPromise;
  const db = client.db("Trimify");
  const collection = db.collection("URLS");

  const existing = await collection.findOne({ ShortUrl: shortUrl });

  if (!existing) {
    return (
      redirect('/not-found')
    );
  }

  // Redirect to the original long URL
  redirect(existing.LongUrl);
}
