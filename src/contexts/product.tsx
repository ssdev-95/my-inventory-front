import { productCol, getDocs } from '../services/firebase'
import { useContext, createContext, useState } from 'react'

import { DefaultContext, ProductContext } from './context'

//type FirebaseDTO = ProductContext.ProductDTO
type Product = ProductContext.Product
type ContextData = ProductContext.ContextData
type ProviderProps = DefaultContext.ProviderProps

const ProductCtx = createContext({} as ContextData)

export function ProductProvider({children}:ProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

	async function retrieveProducts(ownerid:string) {
	  const snap = await getDocs(productCol).catch(
		  err => console.log(err)
		)

		if(snap && snap.docs.length) {
		  const docs = snap.docs.map(doc => {
			  //console.log(doc)
			  return ({
  			  id: doc.id,
  				...doc.data()
		  	})
			})

			console.log(docs)
		} else {
		  console.log('Deu ruim')
		}

		setProducts([])
	}

  return (
	  <ProductCtx.Provider value={{
		  products,
			retrieveProducts
		}}>
		  {children}
		</ProductCtx.Provider>
	)
}

export function useProduct() {
  return useContext(ProductCtx)
}
