import { useState, useEffect, useMemo } from "react"
import { useSession } from "next-auth/react"
import { api } from "../../services/api"
import { Base, Table, Row } from "./base"

import { IProduct } from "../../types"

interface ProductsProps {
  current: string
}

function Products({ current }: ProductsProps) {
  const { data: session } = useSession()
  const [products, setProducts] = useState<IProduct[]>([])

	useEffect(()=>{
	 if (session) {
	  api
		 .get("/products")
		 .then(({data})=>setProducts(data.products as IProduct[]))
		 .catch(err => {
		   throw err
	   })
   }
	}, [])

	const filtered = useMemo(()=>{
	  const filterings = products
		  .map(item=>item.category === current)

		return filterings
	},[current])

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
