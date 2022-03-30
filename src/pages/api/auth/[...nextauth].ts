import NextAuth, { Session, User } from "next-auth";
import { SignInOptions } from "next-auth/react";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { setCookie } from "nookies";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }: SignInOptions) {
      const token = "nrv3r3r3v8rv8re8vvvvevn4n4884nd";
      setCookie(null, "@MyInventory:api-token", token);
      return true;
    },
    async session({ session }: { session: Session; user: User; token: any }) {
      return session;
    },
    // async profile(profile:Partial<CallbacksOptions<Profile, Account>>) {
    //   return profile;
    // },
    async jwt({ token }) {
      return token;
    },
  },
});
