import { createContext, useState} from 'react';

import { ContactModalContextData, ProviderProps } from '@/Types'

export const ContactModalContext = createContext({} as ContactModalContextData)

export function ContactModalProvider({children}: ProviderProps) {
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