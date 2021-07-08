/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react"
import { useAuth } from 'src/hooks/useAuth'

import { database } from 'src/services/firebase'

import { Inventory } from "src/@types/inventory"

type FirebaseProducts = Record<string, {
    id: string;
    name: string;
    category: string;
    quantity: number;
    expiration: string;
    owner: string;
}>

export const ProductContext = createContext({} as Inventory.ProductContext)

export function ProductProvider({ children }: Inventory.ProviderProps) {
    const filters = ["Food", "Hygiene", "Cleaning"]
    const [ products, setProducts ] = useState<Inventory.Product[]|undefined>()
    const [currentSelection, setCurrentSelection] = useState(0)
    const { user } = useAuth()

    async function handleDeleteData(id: string) {
        if(id.trim()!=='') {
            const productRef = database.ref(`products/${id}`)

            await productRef.remove()
        }
        return
    }

    function handleIncreaseSelection() {
        if(currentSelection===2) {
            setCurrentSelection(0)
            return
        }

        setCurrentSelection(currentSelection+1)
        return
    }

    function handleDecreaseSelection() {
        if(currentSelection===0) {
            setCurrentSelection(2)
            return
        }

        setCurrentSelection(currentSelection-1)
        return
    }

    useEffect(()=>{
        const productsRef = database.ref('products')

        productsRef.on('value', (entry)=>{
            const firebaseProducts:FirebaseProducts = entry.val() ?? {}

            const parsedProducts = Object.entries(firebaseProducts)
            const filtered = parsedProducts.filter(item=>(item[1]).owner===user?.id)
            const myProducts = filtered.map(([key, item])=>({
                id: key,
                name: item.name,
                quantity: item.quantity,
                category: item.category,
                expiration: item.expiration
            }))
            setProducts(myProducts)
        })

        return ()=>{
            productsRef.off('value')
        }
    }, [user])

    return(
        <ProductContext.Provider value={{
            filters,
            products,
            currentSelection,
            handleIncreaseSelection,
            handleDecreaseSelection,
            handleDeleteData
        }}>
            {children}
        </ProductContext.Provider>
    )
}