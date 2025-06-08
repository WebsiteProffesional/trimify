import { redirect } from "next/navigation";
import connectDB from "@/app/lib/mongoose";
import { Url } from "@/app/models/Url";
import { UAParser } from "ua-parser-js";
import { headers } from "next/headers";
import bcrypt from "bcrypt";

export default async function Page({ params }) {
  const headersList = headers();

  let ip =
    headersList.get("x-vercel-forwarded-for") || // Vercel-specific real IP
    headersList.get("x-forwarded-for")?.split(",")[0].trim() ||
    headersList.get("x-real-ip") ||
    "103.255.4.85"; // fallback for local dev

  const hashedIP = bcrypt.hashSync(ip, 10);

  // Get city using IP
  const locationRes = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=441aeb1a519e46628e5b3fdbb18579c4&ip=${ip}`,
    { cache: "no-store" } // Optional: disable caching to get fresh result
  );
  const locationData = await locationRes.json();

  const city = locationData.city ?? "City not found";
  const flag = locationData.country_flag ?? "Flag not found";
  const country = locationData.country_name ?? "Country not found";
  const countryCode = locationData.country_code3 ?? "Code not found";

  // Parse user agent
  const userAgent = headersList.get("user-agent") || "";
  const parser = new UAParser(userAgent);
  const deviceType = parser.getDevice().type ?? "Desktop";
  const browser = parser.getBrowser().name ?? "Unknown";

  const { shortName } = params;

  await connectDB();
  const existing = await Url.findOne({ shortName });

  if (!existing) {
    redirect("/not-found");
  }

  let urlDoc;

  if (existing.username !== "guest") {
    urlDoc = await Url.findOneAndUpdate(
      { shortName },
      {
        $inc: { clicks: 1 },
        $push: {
          analytics: {
            timestamp: new Date(),
            Browser: browser,
            Device: deviceType,
            City: city,
            countryFlag: flag,
            countryCode: countryCode,
            countryName: country,
            IP: hashedIP,
          },
        },
      },
      { new: true }
    );
  } else {
    urlDoc = await Url.findOneAndUpdate(
      { shortName },
      {
        $inc: { clicks: 1 },
      },
      { new: true }
    );
  }

  // Final redirection
  if (existing.username === "guest") {
    redirect(`/ad?url=${encodeURIComponent(urlDoc.longUrl)}`);
  } else {
    redirect(existing.longUrl);
  }
}
