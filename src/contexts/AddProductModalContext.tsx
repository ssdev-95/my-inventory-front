import { createContext, ReactNode, useState } from 'react';

interface ProductProps {
    id: string;
    name: string;
    quantity: number;
    category: string;
    expiration: string;
}

interface AddProductModalContextContextData {
    isAddProductModalOpen: boolean;
    openCloseAddProductModal: () => void;
    addProduct: (params) => void;
    deleteProduct: (params) => void;
    Products: ProductProps[];
}

interface AddProductModalProps {
    children: ReactNode
}

export const AddProductModalContext = createContext({} as AddProductModalContextContextData)

export function AddProductModalProvider({children}: AddProductModalProps) {
    const [ isAddProductModalOpen, setIsProductModalOpen ] = useState(false)
    const [Products, setProducts] = useState([])

    const openCloseAddProductModal = () => {
        window.addEventListener('click', event => {
            event.preventDefault()
        })
        setIsProductModalOpen(!isAddProductModalOpen)
    }
    
    const addProduct = (product) => {
        setProducts([...Products, product])
    }

    const deleteProduct = (id: string) => {
        alert(`Product(${id}) will soon be removed`)
    }

    return (
        <AddProductModalContext.Provider value={{
            isAddProductModalOpen,
            addProduct,
            deleteProduct,
            openCloseAddProductModal,
            Products
        }}>
            {children}
        </AddProductModalContext.Provider>
    )
}