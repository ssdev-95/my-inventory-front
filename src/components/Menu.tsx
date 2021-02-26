import { useState, useEffect } from 'react';
import styles from '../styles/components/Menu.module.css';

export function Menu() {
    const [isDropdown, setIsDropdown] = useState(false)
    const [marginTop, setMarginTop] = useState(-225)

    const dropDown = () => {
        if(marginTop == 0) {
            setIsDropdown(false)
        } else {
            setIsDropdown(true)
        }
        console.log(isDropdown)
    }

    useEffect(() => {
        isDropdown ? (setMarginTop(-225)) : (setMarginTop(0))
        console.log(marginTop)
    }, [isDropdown])

    return (
        <div>
            <nav className={styles.navBar}>
                <ul>
                    <li>login</li>
                    <li>contact</li>
                    <li>about</li>
                </ul>
            </nav>
            <div className={styles.burger} onClick={dropDown}>
                <div className={styles.rectTop}></div>
                <div className={styles.rectMid}></div>
                <div className={styles.rectBot}></div>
            </div>
        </div>
    )
}