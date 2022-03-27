import type { NextPage } from "next"
import Head from "next/head"
import { useSession } from "next-auth/react"
import { SigninButton } from "../components/signin-button"

const Home: NextPage = () => {
  const { data: session } = useSession()

	if (session) {
	  return (
		  <>
		    <img src={session?.user?.image} alt="user" />
			  <p>{session?.user?.login}</p>
		  </>
		)
	}

  return (
		 <>
      <Head>
        <meta
				  name="description"
					content="Kitchens management made easy."
				/>
				<title>MyInventory&trade;</title>
      </Head>
			<SigninButton
			  provider="Google"
				color="white"
				background="#a33"
			/>
			<SigninButton
			  provider="GitHub"
				color="white"
				background="#777"
			/>
			<SigninButton
			  provider="Discord"
				color="white"
				background="#33a"
			/>
		</>
	)
}

export default Home
