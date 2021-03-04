import { useContext } from "react"
import Link from 'next/link';
import { ContactModalContext } from '../contexts/ContactModalContext'
import styles from '../styles/components/ContactModal.module.css';

export function ContactModal() {
    const {isContactModalOpen, toggle} = useContext(ContactModalContext)

    return (
        isContactModalOpen && (
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <div className={styles.burger} onClick={toggle}>
                        <div className={styles.rectTop}></div>
                        <div className={styles.rectBot}></div>
                    </div>
                    <div className={styles.iconsContainer}>
                        <Link href="https://www.instagram.com/xsallus.dev/" ><img src="drawable/instagram.svg" 
                             className={styles.logo}
                             id={'insta'}
                             alt="Insta logo"
                        /></Link>
                        <Link href="https://twitter.com/xSallus_dev" ><img src="drawable/twitter.svg" 
                             className={styles.logo} 
                             alt="Twitter logo"
                        /></Link>
                        <Link href="https://www.linkedin.com/in/salomao-vasconcelos/" ><img src="drawable/linkedin.svg"  
                             className={styles.logo}
                             alt="Linkedin logo"
                        /></Link>
                        <Link href="mailTo: souza95salomao@gmail.com"><img src="drawable/mail.svg"  
                             className={styles.logo}
                             alt="Email logo"
                        /></Link>
                        <Link href="https://www.behance.net/salomaosouza"><img src="drawable/behance.svg"  
                             className={styles.logo}
                             alt="Behance logo"
                        /></Link>
                        <Link href="#"><img src="drawable/paypal.svg"  
                             className={styles.logo}
                             alt="Paypal logo"
                        /></Link>
                        <Link href="https://github.com/xSallus/MyInventory" ><img src="drawable/github.svg"  
                             className={styles.logo}
                             alt="Github logo"
                        /></Link>
                    </div>
                </div>
            </div>
        )
    )
}