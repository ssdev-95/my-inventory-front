import {createContext, useEffect, useState} from 'react'

import { Controller } from '@/services/db/DBController'

import { EditModalContextData, ProviderProps, Product } from '@/types'

export const EditModalContext = createContext({} as EditModalContextData)

export function EditModalProvider({children}: ProviderProps) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [toUpdate, setToUpdate] = useState<any>(null)

    const toggleEditModal = (product?:any) => {
        setIsEditModalOpen(!isEditModalOpen)
        setToUpdate(product)
    }

    const updateProduct = (data:any) => {
        const product:Product = {
            name: data?.name,
            quantity: data?.quantity,
            category: data?.category,
            expiration: String(data?.expiration)
        }

        Controller.update(toUpdate?.id, product)
            .then(()=>alert('Success!'))
            .catch((err)=>alert(`Failed, ${err}`))

        toggleEditModal()
    }

    return (
        <EditModalContext.Provider value={{
            isEditModalOpen,
            toggleEditModal,
            updateProduct,
            toUpdate
        }}>
            {children}
        </EditModalContext.Provider>
    )
}