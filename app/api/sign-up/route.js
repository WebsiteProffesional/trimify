import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongoose";
import bcrypt from "bcrypt";
import Data from "@/app/models/Sign-up";

export async function POST(req) {
  await connectDB();
  try {let data = await req.json();
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

    const hashpass = await bcrypt.hash(data.password, 12); // saltRounds = 12

    const newdata = await Data.create({
      FirstName: data.FirstName,
      LastName: data.LastName,
      Gmail: data.Gmail,
      Username: data.Username,
      Password: hashpass,
    });

    if (!newdata) {
      return NextResponse.json(
        { success: false, message: "User creation failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Sign-up API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
