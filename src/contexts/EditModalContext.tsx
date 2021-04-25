import {createContext, useState, ReactNode} from 'react'

interface EditModalContextData {
    isEditModalOpen: boolean;
    toggleEditModal: ()=>void;
}

interface EditModalProps {
    children: ReactNode
}

export const EditModalContext = createContext({} as EditModalContextData)

export function EditModalProvider({children}: EditModalProps) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const toggleEditModal = () => {
        setIsEditModalOpen(!isEditModalOpen)
    }

    return (
        <EditModalContext.Provider value={{
            isEditModalOpen,
            toggleEditModal
        }}>
            {children}
        </EditModalContext.Provider>
    )
}