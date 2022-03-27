import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

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
	callbacks: {}
})
