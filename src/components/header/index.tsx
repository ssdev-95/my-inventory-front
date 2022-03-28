import { useSession } from "next-auth/react"
import { Base } from "./base"

function Header() {
  const { data: session } = useSession()

  return (
	  <Header>
		  <img
			  src={session?.user.image}
				alt={session?.user.name}
			/>
			<p>{session?.user.name}</>
		</Header>
	)
}

export { Header }
