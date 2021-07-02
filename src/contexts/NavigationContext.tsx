import { createContext, useState } from 'react'

import  { Inventory } from 'src/@types/inventory'

export const NavigationContext = createContext({} as Inventory.INavigationContext)

export function NavigationProvider({ children }: Inventory.ProviderProps) {
    const [currentComponent, setCurrentComponent] = useState<string|undefined>()

    function changeCurrentComponent(component: string) {
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
