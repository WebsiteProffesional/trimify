import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongoose";
import { Url } from "@/app/models/Url";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const fullShortUrl = `${process.env.NEXT_PUBLIC_HOST_URL}/${data.shortUrl}`;
    const { username, longUrl, shortUrl, time, date, analytics } = data;
    // const ShortUrl= `${process.env.NEXT_PUBLIC_HOST_URL}/${shortUrl}`
    // Check if shortUrl already exists (for everyone)
    const existing = await Url.findOne({ shortUrl });
    if (existing) {
      return NextResponse.json(
        { error: "Short URL already taken!" },
        { status: 409 }
      );
    }

    const newUrl = new Url({
      username: username || "guest", // null = public user
      longUrl: longUrl,
      shortUrl: shortUrl,
      fullShortUrl: fullShortUrl,
      time: time,
      date: date,
      analytics: analytics,
    });

    await newUrl.save();

    return NextResponse.json({
      message: "Short URL created successfully",
      shortUrl: `${process.env.NEXT_PUBLIC_HOST_URL}/${shortUrl}`,
    });
  } catch (error) {
    return NextResponse.json({ error: "Server Error try again later" }, { status: 500 });
  }
}
