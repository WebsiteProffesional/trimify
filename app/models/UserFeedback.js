import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  Email: String,
  Username: String,
  Feedback: String,
  blogPageNo:Number,
  
}, { timestamps: true });

// Avoid model overwrite in dev
export default mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);