import { createContext, ReactNode, useState } from 'react';

interface ProductProps {
    id: string;
    name: string;
    quantity: number;
    category: string;
    expiration: string;
}

interface AddProductModalContextData {}

interface AddProductModalProps {
    children: ReactNode
}

export const AddProductModalContext = createContext({} as AddProductModalContextData)

export function AddProductModalProvider({children}: AddProductModalProps) {

    return (
        <AddProductModalContext.Provider value={{}}>
            {children}
        </AddProductModalContext.Provider>
    )
}