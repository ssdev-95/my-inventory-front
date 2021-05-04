import { createContext, ReactNode, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

interface AddProductModalContextData {
    isAddModalOpen: boolean;
    toggleModal: ()=>void;
    submit: (data:any)=>void;
}

interface AddProductModalProps {
    children: ReactNode
}

export const AddProductModalContext = createContext({} as AddProductModalContextData)

export function AddProductModalProvider({children}: AddProductModalProps) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [newProduct, setNewProduct] = useState(null)
    const router = useRouter()

    const toggleModal = () => {
        setIsAddModalOpen(!isAddModalOpen)
    }

    const submit = (data:any) => {
        setNewProduct(data)
        toggleModal()
    }

    const createProduct = async () => {
        const product = {
            name: newProduct?.name,
            quantity: newProduct?.quantity,
            category: newProduct?.category,
            expirateon: Date.parse(newProduct?.expiration)
        }
        
        try{
            const res = await fetch('http://localhost:3000/api/products', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(product)
            }) 
            router.push('/')
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        if(newProduct) createProduct()
        // if(newProduct) console.log(newProduct)
    }, [newProduct])

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