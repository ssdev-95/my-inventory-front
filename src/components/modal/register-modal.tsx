import { useState, ChangeEvent, FormEvent } from "react"
import { ModalBase, Overlay } from "./base"

interface IModalProps {
  isOpen: boolean;
	toggle: ()=>void;
}

function ResisterProductModal({ toggle, isOpen }: IModalProps) {
  const [product, setProduct] = useState({})

	function cleanUp() {
	  const initialValue = {}
		setProduct(initialValue)
		toggle()
	}

	function submit(e: FormEvent) {
	  e.preventDefault()

		cleanUp()
	}

	function handleChange(e: ChangeEvent) {
	  const temp = { [e.currentTarget.name]: e.currentTarget.value }

		setProduct(temp)
	}

  return (
	  <Overlay isOpen={isOpen}>
	    <ModalBase>
			  <form onSubmit={submit}>
				 <input
				   type="text"
					 name="name"
					 onChange={handleChange}
				 />
				 <input
				   type="date"
					 name="expiration"
					 onChange={handleChange}
				 />
				 <input
				   type="number"
					 name="quantity"
					 onChange={handleChange}
				 />
				 <select name="category" onChange={handleChange} >
				   <option disabled selected value="">Categories</option>
				   <option value="food">Food</option>
					 <option value="hygiene">Hygiene</option>
					 <option value="cleaning">Clean6ing</option>
					 <option disabled value="office">Office</option>
				 </select>
				 <div>
				   <button type="button" onClick={cleanUp}>CANCEL</button>
					 <button type="submit">SUBMIT</button>
				 </div>
				</form>
			</ModalBase>
		</Overlay>
	)
}

export { ResisterProductModal }
