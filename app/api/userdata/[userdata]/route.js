// app/api/userdata/[userdata]/route.js

import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongoose";
import { Url } from "@/app/models/Url";

export async function GET(request, ) {
  try {
    await connectDB();
        // Get the dynamic part of URL (userdata) manually
        const { pathname } = new URL(request.url);
        const parts = pathname.split("/");
        const username = parts[parts.length - 1];
       
    

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    const urls = await Url.find({ username:username });

    return NextResponse.json({ urls });
  } catch (error) {
    console.error("Error fetching URLs:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
export async function PUT(request){
  let identifier= await request.json()
 
  return NextResponse.json(identifier)
}
export async function DELETE(request) {
  
  try {
    await connectDB();
    const { pathname } = new URL(request.url);
    const parts = pathname.split("/");
    const id = parts[parts.length - 1];
    let shortname=await request.json()
   
    await Url.deleteOne({ shortName:shortname.shortName });
    return NextResponse.json({ message: "URL deleted successfully" }, { status: 200 });
    }catch(err){
     
      return NextResponse.json({ error: "Server Error" }, { status: 500 });
    }
    return NextResponse.json({ message: "URL deleted successfully" }, { status: 200 });

  }
