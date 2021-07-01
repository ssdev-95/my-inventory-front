import { createContext, useState } from 'react'
import  { Inventory } from 'src/@types/inventory'

export const NavigationContext = createContext({} as Inventory.INavigationContext)

export function NavigationProvider({ children }: Inventory.ProviderProps) {
    const [currentComponent, setCurrentComponent] = useState<JSX.Element>()

    function changeCurrentComponent(component: JSX.Element) {
        setCurrentComponent(component)
    }

    return (
        <NavigationContext.Provider value={{
            currentComponent,
            changeCurrentComponent
        }}>
            { children }
        </NavigationContext.Provider>
    )
}
