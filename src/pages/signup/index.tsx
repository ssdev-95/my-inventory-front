import {useForm} from 'react-hook-form';
import {Menu} from '../../components/Menu';
import {LoginModal} from '../../components/LoginModal';
import {ContactModal} from '../../components/ContactModal';

import styles from '../../styles/pages/Home.module.css';
import stylos from '../../styles/pages/Signup.module.css';

export default function Signup() {
    const {register, handleSubmit} = useForm()
    const submit = () => {
        window.addEventListener('click', event => {
            event.preventDefault()
        })
    }

    return (
        <div className={styles.container}>
        
        <header>
            <img src="drawable/app_logo.png" alt="App logo"/>
            <Menu className={'home'} />
            <LoginModal />
            <ContactModal />
        </header>

        <hr />

        <main className={stylos.content}>
            <form action="#">
                <input type="email" 
                    name="user_email" 
                    placeholder="your_name@domain.mail"
                    ref={register}/>
                <input type="text" 
                    name="user_name"
                    placeholder="Username"
                    ref={register}/>
                <input type="date" 
                    name="user_birthday"/>
                <input type="password" 
                    name="user_passphrase" 
                    placeholder="Password"
                    ref={register}/>
                <input type="tel" 
                    name="user_tel" 
                    placeholder="(XX) X XXXX-XXXX"
                    ref={register}/>
                <a className={stylos.submit} href="#" onClick={handleSubmit(submit)}>
                    <img src="drawable/task.svg" alt=""/>
                    Submit
                </a>
            </form>
            <div className={stylos.alternatives}>
                <a className={stylos.git_login} href="">
                    <img src="drawable/github.svg" alt=""/>
                    Login via Github
                </a>
                <a className={stylos.ggl_login} href="">
                    <img src="drawable/google.svg" alt=""/>
                    Login via Google
                </a>
                <a className={stylos.fb_login} href="">
                    <img src="drawable/facebook.svg" alt=""/>
                    Login via  Facebook
                </a>
            </div>
        </main>

        <hr />

        <footer className={styles.footer}>
        </footer>
        </div>
    )
}