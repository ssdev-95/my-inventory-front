import { useContext } from "react"
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
                        <a href="https://www.instagram.com/xsallus.dev/" target="_blank" rel="external"><img src="drawable/instagram.svg" 
                             className={styles.logo}
                             id={'insta'}
                             alt="Insta logo"
                        /></a>
                        <a href="https://twitter.com/xSallus_dev" target="_blank" rel="external"><img src="drawable/twitter.svg" 
                             className={styles.logo} 
                             alt="Twitter logo"
                        /></a>
                        <a href="https://www.linkedin.com/in/salomao-vasconcelos/" target="_blank" rel="external"><img src="drawable/linkedin.svg"  
                             className={styles.logo}
                             alt="Linkedin logo"
                        /></a>
                        <a href="#"><img src="drawable/mail.svg"  
                             className={styles.logo}
                             alt="Email logo"
                        /></a>
                        <a href="https://www.behance.net/salomaosouza"><img src="drawable/behance.svg"  
                             className={styles.logo}
                             alt="Behance logo"
                        /></a>
                        <a href="#"><img src="drawable/paypal.svg"  
                             className={styles.logo}
                             alt="Paypal logo"
                        /></a>
                        <a href="https://github.com/xSallus/MyInventory" target="_blank" rel="external"><img src="drawable/github.svg"  
                             className={styles.logo}
                             alt="Github logo"
                        /></a>
                    </div>
                </div>
            </div>
        )
    )
}