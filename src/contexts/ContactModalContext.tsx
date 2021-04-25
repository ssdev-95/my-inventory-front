import {ReactNode, createContext, useState} from 'react';

interface ContactModalContextData {
    isContactModalOpen: boolean;
    toggleContactModal: ()=>void;
}

interface AddProductModalProps {
    children: ReactNode;
}

export const ContactModalContext = createContext({} as ContactModalContextData)

export function ContactModalProvider({children}: AddProductModalProps) {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    const toggleContactModal = () => {
        setIsContactModalOpen(!isContactModalOpen)
    }

    return (
        <ContactModalContext.Provider value={{
            isContactModalOpen,
            toggleContactModal
        }}>
            {children}
        </ContactModalContext.Provider>
    )
}