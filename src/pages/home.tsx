import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/auth'

export function Home() {
  const { user } = useAuth()

	if(!user) {
	  return (
		  <Navigate to="/" />
		)
	}

  return (
	  <div className="flex-1 flex items-center justify-center w-full">
			<p className="text-blue-100">Home</p>
		</div>
	)
}
