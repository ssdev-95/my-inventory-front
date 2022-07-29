import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'

export function DefaultLayout() {
  return (
		<main
		  className="min-h-screen w-screen bg-blue-400 flex flex-col justify-between"
		>
			<Header />
			<Outlet />
		</main>
	)
}
