import {createContext, useState} from 'react'

import { EditModalContextData, ProviderProps } from '@/types'

export const EditModalContext = createContext({} as EditModalContextData)

export function EditModalProvider({children}: ProviderProps) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [toUpdate, setToUpdate] = useState(null)

    const toggleEditModal = (product:any) => {
        setIsEditModalOpen(!isEditModalOpen)
        setToUpdate(product)
    }

    const updateProduct = async (updatedProduct:any) => {
        const product = {
            name: updatedProduct?.name,
            quantity: updatedProduct?.quantity,
            category: updatedProduct?.category,
            expirateon: String(updatedProduct?.expiration)
        }

        console.log(JSON.stringify(product))

        toggleEditModal(null)
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