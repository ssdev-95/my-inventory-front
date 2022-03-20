import { useContext } from 'react'
import { ThemeContext } from 'src/contexts/Theme'

export function useTheme() {
    return useContext(ThemeContext)
}