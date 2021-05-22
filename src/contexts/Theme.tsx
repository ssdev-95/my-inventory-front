import { createContext, useState, useContext, useEffect } from 'react'

import { ThemeContextData, ProviderProps } from '@/Types'

const ThemeContext = createContext({} as ThemeContextData)

export const ThemeProvider = ({children}: ProviderProps) => {
    const [ theme, setTheme ] = useState('light')

    function toggleTheme() {
        theme==='light'? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')

        setTheme(localStorage.getItem('theme'))
    }

    useEffect(()=>{
        setTheme(localStorage.getItem('theme'))
    }, [])

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}
