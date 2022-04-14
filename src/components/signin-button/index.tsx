import { ButtonHTMLAttributes } from "react"
import { signIn, useSession } from "next-auth/react"
import { ButtonBase } from "./base"

type BProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	provider: string;
	background: string;
	toggle: ()=>void;
}

function SigninButton({ provider, toggle, ...props }: any) {
	const src = `/icons/${provider.toLowerCase()}.svg`

	function login() {
	  toggle()
		setTimeout(() => signIn(`${provider.toLowerCase()}`), 1500)
	}

  return (
		<ButtonBase
		  { ...props }
			onClick={login}
			disabled={provider === "Google"}
		>
		  <img
			  src={src}
				alt="social icon"
			/>
		  Signin with { provider }
		</ButtonBase>
	)
}

export { SigninButton }
