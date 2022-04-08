import { useMemo } from "react"
import { useProduct } from "../../contexts"
import { Base, Table, THead, TBody, Row } from "./base"

interface ProdProps {
  handler: () => void;
}

function Products({ handler }: ProdProps) {
  const { products, current } = useProduct()

	const filtered = useMemo(()=>{
	  const filterings = products
		  .filter(item=>item.category === current)

		return filterings
	},[current, products])

	function handleClick(id: string) {
	  const product = products.find(prod => prod.id === id)
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

  			<TBody>{filtered.map(item=>(
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
