import { useState } from 'react';
import styles from '../styles/components/Menu.module.css';

export function Menu() {
    const [isDropdown, setIsDropdown] = useState(false)
    const [marginTop, setMarginTop] = useState(-225)

    const dropDown = () => {
        setIsDropdown(!isDropdown)
        useEffect(isDropdown)
        console.log(isDropdown)
    }

    const useEffect = (state: Boolean) => {
        state ? (setMarginTop(-225)) : (setMarginTop(0))
        console.log(marginTop)
    }

    return (
        <div>
            <nav style={{top: marginTop}} className={styles.navBar}>
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