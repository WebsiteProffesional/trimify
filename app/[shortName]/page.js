import { redirect } from "next/navigation";
import connectDB from "@/app/lib/mongoose";
import { Url } from "@/app/models/Url";
import { UAParser } from "ua-parser-js";
import { headers } from "next/headers";
import bcrypt from "bcrypt";

export default async function Page({ params }) {
  const headersList = headers();
  let ip = headersList.get("x-forwarded-for")?.split(",")[0].trim();

  if (!ip || ip === "::1" || ip === "127.0.0.1") {
    ip = "103.255.4.85"; // fallback IP for local testing
  }

  const hashedIP = bcrypt.hashSync(ip, 10);

  const locationRes = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=441aeb1a519e46628e5b3fdbb18579c4&ip=${ip}`
  );
  const locationData = await locationRes.json();

  const city = locationData.city ?? "City not found";
  const flag = locationData.country_flag ?? "Region not found";
  const country = locationData.country_name ?? "Country not found";
  const CountryCode = locationData.country_code3 ?? "Country code not found";

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

  let urlDoc = existing;

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
            countryCode: CountryCode,
            countryName: country,
            IP: hashedIP,
          },
        },
      },
      { new: true }
    );
  }

  redirect(urlDoc.longUrl);
}
