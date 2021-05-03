import { createContext, ReactNode, useState } from 'react'

interface AddProductModalContextData {
    isAddModalOpen: boolean;
    toggleModal: ()=>void;
}

interface AddProductModalProps {
    children: ReactNode
}

export const AddProductModalContext = createContext({} as AddProductModalContextData)

export function AddProductModalProvider({children}: AddProductModalProps) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    const toggleModal = () => {
        setIsAddModalOpen(!isAddModalOpen)
    }

    return (
        <AddProductModalContext.Provider value={{
            isAddModalOpen,
            toggleModal
        }}>
            {children}
        </AddProductModalContext.Provider>
    )
}