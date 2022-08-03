import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { useAuth } from '../contexts/auth'

export function DefaultLayout() {
	const {isLoading, toggleLoading} = useAuth()

	useEffect(()=>{	 
		const timeout = setTimeout(() => {
		  if(isLoading) {
				toggleLoading()
			}
		}, 2500)

		return () => clearTimeout(timeout)
	},[isLoading])

	return (
    <main className="min-h-screen w-screen bg-blue-400 flex flex-col justify-between">
		  <Header />
			<Outlet />
		</main>
  )
}
