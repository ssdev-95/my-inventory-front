import {ReactNode, createContext, useState} from 'react';

interface ContactModalContextData {}

interface AddProductModalProps {
    children: ReactNode;
}

export const ContactModalContext = createContext({} as ContactModalContextData)

export function ContactModalProvider({children}: AddProductModalProps) {

    return (
        <ContactModalContext.Provider value={{}}>
            {children}
        </ContactModalContext.Provider>
    )
}