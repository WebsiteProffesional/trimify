import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongoose";
import Feedback from "@/app/models/UserFeedback";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export async function POST(request) {
  let data = await request.json();
  let email = data.Email;
  let feedback = data.Feedback;
  let username = data.Username;
  let pageNo = data.blogPageNo;
  console.log(data);
  await connectDB();
  let newFeedback = await Feedback.create({
    Email: email,
    Username: username,
    Feedback: feedback,
    blogPageNo: pageNo,
  });
  console.log("Data inserted");
  return NextResponse.json({
    data: newFeedback,
    status: 200,
  });
}
export async function GET(req) {
  const blog = new URL(req.url);
  const SearchParams = new URLSearchParams(blog.searchParams);
  const blogPageNo = SearchParams.get("blogPageNo");

  await connectDB();
  const feedback = await Feedback.find({ blogPageNo: blogPageNo });

  return NextResponse.json({
    Feedback: feedback,
    success: true,
  });
}
