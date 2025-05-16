import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
    },
    LastName: {
      type: String,
    },
    FullName:{
      type:String,
    },
    Username: {
      type: String,
    },
    Gmail: {
      type: String,
      // sparse: true,
    },
    Password: {
      type: String,
    },
  
    Name: {
      type: String,
    },
    Image: {
      type: String,
    },
    Provider: {
      type: String, // 'credentials' or 'google'
    },
  },
  { timestamps: true }
);

const Data = mongoose.models.loggedUsers || mongoose.model("loggedUsers", UserSchema);

export default Data;
