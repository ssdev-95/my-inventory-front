import { useMemo } from "react"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { Base } from "./base"

interface HeaderProps {
  toggle: ()=>void;
}

function Header({ toggle }: HeaderProps) {
  const { data: session } = useSession()
	const router = useRouter()

	const isLoggedIn = useMemo(()=> {
	  const _temp = (session !== undefined || session !== null)
	  return _temp;
	}, [session])

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
		 <button className="add-button" onClick={toggle}>
		   <span>+</span>
		 </button>
	   { isLoggedIn ? (
		   <div>
		 		  <img
			  	  onClick={logOut}
  		  	  src={`${session?.user?.image}`}
  		  		alt={`${session?.user?.name}`}
  		  	/>
  		  	<p>{`${session?.user?.name}`}</p>
			  </div>) : (
				  <div>
					  <img
						  src="/icons/discord.svg"
							alt="not logged"
						/>
					</div>
				)}
		</Base>
	)
}

export { Header }
