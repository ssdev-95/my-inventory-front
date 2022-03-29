import { ButtonHTMLAttributes } from "react"
import { useRouter } from "next/router"
import { signIn, useSession } from "next-auth/react"
import { ButtonBase } from "./base"

type BProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	provider: string;
	background: string;
	toggle: ()=>void;
}

function SigninButton({ provider, toggle, ...props }: any) {
	const src = `/icons/${provider.toLowerCase()}.svg`

	const { data: session } = useSession()
	const router = useRouter()

	function login() {
	  toggle()
		setTimeout(()=>{
			if (session) {
				router.push("/dashboard")
				return
			}

			signIn(`${provider.toLowerCase()}`)
		}, 2000)
	}

  return (
		<ButtonBase { ...props } onClick={login} >
		  <img
			  src={src}
				alt="social icon"
			/>
		  Signin with { provider }
		</ButtonBase>
	)
}

export { SigninButton }
