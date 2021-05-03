import {createContext, useState, ReactNode} from 'react'

interface EditModalContextData {
    isEditModalOpen: boolean;
    toggleEditModal: (product:any)=>void;
    toUpdate: any;
}

interface EditModalProps {
    children: ReactNode
}

export const EditModalContext = createContext({} as EditModalContextData)

export function EditModalProvider({children}: EditModalProps) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [toUpdate, setToUpdate] = useState({})

    const toggleEditModal = (product:any) => {
        setIsEditModalOpen(!isEditModalOpen)
        setToUpdate(product)
    }

    return (
        <EditModalContext.Provider value={{
            isEditModalOpen,
            toggleEditModal,
            toUpdate
        }}>
            {children}
        </EditModalContext.Provider>
    )
}