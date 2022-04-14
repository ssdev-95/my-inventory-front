import { useState, ChangeEvent, FormEvent } from "react"
import { ModalBase, Overlay, Form } from "./base"

import { api } from "services/api"
import { useProduct } from "contexts"

import { IProduct } from "../../types"

interface IModalProps {
  isOpen: boolean;
	toggle: ()=>void;
}

type ChangeFunction = ChangeEvent<HTMLInputElement | HTMLSelectElement>

type Product = Omit<IProduct, 'id' | 'owner_id'>

const initialValue = {
  name:"", category:"", expiration:"", quantity:""
}

function RegisterProductModal({ toggle, isOpen }: IModalProps) {
  const [product, setProduct] = useState<Product>(initialValue)
	const { products, setProducts } = useProduct()

	function cleanUp() {
		setProduct(initialValue)		
		setTimeout(toggle, 1500)
	}

	async function submit(e: FormEvent) {
	  e.preventDefault()

		const { data } = await api.post("/products", product)

		if(!Object.entries(data?.product).length) {
		  alert("Registry failed ;C")
		}

		setProducts((prev:IProduct[]) => [
		  ...prev,
			data?.product
		])

    const target = e.target as HTMLFormElement
		target.reset()
		cleanUp()
	}

	function handleChange(e: ChangeFunction) {
	  const temp = {
		  ...product,
	    [e.currentTarget.name]: e.currentTarget.value
		}

		setProduct(temp)
	}

  return (
	  <Overlay isOpen={isOpen}>
	    <ModalBase className="form">
			  <Form onSubmit={submit}>
				 <fieldset>
				  <legend>Product name</legend>
	  		  <input
					 placeholder="Salame"
	  			 required
	  		   type="text"
   				 name="name"
  			   maxLength={30}
	  			 onChange={handleChange}
  			  />
		 		 </fieldset>
				 <fieldset>
				  <legend>Expiration</legend>
				  <input
				    required
				    type="date"
			  	  name="expiration"
			  	  placeholder="2021-05-23"
					  max="3000-12-31"
				 	  onChange={handleChange}
				  />
				 </fieldset>
				 <fieldset>
				  <legend>Quantity</legend>
			  	<input
			  	 required
			  	 type="number"
			  	 name="quantity"
		  		 placeholder="999"
		  		 min={1}
		  		 max={999}
		  		 onChange={handleChange}
				  />
				 </fieldset>
				 <fieldset>
				  <legend>Category</legend>
	 		 	  <select name="category" defaultValue="default" onChange={handleChange} >
	  	 		   <option disabled value="default">Category</option>
		  		   <option value="food">Food</option>
	  				 <option value="hygiene">Hygiene</option>
		  			 <option value="cleaning">Cleaning</option>
		  			 <option disabled value="office">Office</option>
				  </select>
				 </fieldset>
				 <button type="button" onClick={cleanUp}>CANCEL</button>
				 <button type="submit">SUBMIT</button>
				</Form>
			</ModalBase>
		</Overlay>
	)
}

export { RegisterProductModal }
