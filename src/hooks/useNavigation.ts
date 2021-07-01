import { useContext } from 'react'
import { NavigationContext } from "src/contexts/NavigationContext"

export function useNavigation() {
    return useContext(NavigationContext)
}