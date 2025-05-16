import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/app/lib/mongoose";
import Data from "@/app/models/Sign-up";


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],  secret: process.env.JWT_SECRET, // Make sure this is set
  session: {
    strategy: "jwt", // Use JWT-based sessions
  },
  callbacks: {
  
    async signIn({ user, account, profile }) {
      await connectDB();

      if (account.provider === "google") {
        const existingUser = await Data.findOne({ Gmail: user.email });
        
        if (!existingUser) {
         let newuser= await Data.create({
            FullName: user.name,
            Gmail: user.email,  // Gmail me email daal diya
            Username:user.email.split("@")[0].toLowerCase(),
            Image: user.image,
            Provider: "google",
          })
      
        }
      }
     
      return true; // Allow login
    },

  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
