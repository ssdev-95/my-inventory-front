import { useState, ChangeEvent, useRef, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { ProductCard } from '../components/product-card'
import { useAuth } from '../contexts/auth'
import { useProduct } from '../contexts/product'

export function Home() {
  const { user } = useAuth()

	if(!user) {
	  return (
		  <Navigate to="/" />
    )
  }

	const { products, retrieveProducts } = useProduct()
	const selectRef = useRef<HTMLSelectElement>(null)
	const [category, setCategory] = useState('unselected')

	function formatCategory() {
	  if(category !== 'unselected') {
		  const firstLetter = category[0]
			const restLetters = category.split('').filter(
			  letter => letter !== firstLetter
			)
		  return `${firstLetter.toUpperCase()}${restLetters.join((''))}`
		}

		return category
	}

	function handleChangeSelection(ev:ChangeEvent<HTMLSelectElement>) {
	  setCategory(ev.target.value)
	}

	function handleClearSelection() {
  	setCategory('unselected')
		selectRef!.current!.value = 'unselected'
	}

	useEffect(() => {
	  console.log('ima logged in')
	  retrieveProducts(user.id).catch(
		  err => console.log(err)
		)
	}, [])

  const hasCategorySelected = category !== 'unselected'
	const filteredProducts = hasCategorySelected ? products.filter((product) => product.category === category) : products

  return (
	  <div className="flex-1 flex flex-col w-full">
		  <div className="flex-1 w-[1100px] max-w-full flex flex-col items-center justify-start gap-6 p-6">
  		  <label
				  htmlFor="category"
				  className="h-10 w-[175px] bg-blue-500 flex items-center justify-start px-4 mr-auto relative rounded-md"
				>
				  <p className="text-white absolute left-3">
					  {(category !== "unselected") ? formatCategory() : 'Select a category'}
					</p>

					<p className={[
					  'text-white absolute right-3',
					  hasCategorySelected ? 'rotate-90' : ''
					].join(' ')}>
					  &gt;
					</p>

					<select
   				  id="category"
						ref={selectRef}
  				  className="opacity-0 h-full w-full"
  					defaultValue={category}
	  				onChange={handleChangeSelection}
	  			>
  	  		  <option
						  disabled
							defaultChecked
							value="unselected"
						>
		    		  Select a category
			    	</option>

	  			  <option value="food" >
						  Food
						</option>

	  		  	<option value="cleaning" >
						  Cleaning
						</option>

   			  	<option value="hygiene" >
						  Hygiene
						</option>
		  	  </select>

					{hasCategorySelected && (
					  <button
						  className="bg-transparent text-white font-bold absolute right-0 translate-x-6"
							onClick={handleClearSelection}
						>
					    x
					  </button>
					)}
  			</label>

				<div className="w-full flex-1 flex mb:flex-col flex-wrap gap-6 justify-start items-start">
				  {filteredProducts.map((product) => (
					  <ProductCard
						  key={product.id}
							product={product}
						/>
				  ))}
				</div>
			</div>
		</div>
	)
}
