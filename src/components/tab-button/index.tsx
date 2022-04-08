import { useMemo, ButtonHTMLAttributes } from "react"

import { useProduct } from "contexts"
import { Base } from "./base"

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>
type TabButtonProps = ButtonAttributes & {
  category: string;
}

function TabButton({ category, ...props }: TabButtonProps) {
	const { current } = useProduct()

	const isActive = useMemo(()=>{
	  return (current === category);
	}, [current])

  return (
	  <Base { ...props }>
		  {isActive ? (
			  <img
				  src={`/icons/${category}-active.svg`}
					alt={`${category}_icon`}
				/>
			) :(
  		  <img
  			  src={`/icons/${category}.svg`}
	  			alt={`${category}_icon`}
		  	/>
			)}
		</Base>
	)
}

export { TabButton }
