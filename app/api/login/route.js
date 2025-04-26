import { NextResponse } from "next/server";
import connectDB from "@/app/lib/moongose";
import Data from "@/app/models/Sign-up";
import bcrypt from "bcrypt";

export async function POST(request) {
  await connectDB();
  let data = await request.json();
  const { Username, Password } = data;

  try {
    const user = await Data.findOne({ Username });

    if (!user) {
      return NextResponse.json({
        success: false,
        error: "Invalid username or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(Password, user.Password);

    if (!isPasswordCorrect) {
      return NextResponse.json({
        success: false,
        error: "Invalid username or password",
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Error occurred during login",
    });
  }
}
