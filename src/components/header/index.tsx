import { useSession } from "next-auth/react"
import { Base } from "./base"

function Header() {
  const { data: session } = useSession()

  return (
	  <Base>
		 <img
		   src="/icons/favicon.svg"
			 alt="app logo"
		 />
		 <div>
  		  <img
  			  src={session?.user.image}
  				alt={session?.user.name}
  			/>
  			<p>{session?.user.name}</p>
			</div>
		</Base>
	)
}

export { Header }
