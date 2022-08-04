import {
  useState, useContext, createContext
} from 'react'

import {
	auth,
	signOut,
	signInWithEmailAndPassword
} from '../services/firebase'

import { DefaultContext, AuthContext } from './context'

type ProviderProps = DefaultContext.ProviderProps
type User = AuthContext.User
type SigninPayload = AuthContext.SigninPayload
type ContextData = AuthContext.ContextData
type SigninMethodType = 'github' | 'credentials'

const AuthCtx = createContext({} as ContextData)

export function AuthProvider({children}:ProviderProps) {
	const [isLoading, setIsLoading] = useState(false)
	const [user, setUser] = useState<User|null>(null)


	const toggleLoading = () => {
	  setIsLoading(prev => !prev)
	}

	const updateUser = (authUser:User|null) => {
		setTimeout(()=>setUser(authUser),2000)
	}

	const onSignOutRequested = async () => {
		await signOut(auth)
		setTimeout(() => updateUser(null), 2500)
	}

	const onSignInRequested = async (method:SigninMethodType, payload?:SigninPayload) => {
		toggleLoading()
		switch(method) {
			case 'credentials':
				if(!payload) {
				  console.log('Invalid credentials')
		    }
	
				const { email, password } = payload!
			  const res = await signInWithEmailAndPassword(
					auth,
					email,
					password
			  )

				if(!res.user) {
					console.log('signin failed')
					return
				}

				const newUser:User = {
					id:res.user.uid,
					nick:res.user.email?.split('@')[0]!
				}

				updateUser(newUser)
				break
			case 'github':
			default:
			  console.log('signin failed')
			  break
		}
	}

	return (
	  <AuthCtx.Provider value={{
		  user,
			isLoading,
			updateUser,
			toggleLoading,
			onSignInRequested,
			onSignOutRequested
		}}>
		  {children}
		</AuthCtx.Provider>
	)
}

export function useAuth() {
  return useContext(AuthCtx)
}
