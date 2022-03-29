import { Base, Table, Row } from "./base"

function Products() {
  return (
		<Base>
		  <span>Food</span>
  		<Table>
  		  <thead>
  			  <Row>
  				  <th>Product</th>
	  				<th>Quantity</th>
	  				<th>Expiration</th>
  				</Row>
  			</thead>

  			<tbody>
  			  <Row>
  				  <td>Salame</td>
	  				<td>500</td>
	  				<td>2021-05-12</td>
  				</Row>
  			</tbody>
  		</Table>
		</Base>
	)
}


export { Products }
