import { ProductContext } from '../contexts/context'

interface ProductProps {
  product:ProductContext.Product
}

export function ProductCard({ product }:ProductProps) {
  const amountText = `${product.amount}${product.unity}`
  return (
	  <div className="flex flex-col flex-none h-18 w-[225px] p-2 rounded-md bg-[rgba(255,255,255,0.25)]">
		  <div className="flex flex w-full justify-between items-center">
    	  <strong className="text-white text-2xl">
				  {product.name}
				</strong>
	  		<p className="text-white">{amountText}</p>
			</div>
			<time className="text-white">
			  Expires at {product.expiration}
			</time>
		</div>
	)
}
