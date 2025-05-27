import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongoose";
import { Url } from "@/app/models/Url";

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.json();

    const fullShortUrl = `${process.env.NEXT_PUBLIC_HOST_URL}/${data.shortName}`;

    const { username, longUrl, shortName, time, date, analytics } = data;

    // Validate the input data
    const existing = await Url.findOne({ shortName });
 
    if (existing) {
      return NextResponse.json(
        { error: "Short URL already taken!" },
        { status: 409 }
      );
    }

    const newUrl = new Url({
      username: username || "guest", // null = public user
      longUrl: longUrl,
      shortName: shortName,
      fullShortUrl: fullShortUrl,
      time: time,
      date: date,
      clicks: 0,
      analytics: [],
    });
  
    await newUrl.save();

    return NextResponse.json({
      message: "Short URL created successfully",
      fullShortUrl: `${process.env.NEXT_PUBLIC_HOST_URL}/${shortName}`,
    });
  } catch (error) {
    console.error("Error creating short URL:", error);
    return NextResponse.json(
      { error: "Server Error try again later" },
      { status: 500 },
      {error: error.message }
    );
  }
}
