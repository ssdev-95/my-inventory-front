import { ReactNode } from 'react'

export interface Product {
	id?: string;
	name: string;
	category: string;
	quantity: number;
	expiration: string;
}

export interface HomeProps {
	products: Product[];
}

export interface ProviderProps {
    children: ReactNode
}

export interface AddProductModalContextData {
    isAddModalOpen: boolean;
    toggleModal: ()=>void;
    submit: (data:any)=>void;
}

export interface ContactModalContextData {
    isContactModalOpen: boolean;
    toggleContactModal: ()=>void;
}

export interface EditModalContextData {
    isEditModalOpen: boolean;
    toggleEditModal: (product:any)=>void;
    updateProduct: (updatedProduct:any)=>void;
    toUpdate: any;
}

export interface ThemeContextData {
    theme: string;
    toggleTheme: ()=>void;
}

export interface DashboardProps {
    products: Product[];
}

export interface HeaderProps {
    pathA: string;
    pathB: string;
}
