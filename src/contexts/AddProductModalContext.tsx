import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

import { AddProductModalContextData, ProviderProps } from '@/Types'

export const AddProductModalContext = createContext({} as AddProductModalContextData)

export function AddProductModalProvider({children}: ProviderProps) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [newProduct, setNewProduct] = useState(null)
    const router = useRouter()

    const toggleModal = () => {
        setIsAddModalOpen(!isAddModalOpen)
    }

    const submit = (data:any) => {
        setNewProduct(data)
        toggleModal()
    }

    const createProduct = async () => {
        const product = {
            name: newProduct?.name,
            quantity: newProduct?.quantity,
            category: newProduct?.category,
            expirateon: String(newProduct?.expiration)
        }
        
        try{
            const res = await fetch('http://localhost:3000/api/products', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(product)
            }) 
            router.push('/')
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        if(newProduct) createProduct()
    }, [newProduct])

    return (
        <AddProductModalContext.Provider value={{
            isAddModalOpen,
            toggleModal,
            submit
        }}>
            {children}
        </AddProductModalContext.Provider>
    )
}