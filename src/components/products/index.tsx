import { useMemo } from "react"
import { useProduct } from "../../contexts"
import { Base, Table, Row } from "./base"

function Products() {
  const { products, current } = useProduct()

	const filtered = useMemo(()=>{
	  const filterings = products
		  .filter(item=>item.category === current)

		return filterings
	},[current, products])

  return (
		<Base>
		  <span>{ current }</span>
  		<Table>
  		  <thead>
  			  <Row>
  				  <th>Product</th>
	  				<th>Quantity</th>
	  				<th>Expiration</th>
  				</Row>
  			</thead>

  			<tbody>{filtered.map(item=>(
  			  <Row id={item.id}>
  				  <td>{item.name}</td>
	  				<td>{item.quantity}</td>
	  				<td>{item.expiration}</td>
  				</Row>
  			))}</tbody>
  		</Table>
		</Base>
	)
}


export { Products }
