import {createContext, useState, ReactNode} from 'react'

interface LoginModalContextData {}

interface LoginModalProps {
    children: ReactNode
}

export const LoginModalContext = createContext({} as LoginModalContextData)

export function LoginModalProvider({children}: LoginModalProps) {

    return (
        <LoginModalContext.Provider value={{}}>
            {children}
        </LoginModalContext.Provider>
    )
}