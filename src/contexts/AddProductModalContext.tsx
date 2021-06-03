import { createContext, useState } from 'react'
import { useRouter } from 'next/router'

import { Controller } from '@/services/db/DBController'

import { AddProductModalContextData, ProviderProps, Product } from '@/types'

export const AddProductModalContext = createContext({} as AddProductModalContextData)

export function AddProductModalProvider({children}: ProviderProps) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const router = useRouter()

    const toggleModal = () => {
        setIsAddModalOpen(!isAddModalOpen)
    }

    const submit = (data:any) => {
        const { name,  category, quantity, expiration } = data
        const product: Product = {
            name: name,
            quantity: Number(quantity),
            category: category,
            expiration: expiration
        }

        Controller.set(product)
            .then(res=>alert('Sucess'))
            .catch(err=>console.log(err))
        
        toggleModal()
        router.push('/')
    }

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