import React, { useState, FormEvent } from 'react'

import { CButton } from 'src/components/Button'
import { ReAnimated } from 'src/components/reAnimated'

import { useAuth } from 'src/hooks/useAuth'

import styles from './signup.module.scss'

export const CSignUp: React.FC = ()  =>{
    const { handleSignUpWithEmailAndPassword } = useAuth()
    const [ email, setEmail ] = useState('')
    const [ phrase, setPhrase ] = useState('')

   async function handleManualSignUp(event:FormEvent) {
       event.preventDefault()

       if(email.trim() === '' || phrase.trim() === '') {
           alert('Invalid email/password')
           return
       }

       await handleSignUpWithEmailAndPassword(email, phrase)
       return
   }

    return (
        <div className={styles.signup}>
            <main>
                <div>
                    <form onSubmit={handleManualSignUp} className={styles.signupform}>
                        <input onChange={e => setEmail(e.target.value)} type="email" />
                        <input onChange={e => setPhrase(e.target.value)} type="password" />
                        <CButton type="submit" className={styles.signupbutton}>
                            <span>SignUp</span>
                        </CButton>
                    </form>
                </div>
            </main>
            <aside>
                <ReAnimated />
            </aside>
        </div>
    )
}