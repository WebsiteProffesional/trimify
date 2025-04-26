
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { signIn } from "next-auth/react";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, isNewUser }) {
      console.log({ user, account, profile, email, isNewUser });
      return true;
    },
  },
};

// VERY IMPORTANT: wrap it inside NextAuth()
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
