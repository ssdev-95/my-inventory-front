import { createContext, ReactNode, useState } from 'react';

interface AddProductModalContextContextData {
    isAddProductModalOpen: boolean;
    openCloseAddProductModal: () => void;
    addProduct: (params) => void;
    Products: object[];
}

interface AddProductModalProps {
    children: ReactNode
}

export const AddProductModalContext = createContext({} as AddProductModalContextContextData)

export function AddProductModalProvider({children}: AddProductModalProps) {
    const [ isAddProductModalOpen, setIsProductModalOpen ] = useState(false)
    const [Products, setProducts] = useState(null)

    const openCloseAddProductModal = () => {
        window.addEventListener('click', event => {
            event.preventDefault()
        })
        setIsProductModalOpen(!isAddProductModalOpen)
    }
    
    const addProduct = (product) => {
        setProducts(product)
    }

    return (
        <AddProductModalContext.Provider value={{
            isAddProductModalOpen,
            addProduct,
            openCloseAddProductModal,
            Products
        }}>
            {children}
        </AddProductModalContext.Provider>
    )
}