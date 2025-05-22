import mongoose from 'mongoose';
const UrlSchema = new mongoose.Schema({
  username: { type: String, default: null },
  longUrl: { type: String, required: true },
  shortName: { type: String, required: true, unique: true },
  fullShortUrl: { type: String, required: true },
  time: String,
  date: String,
  clicks: {
    type: Number,
    default: 0,
  },
  analytics: [
    {
      timestamp: { type: String, default: null },
      Browser: { type: String, default: null },
      Device: { type: String, default: null },
      City: { type: String, default: null },
      countryFlag: { type: String, default: null },
      countryCode: { type: String, default: null },
      countryName: { type: String, default: null },
      IP: { type: String, default: null },
    }
  ],
});
export const Url = mongoose.models.Url || mongoose.model("Url", UrlSchema);