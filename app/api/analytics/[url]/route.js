import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongoose";
import { Url } from "@/app/models/Url";
export async function GET(request, { params }) {
  let shortName = await params.url;
  await connectDB();
  const urlDoc = await Url.findOne({ shortName }).select("analytics");
  const click=await Url.findOne({ shortName }).select("clicks");

  if (!urlDoc || !click) {
    return NextResponse.json({ message: "No data found" }, { status: 404 });
  } else {
    return NextResponse.json(
      {analytics:urlDoc.analytics,
      clicks:click.clicks},
      { status: 200 }
    );
  }
}


