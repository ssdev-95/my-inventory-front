import { useState, FormEvent } from 'react'

import { CButton } from 'src/components/Button'
import { ReAnimated } from 'src/components/reAnimated'
import GoogleIcon from 'src/drawable/google.svg'

import { useAuth } from 'src/hooks/useAuth'
import { useNavigation } from 'src/hooks/useNavigation'

import styles from './login.module.scss'

export const CLogin: React.FC = ()  =>{
    const { changeCurrentComponent } = useNavigation()
    const { handleLoginWithEmailAndPassword, handleLoginWithGoogle } = useAuth()
    const [ email, setEmail ] = useState('')
    const [ phrase, setPhrase ] = useState('')

   async function handleManualLogin(event: FormEvent) {
       event.preventDefault()

       if(email.trim() === '' || phrase.trim() === '') {
           alert('Invalid email/password')
           return;
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
                            <span>LogIn</span>
                        </CButton>
                    </form>
                    <small>Not have an account ?<br/> Login with google or <CButton onClick={()=>changeCurrentComponent('SignUp')}>SignUp</CButton> now.</small>
                </div>
            </main>
            <aside>
                <ReAnimated text="Loading.." />
            </aside>
        </div>
    )
}