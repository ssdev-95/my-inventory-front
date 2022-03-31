import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { Base } from "./base"

interface HeaderProps {
  toggle: ()=>void;
}

function Header({ toggle }: HeaderProps) {
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
		 <button className="add-button" onClick={toggle}>
		   <span>+</span>
		 </button>
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
