import {ReactNode, createContext, useState} from 'react';

interface ContactModalContextData {
    isContactModalOpen: boolean;
    toggle: ()=> void;
}

interface AddProductModalProps {
    children: ReactNode;
}

export const ContactModalContext = createContext({} as ContactModalContextData)

export function ContactModalProvider({children}: AddProductModalProps) {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    const toggle = () => {
        setIsContactModalOpen(!isContactModalOpen)
    }

    return (
        <ContactModalContext.Provider value={{
            isContactModalOpen,
            toggle
        }}>
            {children}
        </ContactModalContext.Provider>
    )
}