import { useState } from 'react'

import { CButton } from 'src/components/Button'
import GoogleIcon from 'src/drawable/google.svg'

import { useAuth } from 'src/hooks/useAuth'

import styles from './login.module.scss'

export const CLogin: React.FC = ()  =>{
    const { handleLoginWithEmailAndPassword, handleLoginWithGoogle } = useAuth()
    const [ email, setEmail ] = useState('')
    const [ phrase, setPhrase ] = useState('')

   async function handleManualLogin() {
       if(email.trim() === '' || phrase.trim() === '') {
           alert('Invalid email/password')
           return
       }

       await handleLoginWithEmailAndPassword(email, phrase)
       return
   }

    return (
        <div className={styles.login}>
            <main>
                <div>
                    <CButton onClick={handleLoginWithGoogle} className={styles.googlebutton}>
                        <img src={GoogleIcon} alt="Login with Google" />
                        <span>Login with Google</span>
                    </CButton>
                    <span className={styles.divider}>ou</span>
                    <form onSubmit={handleManualLogin} className={styles.form}>
                        <input onChange={e => setEmail(e.target.value)} type="email" />
                        <input onChange={e => setPhrase(e.target.value)} type="password" />
                        <CButton type="submit" className={styles.button}>
                            <span>Login with Google</span>
                        </CButton>
                    </form>
                    <small>Not have an account ?<br/> Login with google or <CButton>SignUp</CButton> now.</small>
                </div>
            </main>
            <aside>
                <span>login</span>
            </aside>
        </div>
    )
}