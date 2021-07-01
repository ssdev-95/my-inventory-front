import { useContext } from 'react'
import { AuthContext } from 'src/contexts/AuthContext'

export function useAuth() {
    return useContext(AuthContext)
}