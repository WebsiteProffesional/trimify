import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongoose";
import Data from "@/app/models/Sign-up";
import bcrypt from "bcrypt";
import jwt, { sign } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;
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
    const token = jwt.sign(
      {
        user: user._id,
        Username: Username,
      },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    return NextResponse.json({ success: true, token: token });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Error occurred during login",
    });
  }
}
