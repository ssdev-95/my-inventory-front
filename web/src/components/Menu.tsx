import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';

import { ContactModalContext } from '../contexts/ContactModalContext';
import { LoginModalContext } from '../contexts/LoginModalContext';

import styles from '../styles/components/Menu.module.css';

export function Menu(props) {
    const { toggle } = useContext(ContactModalContext)
    const { openCloseLoginModal } = useContext(LoginModalContext)
    const [isDropdown, setIsDropdown] = useState(false)
    const [route, setRoute] = useState('/')
    const ref = props.className

    useEffect(()=>{
        switch(ref) {
            case 'home':
                setRoute('/')
                break
            case 'about':
                setRoute('/about')
                break
            default:
                alert(`Route ${ref} not found!`)
                break
        }
    },[])

    const dropDown = () => {
        setIsDropdown(!isDropdown)
    }

    function handleClick() {
        window.addEventListener('click', e => {
            e.preventDefault()
        })
    }

    function openContact() {
        window.addEventListener('click', e => {
            e.preventDefault()
        })
        toggle()
    }

    return (
        <div>
            <nav className={styles.navBar}>
                <ul>
                    <li><a href="#" onClick={openCloseLoginModal}>login</a></li>
                    <li><a href="#" onClick={openContact}>contact</a></li>
                    <li><Link href={{pathname: `${route}`}}><a>{ref}</a></Link></li>
                </ul>
            </nav>
            { isDropdown && (
                <div className={styles.dropdownMenu}>
                    <ul>
                        <li><a href="#" onClick={openCloseLoginModal}>login</a></li>
                        <li><a href="#" onClick={openContact}>contact</a></li>
                        <li><Link href={{pathname: `${route}`}}><a>{ref}</a></Link></li>
                    </ul>
                </div>
            )}
            <div className={styles.burger} onClick={dropDown}>
                <div 
                    className={!isDropdown?(`${styles.rectTop}`):(`${styles.rectTop} ${styles.clicked}`)}>
                </div>
                <div 
                    className={!isDropdown?(`${styles.rectMid}`):(`${styles.rectMid} ${styles.clicked}`)}>
                </div>
                <div 
                    className={!isDropdown?(`${styles.rectBot}`):(`${styles.rectBot} ${styles.clicked}`)}>
                </div>
            </div>
        </div>
    )
}