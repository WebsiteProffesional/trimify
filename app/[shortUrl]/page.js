// app/[shortUrl]/page.js
"use client";
import { redirect } from "next/navigation";
import connectDB from "@/app/lib/mongoose";
import { Url } from "@/app/models/Url";
import { useEffect } from "react";

export default async function ShortUrlPage({ params }) {
  const { shortUrl } = params;
 

  await connectDB();

  const existing = await Url.findOne({ shortUrl });

  if (!existing) {
    redirect("/not-found");
  }

  redirect(existing.longUrl);
}
