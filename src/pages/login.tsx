import { useState, FormEvent } from 'react'
import { Navigate } from 'react-router-dom'
import {Loading} from '../components/loading'

import { useAuth } from '../contexts/auth'

export function Signin() {
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [error, setError] = useState<string | null | any>(null)

  const { user, onSignInRequested, toggleLoading, isLoading } = useAuth()

  function resetFields() {
    setEmail('')
    setPassword('')
    setError(null)
  }

  async function handleSignin(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
		toggleLoading()

    try {
    if (!email || !password) {
      setError('Invalid credentials')

      setTimeout(resetFields, 2500)
      return
    }

    await onSignInRequested('credentials', {
		  email,
			password
		})
		} catch (err:any) {
		  setError(err.message.split('/')[1].replace(').',''))
		}

    setTimeout(resetFields, 700)
  }

  if (!!user) {
    return (
		  <Navigate to="/home" />
    )
  }

  return (
    <div className="flex-1 flex items-center justify-center w-[1100px] max-w-full">
      <div className="w-[300px] relative flex flex-col gap-6">
        <button
					onClick={()=>onSignInRequested('github')}
					className="mt-2 p-3 w-full bg-blue-900 text-blue-100 rounded-md"
				>
          Enter with Github
        </button>
        <strong className="mx-auto text-blue-100 text-lg">~ or ~</strong>
        <form onSubmit={handleSignin}>
          <input
            type="email"
						required
            className="p-3 w-full rounded-md"
            placeholder="salame@developing.comma"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
						required
            className="my-2 p-3 w-full rounded-md"
            placeholder="Do you remekber you password, right?"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
						disabled={!email && !password}
            className="mt-4 p-3 w-full bg-blue-800 text-blue-100 rounded-md disabled:bg-red-800 flex items-center justify-center"
          >
            {isLoading ? (
						  <Loading
							  color="bg-blue-800"
								gradient="bg-grad-alt"
							/>
						) : 'Enter with credentials'}
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
