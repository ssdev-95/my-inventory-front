import {
  useState, useEffect, ChangeEvent, FormEvent
} from "react"
import { ModalBase, Overlay, Form } from "./base"

import { api } from "services/api"
import { useProduct } from "contexts"
import { IProduct } from "types"

interface IModalProps {
  isOpen: boolean;
	toggle: ()=>void;
}

function UpdateProductModal({ toggle, isOpen }: IModalProps) {
  const [product, setProduct] = useState<IProduct>({} as IProduct)
	const { products, setProducts } = useProduct()

	function cleanUp() {
	  const initialValue = {}
		setProduct(initialValue)		
		setTimeout(toggle, 1500)
	}

	async function submit(e: FormEvent) {
	  e.preventDefault()

		const { data } = await api.put("/products", product)

		if(!Object.entries(data?.product).length) {
		  alert("Registry failed ;C")
		}

		const updated = products.filter(prod => {
		  if (prod.id === product.id) {
			  return { ...product };
			}

			return prod;
		})

		setProducts(updated)
		cleanUp()
	}

	function handleChange(e: ChangeEvent) {
	  const temp = {
		  ...product,
	    [e.currentTarget.name]: e.currentTarget.value
		}

		setProduct(temp)
	}

	async function handleDelete() {
	  const { data } = await api.delete(`/products&id=${product?.id}`)
		  .catch(err => alert(err))

		if(data?.success) {
		  const filtered = products.filter(prod => prod.id !== product.id)
		}

		cleanUp()
		return;
	}

	useEffect(()=>{
	  const stored = localStorage.getItem("@my_inventory:updating_item")
    setProduct(JSON.parse(stored) as IProduct)
  }, [])

  return (
	  <Overlay isOpen={isOpen}>
	    <ModalBase className="form">
			  <Form
				  onSubmit={submit}
					className="update"
				>
				 <fieldset>
				  <legend>Product name</legend>
	  		  <input
					 placeholder="Salame"
	  			 required
	  		   type="text"
   				 name="name"
					 defaultValue={product?.name}
  			   maxLength="30"
	  			 onChange={handleChange}
  			  />
		 		 </fieldset>
				 <fieldset>
				  <legend>Expiration</legend>
				  <input
				    required
				    type="date"
			  	  name="expiration"
						defaultValue={product?.expiration}
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
					 defaultValue={product?.quantity}
		  		 min="1"
		  		 max="999"
		  		 onChange={handleChange}
				  />
				 </fieldset>
				 <fieldset>
				  <legend>Category</legend>
	 		 	  <select name="category" defaultValue={product?.category ?? "default"} onChange={handleChange} >
	  	 		   <option disabled value="default">Category</option>
		  		   <option value="food">Food</option>
	  				 <option value="hygiene">Hygiene</option>
		  			 <option value="cleaning">Cleaning</option>
		  			 <option disabled value="office">Office</option>
				  </select>
				 </fieldset>
				 <div className="actions">
				   <button type="button" onClick={cleanUp}>CANCEL</button>
				   <button type="button" onClick={handleDelete} className="del-btn">REMOVE</button>
				   <button type="submit">SUBMIT</button>
				 </div>
				</Form>
			</ModalBase>
		</Overlay>
	)
}

export { UpdateProductModal }
