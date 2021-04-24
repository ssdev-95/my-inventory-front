import { ReactNode, createContext, useState, useContext, useEffect } from 'react'

interface ContextData {
    theme: string;
    toggleTheme: ()=>void;
}

interface ProviderProps {
    children: ReactNode;
}

const ThemeContext = createContext({} as ContextData)

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
