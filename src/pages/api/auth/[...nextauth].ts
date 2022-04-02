import NextAuth, { Session, User } from "next-auth";
import { SignInOptions } from "next-auth/react";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const apiUri = process.env.API_ENDPOINT as string;
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
			/*try {
				const token = "nww8xh38h38fushjwqq"
				localStorage.setItem("@MyInventory:api-token", token)
        return true;
  		} catch {
			 return false;
		  }*/
	    return true;
    },
    async session({ session }: { session: Session; user: User; token: any }) {
			//const cookie = localStorage.getItem("@MyInventory:api-token")
			//console.log(cookie)
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
