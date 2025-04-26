import { NextResponse } from "next/server";
import clientPromise from "../lib/db";

export const dynamic = "auto";

export async function POST(request) {
  // Handle CORS preflight manually
  const origin = request.headers.get("origin") || "*";

  const data = await request.json();
  const client = await clientPromise;
  const db = client.db("Trimify");
  const collection = db.collection("URLS");

  const existing = await collection.findOne({ ShortUrl: data.ShortUrl });
  const shortUrl = process.env.NEXT_PUBLIC_HOST_URL + "/" + data.ShortUrl;

  if (existing) {
    const response = NextResponse.json(
      { error: "The URL with this short name already exists" },
      { status: 409 }
    );
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  }

  await collection.insertOne(data);
  const response = NextResponse.json(shortUrl);
  response.headers.set("Access-Control-Allow-Origin", origin);
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
