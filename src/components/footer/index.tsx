import { TabButton } from "../tab-button"
import { Base } from "./base"

import { useProduct } from "../../contexts"

function Footer() {
  const { current, setCurrent } = useProduct()

	const toggleCurrent = (categ: string) => {
	  setCurrent(categ)
	}

  return (
	  <Base>
		  <TabButton
			  category="food"
				className={current==="food" ? "active" : ""}
				onClick={()=>toggleCurrent("food")}
			/>
			<TabButton
			  category="hygiene"
				className={current==="hygiene" ? "active" : ""}
				onClick={()=>toggleCurrent("hygiene")}
			/>
			<TabButton
			  category="cleaning"
				className={current==="cleaning" ? "active" : ""}
				onClick={()=>toggleCurrent("cleaning")}
			/>
		</Base>
	)
}

export { Footer }
