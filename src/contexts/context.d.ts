import { ReactNode } from "react"

declare namespace DefaultContext {
	export interface ProviderProps {
		children:ReactNode
	}
}

declare namespace AuthContext {
	export interface User {
		id: string
		nick: string
	}

	export interface SigninPayload {
		email:string
		password:string
	}

	export interface ContextData {
		user:User|null
		isLoading:boolean

		toggleLoading:() => void
		updateUser: (authUser:User|null) => void

		onSignOutRequested: () => Promise<void>
		onSignInRequested: (method:SigninMethodType, payload?:SigninPayload) => Promise<void>
	}

	export type SigninMethodType = 'github' | 'credentials'
}

declare namespace ProductContext {
	export type ProductDTO = Omit<Product, 'id'> & {
		ownerid:string
	}

	export interface Product {
		id:string
		name:string
		amount:number
		unity:string
		expiration:string
		category:string
	}

	export interface ContextData {
		products: Product[]
		retrieveProducts: (ownerid:string) => Promise<void>
	}
}
