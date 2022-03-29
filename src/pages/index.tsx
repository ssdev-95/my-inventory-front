import { useState } from "react"
import type { NextPage } from "next"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import Head from "next/head"

import { LoginModal } from "../components/modal/login-modal"
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

export default Home
