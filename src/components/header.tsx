import { useAuth } from '../contexts/auth'

export function Header() {
  const { user, onSignOutRequested } = useAuth()

	const handleLogout = () => {
	  onSignOutRequested()
	}

	return (
    <header className="w-[1100px] max-w-full px-4 py-5 bg-blue-500 flex items-center justify-between">
      <p className="text-blue-100">My inventory&trade;</p>
      {user ? (
			  <button onClick={handleLogout}>
					@{user.nick} • x
				</button>
			) : (
			  <p className="text-blue-100">
				  Signin • Signup
				</p>
			)}
    </header>
  )
}
