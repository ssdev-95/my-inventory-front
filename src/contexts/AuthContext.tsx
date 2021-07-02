import { createContext, useState, /*useEffect*/ } from 'react'
import { Inventory } from 'src/@types/inventory'
import { auth, firebase } from 'src/services/firebase'

export const AuthContext = createContext({} as Inventory.AuthContextData)

export function AuthProvider({ children }: Inventory.ProviderProps) {

    const [ user, setUser ] = useState<Inventory.User>()

    async function handleLoginWithGoogle() {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
        const { user } = await auth.signInWithPopup(googleAuthProvider)

        if (!user || !user.photoURL || !user.displayName) {
            throw new Error('Invalid user')
        }

        setUser({
            id: user.uid,
            avatar: user.photoURL,
            name: user.displayName
        })
    }

    async function handleLoginWithGithub() {
        const githubAuthProvider = new firebase.auth.GithubAuthProvider()
        const { user } = await auth.signInWithPopup(githubAuthProvider)
        
        if (!user || !user.photoURL || !user.displayName) {
            throw new Error('Invalid user')
        }

        setUser({
            id: user.uid,
            avatar: user.photoURL,
            name: user.displayName
        })
    }

    async function handleLoginWithEmailAndPassword(email: string, password:string) {
        const { user } = await auth.signInWithEmailAndPassword(email, password)
        
        if (!user || !user.photoURL || !user.displayName) {
            throw new Error('Invalid user')
        }

        setUser({
            id: user.uid,
            avatar: user.photoURL,
            name: user.displayName
        })
    }

    return (
        <AuthContext.Provider value={{
            user,
            handleLoginWithGoogle,
            handleLoginWithGithub,
            handleLoginWithEmailAndPassword
        }}>
            {children}
        </AuthContext.Provider>
    )
}