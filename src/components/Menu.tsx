import EventEmitter from 'events';
import { useState } from 'react';
import styles from '../styles/components/Menu.module.css';

export function Menu() {
    const [isDropdown, setIsDropdown] = useState(false)

    const dropDown = () => {
        setIsDropdown(!isDropdown)
        console.log(isDropdown)
    }

    function handleClick() {
        window.addEventListener('click', e => {
            e.preventDefault()
        })
    }

    return (
        <div>
            <nav className={styles.navBar}>
                <ul>
                    <li><a href="#" onClick={handleClick}>login</a></li>
                    <li><a href="#" onClick={handleClick}>contact</a></li>
                    <li><a href="#" onClick={handleClick}>about</a></li>
                </ul>
            </nav>
            { isDropdown && (
                <div className={styles.dropdownMenu}>
                    <ul>
                        <li><a href="#" onClick={handleClick}>login</a></li>
                        <li><a href="#" onClick={handleClick}>contact</a></li>
                        <li><a href="#" onClick={handleClick}>about</a></li>
                    </ul>
                </div>
            )}
            <div className={styles.burger} onClick={dropDown}>
                <div className={styles.rectTop}></div>
                <div className={styles.rectMid}></div>
                <div className={styles.rectBot}></div>
            </div>
        </div>
    )
}