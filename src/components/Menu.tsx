import { useState } from 'react';
import styles from '../styles/components/Menu.module.css';

export function Menu() {
    const [marginTop, setMarginTop] = useState(-225)

    function drop() {
        //const navBar = document.querySelector('.navBar')
        if(marginTop==0) {
            setMarginTop(-225)
        } else {
            setMarginTop(0)
        }
        console.log(marginTop)
    }

    return (
        <div>
            <nav style={{top: `${marginTop}px`}} className={styles.navBar}>
                <ul>
                    <li>login</li>
                    <li>contact</li>
                    <li>about</li>
                </ul>
            </nav>
            <div className={styles.burger} onClick={drop}>
                <div className={styles.rectTop}></div>
                <div className={styles.rectMid}></div>
                <div className={styles.rectBot}></div>
            </div>
        </div>
    )
}