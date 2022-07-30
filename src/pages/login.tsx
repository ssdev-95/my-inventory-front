import { useState, FormEvent } from 'react'
import {
  auth, signInWithEmailAndPassword, signOut
} from '../services/firebase'

type User = {
  id: string
	nick:string
}

export function Signin() {
	const [error, setError] = useState<string|null>(null)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState<User|null>(null)

	function resetFields() {
	  setEmail('')
		setPassword('')
		setError(null)
	}

	async function handleSignin(
	  ev:FormEvent<HTMLFormElement>
	) {
	  ev.preventDefault()

		if(!email || !password) {
		  setError('Invalid credentials')

			setTimeout(resetFields, 2500)
		  return
		}

		const res = await signInWithEmailAndPassword(
		  auth,
			email,
			password
		)

		setUser({
		  id:res.user.uid,
			nick:email.split('@')[0]
		})

		setTimeout(resetFields, 700)
	}

	if(user) {
	  return (
		  <button
				className="mt-4 p-3 w-full bg-blue-800 text-blue-100 rounded-md"
			>
		    {user.nick}
			</button>
		)
	}

  return (
    <div className="flex-1 flex items-center justify-center w-[1100px] max-w-full">
      <div className="w-[300px] relative flex flex-col gap-6">
        <button className="mt-2 p-3 w-full bg-blue-900 text-blue-100 rounded-md">
          Enter with Github
        </button>
				<strong
				   className="mx-auto text-blue-100 text-lg"
				>~ or ~</strong>
				<form
					onSubmit={handleSignin}
				>
					<input
					  type="email"
						className="p-3 w-full rounded-md"
						placeholder="salame@developing.comma"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
					  type="password"
						className="my-2 p-3 w-full rounded-md"
						placeholder="Do you remekber you password, right?"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
					  type="submit"
					  className="mt-4 p-3 w-full bg-blue-800 text-blue-100 rounded-md"
					>
					  Enter with credentials
					</button>

					{error && (
					  <p className="text-center text-yellow-400 text-md font-[500] absolute -bottom-24 left-[50%] -translate-x-[50%]">
					    {error}
					  </p>
					)}
				</form>
      </div>
    </div>
  )
}
