import { useState } from "react"
import type { NextPage, GetServerSideProps } from "next"
import { useSession, getSession } from "next-auth/react"
import nookies from "nookies"
import { useRouter } from "next/router"
import Head from "next/head"

import { LoginModal } from "../components/modal/login-modal"
import { api } from "../services/api"
import { HomeContainer } from "../globals"

const Home: NextPage = () => {
  const [isLoginModalOpen, setIsLoginModal] = useState(false)
	const router = useRouter()
	const { data: session } = useSession()

	const handleClick = () => {
    if (!session ) {
		  setIsLoginModal(prev=>!prev)
		} else {
		  router.push("/dashboard")
		}
	}

  return (
		 <HomeContainer>
      <Head>
        <meta
				  name="description"
					content="Kitchens management made easy."
				/>
				<title>MyInventory&trade;</title>
      </Head>
			<h1>MyInvemtory</h1>
			<button
			  className="login-button"
				onClick={handleClick}
			>
			  { session ? "Go to Dashboard" : "Login to use" }
			</button>
			<LoginModal
			  isOpen={isLoginModalOpen}
				toggle={()=>setIsLoginModal(prev=>!prev)}
			/>
		</HomeContainer>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const endpoint = process.env.API_ENDPOINT as string;
	const { req } = ctx;
  const session = await getSession({ req })

	if(session) {
  	const { data } = await api.post(`${endpoint}authenticate`, {
  	  login: session?.user.name,
  		email: session?.user.email
  	})

		nookies.set(ctx, "@my_inventory:api_token", data?.token)
	}

  return { props : {} }
}

export default Home
