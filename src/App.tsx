import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged, auth } from './services/firebase'

import { useAuth } from './contexts/auth'
import { DefaultLayout } from './layouts/default'
import { Signin } from './pages/login'
import { Home } from './pages/home'

export function App() {
  const { user, updateUser } = useAuth()

  useEffect(() => {
	  try {
		  const unsubscribe = onAuthStateChanged(
			  auth,
				(data)=>{
				  if(user) {
					  return
					}

					if(!data) {
					  updateUser(null)
						return
					}

					const newUser = {
					  id:data.uid,
						nick:data.email?.split('@')[0] ?? ''
					}

					updateUser(newUser)
				}
			)

			return ()=>unsubscribe()
		} catch (err) {
		  console.log(err)
		}
	}, [])

  return (
	  <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<DefaultLayout />}>
				  <Route path="/" element={<Signin />} />

					<Route path="/home" element={<Home />} />
	  		</Route>
			</Routes>
			</BrowserRouter>
  )
}
