import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/app/lib/mongoose";
import Data from "@/app/models/Sign-up";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account", 
        },
      },
      httpOptions: {
        timeout: 10000, 
      },
    }),
  ],
  secret: process.env.JWT_SECRET, 
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      await connectDB();

      
      if (account.provider === "google") {
        const existingUser = await Data.findOne({ Gmail: user.email });

        if (!existingUser) {
          await Data.create({
            FullName: user.name,
            Gmail: user.email,
            Username: user.email.split("@")[0],
            Image: user.image,
            Provider: "google",
          });
        }

       
        return true;
      }

    
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
