import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { Base } from "./base"

function Header() {
  const { data: session } = useSession()
	const router = useRouter()

	const logOut = () => {
	  signOut()

		setTimeout(()=>router.push("/"), 1500)
	}

  return (
	  <Base>
		 <img
		   src="/icons/favicon.svg"
			 alt="app logo"
		 />
		 <div>
  		  <img
				  onClick={logOut}
  			  src={session?.user.image}
  				alt={session?.user.name}
  			/>
  			<p>{session?.user.name}</p>
			</div>
		</Base>
	)
}

export { Header }
