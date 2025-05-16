import { NextResponse } from "next/server";
import { Collection } from "mongoose";
import connectDB from "@/app/lib/mongoose";
import bcrypt from "bcrypt";

import Data from "@/app/models/Sign-up";
export async function POST(req) {
  await connectDB();
  let data = await req.json();
  const existingUser = await Data.findOne({ Username: data.Username });
  if (existingUser) {
    return NextResponse.json({
      success: false,
      error: "Username already exists",
    });
  }

  const existingEmail = await Data.findOne({ Gmail: data.Gmail });
  if (existingEmail) {
    return NextResponse.json({ success: false, error: "Email already exists" });
  }
  let hashpass = await bcrypt.hash(data.password, 16);
  // Otherwise create the user

  let newdata = await Data.create({
    FirstName: data.FirstName,
    LastName: data.LastName,
    Gmail: data.Gmail,
    Username: data.Username.toLowerCase(),
    Password: hashpass,
  });
  if (!newdata) {
    return NextResponse.json(
      { success: false, message: "User already exists" },
      { status: 400 }
    );
  } else {
    return NextResponse.json({ success: true });
  }
}
