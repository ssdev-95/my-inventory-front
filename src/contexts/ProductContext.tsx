/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react"
import { useAuth } from 'src/hooks/useAuth'

import { database } from 'src/services/firebase'

import { Inventory } from "src/@types/inventory"

type FirebaseProducts = Record<string, Inventory.Product>

export const ProductContext = createContext({} as Inventory.ProductContext)

export function ProductProvider({ children }: Inventory.ProviderProps) {
    const [ products, setProducts ] = useState<Inventory.Product[]|undefined>()
    const { user } = useAuth()

    function handleRetrieveData() {
        const productsRef = database.ref('products')

        productsRef.on('value', (entry)=>{
            const firebaseProducts:FirebaseProducts = entry.val() ?? {}

            const parsedProducts = Object.entries(firebaseProducts)

            if(parsedProducts && parsedProducts.length>0) {
                // To resolve filter product list that comes from database tomorrow :D
                const items = parsedProducts.filter((item) => item[1].owner===user?.id)
                console.log(parsedProducts)
                // if (items) {
                //     setProducts(items)
                // }
            }

            return ()=>{
                productsRef.off('value')
            }
        })
    }

    async function handleDeleteData(id: string) {
        if(id.trim()!=='') {
            const productRef = database.ref(`products/${id}`)

            await productRef.remove()
        }
        return
    }

    useEffect(()=>{
        handleRetrieveData()
    }, [])

    useEffect(()=>{
        console.log(products)
    }, [products])

    return(
        <ProductContext.Provider value={{
            products,
            handleRetrieveData,
            handleDeleteData
        }}>
            {children}
        </ProductContext.Provider>
    )
}