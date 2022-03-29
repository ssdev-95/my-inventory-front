import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

import nookies from "nookies"

export default NextAuth({
  providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		}),
		GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    })
  ],
	callbacks: {
		async signin({ user, account, profile }) {
			const cookies = nookies.get(ctx)
			console.log(cookies)
			return true
		},
		//async session(session) {},
		//async profile(session) {},
		//async jwt(session) {},
	}
})
