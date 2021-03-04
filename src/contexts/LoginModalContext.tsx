import {createContext, useState, ReactNode} from 'react'

interface LoginModalContextData {
    isLoginModalOpen: boolean;
    openCloseLoginModal: ()=>void;
}

interface LoginModalProps {
    children: ReactNode
}

export const LoginModalContext = createContext({} as LoginModalContextData)

export function LoginModalProvider({children}: LoginModalProps) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    const openCloseLoginModal = () => {
        window.addEventListener('click', event => {
            event.preventDefault()
        })
        setIsLoginModalOpen(!isLoginModalOpen)
    }

    return (
        <LoginModalContext.Provider value={{
            isLoginModalOpen,
            openCloseLoginModal
        }}>
            {children}
        </LoginModalContext.Provider>
    )
}