import { FormEvent, useState } from 'react'

import { CButton } from 'src/components/Button'

import { useNavigation } from 'src/hooks/useNavigation'
import { useAuth } from 'src/hooks/useAuth'
import { database } from 'src/services/firebase'

import styles from './addproduct.module.scss'

export const CAddProduct = () => {
    const { user } = useAuth()
    const { changeCurrentComponent } = useNavigation()
    const [product, setProduct] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [category, setCategory] = useState('')
    const [expiration, setExpiration] = useState('')

    function clearFields() {
        setProduct('')
        setQuantity(0)
        setCategory('')
        setExpiration('')
    }

    async function handleSubmit(event: FormEvent)  {
        event.preventDefault()

        if(user) {
            const productsRef = database.ref('products')

            const newProduct = {
                name: product,
                quantity: quantity,
                category: category,
                expiration: expiration,
                owner: user.id
            }

            await productsRef.push(newProduct)

            clearFields()
            changeCurrentComponent('ProductList')
        }
    }
    
    return (
        <div className={styles.formcontainer}>
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Product name"
                  onChange={(e)=>setProduct(e.target.value)}
                  defaultValue={product}
                />
                <input
                  type="number"
                  placeholder="0"
                  onChange={(e)=>setQuantity(Number(e.target.value))}
                  defaultValue={quantity}
                />
                <select onChange={(e)=>setCategory(e.target.value)}>
                    <option defaultChecked disabled>Categories</option>
                    <option value="food">Food</option>
                    <option value="hygiene">Hygiene</option>
                    <option value="cleaning">Cleaning</option>
                </select>
                <input
                  type="date"
                  onChange={(e)=>setExpiration(e.target.value)}
                  defaultValue={expiration}
                />
                <CButton type="submit">
                    <span>Submit</span>
                </CButton>
            </form>
        </div>
    )
}