import { useContext } from "react"
import Link from 'next/link'
import {useForm} from 'react-hook-form';
import { LoginModalContext } from '../contexts/LoginModalContext'
import styles from '../styles/components/UserLoginModal.module.css';

export function LoginModal() {
    const {register, handleSubmit} = useForm()
    const {isLoginModalOpen, openCloseLoginModal} = useContext(LoginModalContext)

    const submit = (data) => {
        alert(`You're logged in, ${data.username}`)
        openCloseLoginModal()
    }

    return (
        isLoginModalOpen && (
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <form action="#" className={styles.form}>
                        <input  type="text" 
                                name="username"
                                placeholder="Username" 
                                ref={register}
                        />
                        <small>Not registered? <Link href={{pathname: '/signup'}}><a href="#" onClick={openCloseLoginModal}>Signup now!</a></Link></small>
                        <input  type="password" 
                                name="passphrase"
                                placeholder="Password" 
                                ref={register}
                        />
                    </form>
                    <div className={styles.actions}>
                        <a className={styles.cancelButton} 
                            href="" 
                            onClick={openCloseLoginModal}>cancel</a>
                        <a className={styles.saveButton} href="" onClick={handleSubmit(submit)}>save</a>
                        </div>
                </div>
            </div>
        )
    )
}