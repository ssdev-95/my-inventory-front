import { createContext, ReactNode, useState } from 'react';

// interface ProductProps {
//     id: string;
//     name: string;
//     quantity: number;
//     category: string;
//     expiration: number;
// }

interface AddProductModalContextData {
    isAddModalOpen: boolean;
    toggleModal: ()=>void;
    submit: (data:any)=>void;
    deleteEntry: (id:string)=>void;
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

    const submit = (data: any) => {
        const { name, category, quantity, expiration } = data

        const product = {
            name: name,
            category: category,
            expirateon: Date.parse(expiration),
            quantity: quantity
        }

        console.log(product)

        toggleModal()
    }

    const deleteEntry = (id:string) => {
        console.log(id)
    }

    return (
        <AddProductModalContext.Provider value={{
            isAddModalOpen,
            toggleModal,
            submit,
            deleteEntry
        }}>
            {children}
        </AddProductModalContext.Provider>
    )
}