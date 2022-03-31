import {
  createContext, useContext, useState,
	Dispatch, SetStateAction, ReactNode
} from "react"
import { IProduct } from "../types"

interface ContextProps {
  current: string;
	products: IProduct[];
	
	setCurrent: Dispatch<SetStateAction<string>>
	setProducts: Dispatch<SetStateAction<IProduct[]>>
}

const ProductsContext = createContext({} as any)

function ProductsProvider({ children }: any) {
  const [products, setProducts] = useState<IProduct[]>([])
	const [current, setCurrent] = useState("food")

  return (
	  <ProductsContext.Provider value={{
		  current, products,
			setCurrent, setProducts
		}}>
		  { children }
		</ProductsContext.Provider>
	)
}

function useProduct() {
  return useContext(ProductsContext)
}

export { ProductsProvider, useProduct }
