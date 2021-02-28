import { createContext, ReactNode, useState } from 'react';

interface AddProductModalContextContextData {
    isAddProductModalOpen: boolean;
    openCloseAddProductModal: () => void;
}

interface AddProductModalProps {
    children: ReactNode
}

export const AddProductModalContext = createContext({} as AddProductModalContextContextData)

export function AddProductModalProvider({children}: AddProductModalProps) {
    const [ isAddProductModalOpen, setIsProductModalOpen ] = useState(true)

    const openCloseAddProductModal = () => {
        window.addEventListener('click', event => {
            event.preventDefault()
        })
        setIsProductModalOpen(!isAddProductModalOpen)
    }

    return (
        <AddProductModalContext.Provider value={{
            isAddProductModalOpen,
            openCloseAddProductModal
        }}>
            {children}
        </AddProductModalContext.Provider>
    )
}