import { ReactNode, CSSProperties } from 'react'

declare namespace Inventory {
    export interface User {
        id: string;
        name: string;
        avatar: string;
    }

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

    export interface ContainerProps {
        cstyle?: CSSProperties | undefined;
        children?: ReactNode | undefined;
    }
    
    export interface ThemeContextData {
        theme: string;
        toggleTheme: ()=>void;
    }

    export interface AuthContextData {
        user: User|undefined;
        handleLoginWithGoogle: ()=>Promise<void>;
        handleLoginWithGithub: ()=>Promise<void>;
        handleLoginWithEmailAndPassword: (email: string, password: string)=>Promise<void>;
    }

    export interface INavigationContext {
        currentComponent: string|undefined;
        changeCurrentComponent: (component: string) => void;
    }    
}