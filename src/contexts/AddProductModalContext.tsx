import { createContext, useState, useEffect } from 'react'

import { AddProductModalContextData, ProviderProps } from '@/Types'

export const AddProductModalContext = createContext({} as AddProductModalContextData)

export function AddProductModalProvider({children}: ProviderProps) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [newProduct, setNewProduct] = useState(null)

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
        
        console.log(JSON.stringify(product))
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