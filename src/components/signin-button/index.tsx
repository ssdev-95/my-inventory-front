import { ButtonHTMLAttributes } from "react"
import { signIn } from "next-auth/react"
import { ButtonBase } from "./base"

type BProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	provider: string;
	color: string;
	background: string;
}

function SigninButton({ provider, ...props }: any) {
	const src = `/icons/${provider.toLowerCase()}.svg`

	async function login() {
	  await signIn(`${provider.toLowerCase()}`)
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
