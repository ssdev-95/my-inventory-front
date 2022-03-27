import type { NextPage } from 'next'
import Head from 'next/head'
import { SigninButton } from "../components/signin-button"

const Home: NextPage = () => {
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
