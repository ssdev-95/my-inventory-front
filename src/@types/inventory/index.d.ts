import { ReactNode } from 'react'

declare namespace Inventory {
    export interface Product {
        id?: string;
        name: string;
        category: string;
        quantity: number;
        expiration: string;
    }
    
    export interface ProviderProps {
        children: ReactNode
    }
    
    export interface ThemeContextData {
        theme: string;
        toggleTheme: ()=>void;
    }

    export interface INavigationContext {
        currentComponent: JSX.Element|undefined;
        changeCurrentComponent: (component: JSX.Element) => void;
    }    
}