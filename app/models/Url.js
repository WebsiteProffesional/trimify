// models/Url.js

import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
  username: { type: String, default:null}, // null = public user
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  fullShortUrl:{type:String,required:true},
  time: String,
  date: String,
  analytics:Number,
},
  
);

export const Url = mongoose.models.Url || mongoose.model("Url", UrlSchema);
