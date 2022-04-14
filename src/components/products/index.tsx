import { useMemo } from "react"
import { useProduct } from "../../contexts"
import { Base, Table, THead, TBody, Row } from "./base"
import { IProduct } from "../../types"

interface ProdProps {
  handler: () => void;
}

const beautify = (str: string) => {
  return str.split("-").reverse().join("/")
}

function Products({ handler }: ProdProps) {
  const { products, current } = useProduct()

	const filtered = useMemo<IProduct[]>(()=>{
	  const filterings = products
		  .filter((item:IProduct)=> item.category === current)

		return filterings.map((item:IProduct) => ({
		  ...item,
		  expiration: beautify(item.expiration)
	  }))
	},[current, products])

	function handleClick(id: string) {
	  const product = products.find((prod:IProduct) => prod.id === id)
		localStorage.setItem(
		  "@my_inventory:updating_item",
			JSON.stringify(product)
		)
		handler()
	}

  return (
		<Base>
		  <span>{ current }</span>
  		<Table>
  		  <THead>
  			  <Row>
  				  <th>Product</th>
	  				<th>Quantity</th>
	  				<th>Expiration</th>
  				</Row>
  			</THead>

  			<TBody>{filtered.map((item:IProduct)=>(
  			  <Row
					  key={item.id}
						onClick={() => handleClick(item.id)}
					>
  				  <td>{item.name}</td>
	  				<td>{item.quantity}</td>
	  				<td>{item.expiration}</td>
  				</Row>
  			))}</TBody>
  		</Table>
		</Base>
	)
}


export { Products }
