import { ButtonHTMLAttributes } from "react"
import { Base } from "./base"

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>
type TabButtonProps = ButtonAttributes & {
  caregory: string;
}

function TabButton({ category, ...props }: TabButtonProps) {
  return (
	  <Base { ...props }>
		  <img
			  src={`/icons/${category}.svg`}
				alt={`${category}_icon`}
			/>
		</Base>
	)
}

export { TabButton }
