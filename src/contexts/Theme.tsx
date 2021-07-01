import { createContext, useState, useEffect } from 'react'

import { Inventory } from 'src/@types/inventory'

const ThemeContext = createContext({} as Inventory.ThemeContextData)

export const ThemeProvider = ({children}: Inventory.ProviderProps) => {
    const [ theme, setTheme ] = useState('light')

    function toggleTheme() {
        theme==='light'? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')

        setTheme(localStorage.getItem('theme')||'')
    }

    useEffect(()=>{
        setTheme(localStorage.getItem('theme')||'')
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
